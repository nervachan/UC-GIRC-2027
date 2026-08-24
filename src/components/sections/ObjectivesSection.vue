<script setup lang="ts">
const objectives = [
  'Establish UC-GIRC as a globally recognized annual research conference.',
  'Provide a platform for high-quality, peer-reviewed research dissemination.',
  'Promote interdisciplinary collaboration among academia, industry, and government.',
  'Highlight innovation, resilience, and sustainability solutions.',
  'Strengthen UC’s contribution to QS, WURI, and THE Impact Rankings.',
  'Support Scopus-indexed proceedings and journal publication routes.',
]
</script>

<template>
  <section id="objectives" class="section section--sand objectives">
    <div class="container">
      <div class="section-header">
        <p class="eyebrow" v-reveal>Objectives</p>
        <h2 class="section-title" v-reveal="{ delay: 80 }">
          What UC-GIRC 2027 sets out to achieve
        </h2>
      </div>

      <ol class="objective-grid">
        <li
          v-for="(objective, i) in objectives"
          :key="objective"
          class="objective-card"
          v-reveal="{ delay: (i % 3) * 90 }"
        >
          <span class="objective-no">{{ String(i + 1).padStart(2, '0') }}</span>
          <p class="objective-text">{{ objective }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.objective-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
}

.objective-card {
  position: relative;
  padding: 2rem 1.7rem 1.8rem;
  border-radius: var(--radius-md);
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-xs);
  overflow: hidden;
  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease;
}

.objective-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(var(--brand-canopy), var(--leaf-300));
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.3s ease;
}

.objective-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-soft);
}

.objective-card:hover::before {
  transform: scaleY(1);
}

.objective-no {
  display: block;
  font-family: var(--font-serif);
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1;
  color: var(--leaf-300);
  margin-bottom: 1rem;
}

.objective-text {
  font-size: 1.05rem;
  color: var(--text);
  line-height: 1.6;
}

@media (max-width: 860px) {
  .objective-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 540px) {
  .objective-grid {
    grid-template-columns: 1fr;
  }
}
</style>
