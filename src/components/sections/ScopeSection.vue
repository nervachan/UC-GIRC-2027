<script setup lang="ts">
interface Domain {
  title: string
  icon: string
}

const strokeAttrs =
  'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"'

const domains: Domain[] = [
  {
    title: 'Science, Engineering & Technology Innovations',
    icon: `<svg viewBox="0 0 24 24" ${strokeAttrs}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  },
  {
    title: 'Digital Transformation, AI & Emerging Technologies',
    icon: `<svg viewBox="0 0 24 24" ${strokeAttrs}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>`,
  },
  {
    title: 'Disaster Risk Reduction, Climate & Sustainability',
    icon: `<svg viewBox="0 0 24 24" ${strokeAttrs}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
  },
  {
    title: 'Governance, Policy, Law & Institutional Development',
    icon: `<svg viewBox="0 0 24 24" ${strokeAttrs}><path d="M3 21h18"/><path d="M5 21V8l7-4 7 4v13"/><path d="M9 21v-6h6v6"/></svg>`,
  },
  {
    title: 'Business, Economics, Entrepreneurship & Industry',
    icon: `<svg viewBox="0 0 24 24" ${strokeAttrs}><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>`,
  },
  {
    title: 'Health, Well-being & Human Security',
    icon: `<svg viewBox="0 0 24 24" ${strokeAttrs}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  },
  {
    title: 'Education, Culture, Arts & Social Development',
    icon: `<svg viewBox="0 0 24 24" ${strokeAttrs}><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5"/></svg>`,
  },
  {
    title: 'Community Engagement, Indigenous Knowledge & Inclusion',
    icon: `<svg viewBox="0 0 24 24" ${strokeAttrs}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  },
]
</script>

<template>
  <section id="scope" class="section scope">
    <div class="container">
      <div class="section-header section-header--center">
        <p class="eyebrow" v-reveal>Conference Scope</p>
        <h2 class="section-title" v-reveal="{ delay: 80 }">Inclusive of every discipline</h2>
        <p class="section-lead" v-reveal="{ delay: 140 }">
          Open to all UC colleges and interdisciplinary research domains — from deep technology to
          community and culture.
        </p>
      </div>

      <ul class="domain-grid">
        <li
          v-for="(domain, i) in domains"
          :key="domain.title"
          class="domain-card"
          v-reveal="{ delay: (i % 4) * 80 }"
        >
          <span class="domain-icon" v-html="domain.icon"></span>
          <p class="domain-title">{{ domain.title }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.domain-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.domain-card {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  padding: 1.7rem 1.5rem;
  border-radius: var(--radius-md);
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-xs);
  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease,
    border-color 0.28s ease;
}

.domain-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-soft);
  border-color: var(--border-strong);
}

.domain-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(150deg, rgba(58, 106, 58, 0.14), rgba(58, 106, 58, 0.05));
  color: var(--brand-canopy);
}

.domain-icon :deep(svg) {
  width: 26px;
  height: 26px;
}

.domain-title {
  font-family: var(--font-serif);
  font-size: 1.18rem;
  font-weight: 600;
  color: var(--brand-forest);
  line-height: 1.25;
}

@media (max-width: 900px) {
  .domain-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .domain-grid {
    grid-template-columns: 1fr;
  }
}
</style>
