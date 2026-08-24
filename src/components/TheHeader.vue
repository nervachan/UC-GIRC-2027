<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Scope', href: '#scope' },
  { label: 'Objectives', href: '#objectives' },
  { label: 'SDGs', href: '#sdgs' },
]

const isScrolled = ref(false)
const isMenuOpen = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 24
}

function closeMenu() {
  isMenuOpen.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': isScrolled, 'is-open': isMenuOpen }">
    <div class="container header-inner">
      <a href="#top" class="brand" @click="closeMenu">
        <img
          src="/uc_logo.png"
          alt="University of the Cordilleras logo"
          class="brand-logo"
          width="52"
          height="52"
        />
        <span class="brand-text">
          <span class="brand-org">University of the Cordilleras</span>
          <span class="brand-conf">UC-GIRC 2027</span>
        </span>
      </a>

      <nav class="site-nav" :class="{ 'is-open': isMenuOpen }" aria-label="Primary">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="nav-link"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
        <a
          href="#call-for-papers"
          class="button button--primary button--sm nav-cta"
          @click="closeMenu"
        >
          Call for Papers
        </a>
      </nav>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 40;
  transition:
    background 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease;
  border-bottom: 1px solid transparent;
}

.site-header.is-scrolled,
.site-header.is-open {
  background: rgba(251, 250, 246, 0.88);
  backdrop-filter: blur(14px);
  border-bottom-color: var(--border);
  box-shadow: var(--shadow-sm);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding-block: 0.85rem;
}

/* ---- Brand ---- */
.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.brand-logo {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #fff;
  padding: 5px;
  object-fit: contain;
  box-shadow: var(--shadow-sm);
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.brand-org {
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--on-dark-muted);
  transition: color 0.35s ease;
}

.brand-conf {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--on-dark);
  transition: color 0.35s ease;
}

.is-scrolled .brand-org {
  color: var(--text-muted);
}

.is-scrolled .brand-conf {
  color: var(--brand-forest);
}

/* ---- Nav ---- */
.site-nav {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.nav-link {
  position: relative;
  padding: 0.5rem 0.85rem;
  font-size: 0.94rem;
  font-weight: 500;
  color: var(--on-dark-muted);
  border-radius: var(--radius-pill);
  transition:
    color 0.25s ease,
    background 0.25s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0.85rem;
  right: 0.85rem;
  bottom: 0.28rem;
  height: 2px;
  border-radius: 2px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.28s ease;
}

.nav-link:hover,
.nav-link:focus-visible {
  color: var(--on-dark);
}

.nav-link:hover::after,
.nav-link:focus-visible::after {
  transform: scaleX(1);
}

.is-scrolled .nav-link {
  color: var(--text-muted);
}

.is-scrolled .nav-link:hover,
.is-scrolled .nav-link:focus-visible {
  color: var(--brand-forest);
}

.nav-cta {
  margin-left: 0.6rem;
}

/* ---- Mobile toggle ---- */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  padding: 0 10px;
  background: transparent;
  border: 1px solid var(--border-on-dark);
  border-radius: 12px;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  height: 2px;
  border-radius: 2px;
  background: var(--on-dark);
  transition:
    transform 0.3s ease,
    opacity 0.3s ease,
    background 0.35s ease;
}

.is-scrolled .menu-toggle {
  border-color: var(--border);
}

.is-scrolled .menu-toggle span {
  background: var(--brand-forest);
}

.is-open .menu-toggle span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.is-open .menu-toggle span:nth-child(2) {
  opacity: 0;
}

.is-open .menu-toggle span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 880px) {
  .menu-toggle {
    display: flex;
  }

  .site-nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0.25rem;
    padding: 1rem var(--gutter) 1.5rem;
    background: rgba(251, 250, 246, 0.98);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--border);
    box-shadow: var(--shadow-soft);
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
  }

  .site-nav.is-open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav-link {
    color: var(--text) !important;
    padding: 0.75rem 0.9rem;
    font-size: 1rem;
  }

  .nav-cta {
    margin-left: 0;
    margin-top: 0.5rem;
    width: 100%;
  }
}
</style>
