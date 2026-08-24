<script setup lang="ts">
const facts = [
  { label: 'Dates', value: 'Mar 23–26, 2027' },
  { label: 'Venue', value: 'Baguio City, PH' },
  { label: 'Tracks', value: '4 Research Themes' },
  { label: 'Proceedings', value: 'Scopus Pathway' },
]
</script>

<template>
  <section id="top" class="hero section--forest" aria-labelledby="hero-title">
    <!-- Decorative background motif -->
    <div class="hero-motif" aria-hidden="true">
      <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="300" cy="300" r="120" stroke="currentColor" stroke-width="1" opacity="0.5" />
        <circle cx="300" cy="300" r="190" stroke="currentColor" stroke-width="1" opacity="0.35" />
        <circle cx="300" cy="300" r="260" stroke="currentColor" stroke-width="1" opacity="0.22" />
        <circle cx="300" cy="180" r="6" fill="currentColor" />
        <circle cx="490" cy="300" r="5" fill="currentColor" />
        <circle cx="300" cy="560" r="4" fill="currentColor" />
        <circle cx="110" cy="300" r="5" fill="currentColor" />
        <circle cx="440" cy="160" r="4" fill="currentColor" opacity="0.7" />
        <circle cx="160" cy="440" r="4" fill="currentColor" opacity="0.7" />
        <path
          d="M300 180 L490 300 L300 560 L110 300 Z"
          stroke="currentColor"
          stroke-width="1"
          opacity="0.3"
        />
      </svg>
    </div>

    <div class="container hero-inner">
      <div class="hero-copy">
        <p class="eyebrow" v-reveal>Flagship International Research Conference</p>
        <h1 id="hero-title" v-reveal="{ delay: 80 }">
          International Conference on<br />
          Smart Systems <span class="hero-year">2027</span>
        </h1>
        <p class="hero-theme" v-reveal="{ delay: 160 }">
          AIoT, Artificial Intelligence, and Digital Transformation for Natural Hazards and
          Resilient Futures
        </p>

        <div class="hero-actions" v-reveal="{ delay: 240 }">
          <a class="button button--on-dark" href="#call-for-papers">Call for Papers</a>
          <a class="button button--outline-light" href="#tracks">Explore Tracks</a>
        </div>

        <p class="hero-host" v-reveal="{ delay: 300 }">
          Hosted by the University of the Cordilleras
        </p>
      </div>

      <ul class="hero-facts" v-reveal="{ delay: 360 }">
        <li v-for="fact in facts" :key="fact.label" class="hero-fact">
          <span class="hero-fact-value">{{ fact.value }}</span>
          <span class="hero-fact-label">{{ fact.label }}</span>
        </li>
      </ul>
    </div>

    <a class="hero-scroll" href="#about" aria-label="Scroll to content">
      <span class="hero-scroll-text">Scroll</span>
      <span class="hero-scroll-line" aria-hidden="true"></span>
    </a>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding-top: clamp(6rem, 12vh, 9rem);
  padding-bottom: clamp(3rem, 6vh, 5rem);
  overflow: hidden;
}

/* Dot-grid texture */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(180, 210, 175, 0.16) 1px, transparent 1px);
  background-size: 34px 34px;
  mask-image: radial-gradient(circle at 30% 40%, #000 0%, transparent 78%);
  pointer-events: none;
}

.hero-motif {
  position: absolute;
  top: 50%;
  right: -8%;
  width: min(46vw, 640px);
  aspect-ratio: 1;
  transform: translateY(-50%);
  color: var(--leaf-300);
  opacity: 0.5;
  pointer-events: none;
}

.hero-motif svg {
  width: 100%;
  height: 100%;
  animation: spin 90s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-motif svg {
    animation: none;
  }
}

.hero-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: clamp(3rem, 8vh, 5.5rem);
  width: 100%;
}

.hero-copy {
  max-width: 46rem;
}

.hero h1 {
  font-size: clamp(2.6rem, 4.4vw + 1rem, 5.2rem);
  color: var(--on-dark);
  margin: 1.3rem 0 0;
  letter-spacing: -0.01em;
}

.hero-year {
  color: var(--leaf-300);
  font-style: italic;
}

.hero-theme {
  margin-top: 1.5rem;
  max-width: 40rem;
  font-size: clamp(1.05rem, 0.6vw + 1rem, 1.35rem);
  line-height: 1.6;
  color: var(--on-dark-muted);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.2rem;
}

.hero-host {
  margin-top: 1.6rem;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
  color: var(--on-dark-subtle);
}

/* ---- Facts strip ---- */
.hero-facts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--border-on-dark);
  border: 1px solid var(--border-on-dark);
  border-radius: var(--radius-md);
  overflow: hidden;
  backdrop-filter: blur(4px);
}

.hero-fact {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 1.35rem 1.5rem;
  background: rgba(15, 36, 16, 0.45);
}

.hero-fact-value {
  font-family: var(--font-serif);
  font-size: clamp(1.3rem, 1vw + 1rem, 1.7rem);
  font-weight: 600;
  color: var(--on-dark);
}

.hero-fact-label {
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--leaf-300);
}

/* ---- Scroll cue ---- */
.hero-scroll {
  position: absolute;
  left: 50%;
  bottom: 1.6rem;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 1;
}

.hero-scroll-text {
  font-size: 0.66rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--on-dark-subtle);
}

.hero-scroll-line {
  width: 1px;
  height: 42px;
  background: linear-gradient(var(--leaf-300), transparent);
  position: relative;
  overflow: hidden;
}

.hero-scroll-line::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: var(--leaf-200);
  animation: scroll-cue 2.2s ease-in-out infinite;
}

@keyframes scroll-cue {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(280%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-scroll-line::after {
    animation: none;
  }
}

@media (max-width: 720px) {
  .hero-facts {
    grid-template-columns: repeat(2, 1fr);
  }

  .hero-scroll {
    display: none;
  }
}

@media (max-width: 420px) {
  .hero-facts {
    grid-template-columns: 1fr;
  }
}
</style>
