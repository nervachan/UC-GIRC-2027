import type { Directive } from 'vue'

/**
 * v-reveal — fades/slides an element in the first time it scrolls into view.
 * Usage: <div v-reveal> or <div v-reveal="{ delay: 120 }">
 * Respects prefers-reduced-motion (the CSS handles the no-op there).
 */
const REVEAL_CLASS = 'reveal'
const VISIBLE_CLASS = 'is-visible'

interface RevealOptions {
  delay?: number
}

export const reveal: Directive<HTMLElement, RevealOptions | undefined> = {
  mounted(el, binding) {
    el.classList.add(REVEAL_CLASS)

    const delay = binding.value?.delay ?? 0
    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`
    }

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add(VISIBLE_CLASS)
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add(VISIBLE_CLASS)
            obs.unobserve(el)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(el)
  },
}
