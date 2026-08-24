<script setup lang="ts">
const sdgs = [
  { no: 3, title: 'Good Health & Well-being' },
  { no: 4, title: 'Quality Education' },
  { no: 8, title: 'Decent Work & Economic Growth' },
  { no: 9, title: 'Industry, Innovation & Infrastructure' },
  { no: 11, title: 'Sustainable Cities & Communities' },
  { no: 13, title: 'Climate Action' },
  { no: 16, title: 'Peace, Justice & Strong Institutions' },
  { no: 17, title: 'Partnerships for the Goals' },
]

// Cycle through on-palette green shades to add life without leaving the brand.
const shades = ['var(--forest-800)', 'var(--canopy-600)', 'var(--moss-500)', 'var(--moss-400)']
</script>

<template>
  <section id="sdgs" class="section sdgs">
    <div class="container">
      <div class="section-header section-header--center">
        <p class="eyebrow" v-reveal>SDG Alignment</p>
        <h2 class="section-title" v-reveal="{ delay: 80 }">
          Advancing the UN Sustainable Development Goals
        </h2>
        <p class="section-lead" v-reveal="{ delay: 140 }">
          UC-GIRC 2027 contributes directly to eight of the seventeen global goals.
        </p>
      </div>

      <ul class="sdg-grid">
        <li
          v-for="(sdg, i) in sdgs"
          :key="sdg.no"
          class="sdg-card"
          v-reveal="{ delay: (i % 4) * 70 }"
        >
          <span class="sdg-badge" :style="{ background: shades[i % shades.length] }">
            <span class="sdg-badge-label">SDG</span>
            <span class="sdg-badge-no">{{ sdg.no }}</span>
          </span>
          <p class="sdg-title">{{ sdg.title }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.sdg-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.sdg-card {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  padding: 1.3rem 1.4rem;
  border-radius: var(--radius-md);
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-xs);
  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease,
    border-color 0.28s ease;
}

.sdg-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-soft);
  border-color: var(--border-strong);
}

.sdg-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 58px;
  height: 58px;
  border-radius: 14px;
  color: #fff;
  line-height: 1;
}

.sdg-badge-label {
  font-size: 0.55rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  opacity: 0.85;
}

.sdg-badge-no {
  font-family: var(--font-serif);
  font-size: 1.7rem;
  font-weight: 700;
  margin-top: 2px;
}

.sdg-title {
  font-size: 0.98rem;
  font-weight: 500;
  color: var(--text);
  line-height: 1.35;
}

@media (max-width: 900px) {
  .sdg-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 460px) {
  .sdg-grid {
    grid-template-columns: 1fr;
  }
}
</style>
