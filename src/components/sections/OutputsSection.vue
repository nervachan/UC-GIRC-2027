<script setup lang="ts">
const strokeAttrs =
  'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"'

const outputs = [
  {
    title: 'Scopus-indexed conference proceedings',
    note: 'Subject to evaluation',
    icon: `<svg viewBox="0 0 24 24" ${strokeAttrs}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h8M8 9h2"/></svg>`,
  },
  {
    title: 'Journal publications & special issues',
    note: 'Curated endorsements',
    icon: `<svg viewBox="0 0 24 24" ${strokeAttrs}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  },
  {
    title: 'Policy recommendations & research briefs',
    note: 'Actionable insight',
    icon: `<svg viewBox="0 0 24 24" ${strokeAttrs}><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12h6M9 16h4"/></svg>`,
  },
  {
    title: 'Strengthened international collaborations',
    note: 'Global networks',
    icon: `<svg viewBox="0 0 24 24" ${strokeAttrs}><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  },
  {
    title: 'Innovation & technology-transfer opportunities',
    note: 'Research to impact',
    icon: `<svg viewBox="0 0 24 24" ${strokeAttrs}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  },
  {
    title: 'Enhanced institutional visibility & rankings',
    note: 'QS · WURI · THE',
    icon: `<svg viewBox="0 0 24 24" ${strokeAttrs}><circle cx="12" cy="8" r="6"/><path d="M15.5 13.5L17 22l-5-3-5 3 1.5-8.5"/></svg>`,
  },
]
</script>

<template>
  <section id="outputs" class="section section--sand outputs">
    <div class="container">
      <div class="section-header section-header--center">
        <p class="eyebrow" v-reveal>Expected Outputs</p>
        <h2 class="section-title" v-reveal="{ delay: 80 }">Outcomes that outlast the conference</h2>
      </div>

      <ul class="output-grid">
        <li
          v-for="(output, i) in outputs"
          :key="output.title"
          class="output-card"
          v-reveal="{ delay: (i % 3) * 90 }"
        >
          <span class="output-icon" v-html="output.icon"></span>
          <div class="output-body">
            <p class="output-title">{{ output.title }}</p>
            <p class="output-note">{{ output.note }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.output-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
}

.output-card {
  display: flex;
  gap: 1.15rem;
  align-items: flex-start;
  padding: 1.7rem 1.6rem;
  border-radius: var(--radius-md);
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-xs);
  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease,
    border-color 0.28s ease;
}

.output-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-soft);
  border-color: var(--border-strong);
}

.output-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 13px;
  background: linear-gradient(150deg, rgba(58, 106, 58, 0.14), rgba(58, 106, 58, 0.05));
  color: var(--brand-canopy);
}

.output-icon :deep(svg) {
  width: 24px;
  height: 24px;
}

.output-title {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--brand-forest);
  line-height: 1.25;
}

.output-note {
  margin-top: 0.35rem;
  font-size: 0.82rem;
  letter-spacing: 0.03em;
  color: var(--text-subtle);
}

@media (max-width: 860px) {
  .output-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 540px) {
  .output-grid {
    grid-template-columns: 1fr;
  }
}
</style>
