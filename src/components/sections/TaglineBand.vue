<script setup lang="ts">
const phrases = [
  { verb: 'Innovating', noun: 'Knowledge' },
  { verb: 'Transforming', noun: 'Communities' },
  { verb: 'Sustaining', noun: 'Futures' },
]
</script>

<template>
  <section id="tagline" class="section section--forest tagline">
    <div class="tagline-motif" aria-hidden="true"></div>
    <div class="container tagline-inner">
      <p class="tagline-label" v-reveal>Conference Tagline</p>
      <h2 class="tagline-quote">
        <span
          v-for="(phrase, i) in phrases"
          :key="phrase.verb"
          class="tagline-line"
          v-reveal="{ delay: i * 120 }"
        >
          <span class="tagline-verb">{{ phrase.verb }}</span> {{ phrase.noun }}.
        </span>
      </h2>

      <div class="tagline-cta" v-reveal="{ delay: 360 }">
        <a class="button button--on-dark" href="#call-for-papers">Call for Papers</a>
        <p class="tagline-meta">March 23–26, 2027 · University of the Cordilleras</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tagline {
  position: relative;
  text-align: center;
  overflow: hidden;
}

.tagline-motif {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(180, 210, 175, 0.14) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(circle at 50% 50%, #000 0%, transparent 72%);
  pointer-events: none;
}

.tagline-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tagline-label {
  font-size: 0.74rem;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  color: var(--leaf-300);
  margin-bottom: 1.6rem;
}

.tagline-quote {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  color: var(--on-dark);
  font-size: clamp(2rem, 3.5vw + 1rem, 4rem);
  line-height: 1.12;
  font-weight: 600;
}

.tagline-verb {
  color: var(--leaf-300);
  font-style: italic;
}

.tagline-cta {
  margin-top: 2.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1rem;
}

.tagline-meta {
  font-size: 0.92rem;
  color: var(--on-dark-muted);
}
</style>
