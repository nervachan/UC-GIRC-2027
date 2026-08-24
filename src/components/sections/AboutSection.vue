<script setup lang="ts">
const significance = [
  'Institutionalize a flagship international conference of UC',
  'Strengthen research, innovation, and global engagement',
  'Support interdisciplinary collaboration across all colleges',
  'Advance the UN Sustainable Development Goals',
  'Enhance UC’s visibility in global rankings and networks',
]
</script>

<template>
  <section id="about" class="section about">
    <div class="container about-grid">
      <div class="about-main">
        <div class="section-header">
          <p class="eyebrow" v-reveal>Background &amp; Rationale</p>
          <h2 class="section-title" v-reveal="{ delay: 80 }">
            A convergence of disciplines for resilient futures
          </h2>
          <p class="section-lead" v-reveal="{ delay: 140 }">
            UC-GIRC is the flagship annual international research conference of the University of
            the Cordilleras — uniting scholars, industry, and government to advance innovation,
            resilience, and convergence.
          </p>
        </div>

        <div class="about-prose" v-reveal="{ delay: 200 }">
          <p>
            In an era of rapid technological advancement, climate uncertainties, and complex
            socio-economic challenges, higher education institutions play a critical role in
            generating knowledge, fostering innovation, and advancing sustainable development. The
            convergence of disciplines across science, technology, governance, business, health, and
            the social sciences is increasingly necessary to address global and local issues
            effectively.
          </p>
          <p>
            The 2027 edition focuses on resilience and disaster risk reduction — aligned with the
            Sendai Framework and UNDRR initiatives — while maintaining an inclusive scope for all UC
            colleges and disciplines.
          </p>
        </div>
      </div>

      <aside class="about-panel" v-reveal="{ delay: 160 }">
        <p class="about-panel-kicker">Strategic Significance</p>
        <h3 class="about-panel-title">Why UC-GIRC matters</h3>
        <ul class="about-panel-list">
          <li v-for="item in significance" :key="item">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M20 6L9 17l-5-5"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>{{ item }}</span>
          </li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1.35fr 0.9fr;
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: start;
}

.about-prose {
  display: grid;
  gap: 1.2rem;
  max-width: 60ch;
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.8;
}

/* ---- Side panel ---- */
.about-panel {
  position: relative;
  padding: clamp(1.8rem, 3vw, 2.5rem);
  border-radius: var(--radius-lg);
  background:
    radial-gradient(120% 100% at 100% 0%, rgba(58, 106, 58, 0.16), transparent 60%),
    linear-gradient(160deg, var(--surface), #f4f2e9);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
}

.about-panel-kicker {
  font-size: 0.72rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--moss-500);
  font-weight: 600;
}

.about-panel-title {
  font-size: 1.6rem;
  margin: 0.6rem 0 1.4rem;
}

.about-panel-list {
  display: grid;
  gap: 1rem;
}

.about-panel-list li {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  font-size: 0.98rem;
  color: var(--text);
  line-height: 1.5;
}

.about-panel-list svg {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  margin-top: 1px;
  padding: 3px;
  border-radius: 50%;
  background: rgba(58, 106, 58, 0.14);
  color: var(--brand-canopy);
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
