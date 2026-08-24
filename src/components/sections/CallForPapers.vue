<script setup lang="ts">
const milestones = [
  { date: 'Sep 30, 2026', label: 'Abstract Deadline' },
  { date: 'Oct 31, 2026', label: 'Full Paper Submission' },
  { date: 'Jan 30, 2027', label: 'Camera-Ready' },
  { date: 'Mar 23–26, 2027', label: 'Conference' },
]

const benefits = [
  'Scopus-indexed proceedings pathway (subject to evaluation)',
  'Journal special issue opportunities',
  'International collaboration and policy impact',
  'Innovation and technology-transfer visibility',
]
</script>

<template>
  <section id="call-for-papers" class="section section--sand cfp">
    <div class="container">
      <div class="section-header section-header--center">
        <p class="eyebrow" v-reveal>Call for Papers</p>
        <h2 class="section-title" v-reveal="{ delay: 80 }">Submit &amp; participate</h2>
        <p class="section-lead" v-reveal="{ delay: 140 }">
          Share peer-reviewed research, applied innovation, and policy insights aligned with the
          UC-GIRC 2027 theme.
        </p>
      </div>

      <!-- Milestone timeline -->
      <ol class="timeline" v-reveal>
        <span class="timeline-track" aria-hidden="true"></span>
        <li v-for="(m, i) in milestones" :key="m.label" class="timeline-step">
          <div class="timeline-node">
            <span class="timeline-dot"></span>
          </div>
          <p class="timeline-phase">Step {{ i + 1 }}</p>
          <p class="timeline-date">{{ m.date }}</p>
          <p class="timeline-label">{{ m.label }}</p>
        </li>
      </ol>

      <!-- Conversion panel -->
      <div class="cfp-panel" v-reveal>
        <div class="cfp-panel-copy">
          <h3>Why participate</h3>
          <ul class="cfp-benefits">
            <li v-for="b in benefits" :key="b">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="currentColor"
                  stroke-width="2.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>{{ b }}</span>
            </li>
          </ul>
        </div>
        <div class="cfp-panel-cta">
          <p class="cfp-cta-title">Ready to contribute?</p>
          <p class="cfp-cta-note">
            Submissions open across all four research tracks and every UC college.
          </p>
          <a class="button button--on-dark" href="#tracks">Explore the Tracks</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ---- Timeline ---- */
.timeline {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: clamp(3rem, 6vw, 4.5rem);
}

.timeline-track {
  position: absolute;
  top: 11px;
  left: 12.5%;
  right: 12.5%;
  height: 2px;
  background: linear-gradient(90deg, var(--brand-canopy), var(--leaf-300));
  opacity: 0.5;
}

.timeline-step {
  position: relative;
  z-index: 1;
  text-align: center;
  padding-inline: 0.5rem;
}

.timeline-node {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.timeline-dot {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--surface-sand);
  border: 2px solid var(--brand-canopy);
  box-shadow: 0 0 0 5px rgba(43, 80, 43, 0.12);
  position: relative;
}

.timeline-dot::after {
  content: '';
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  background: var(--brand-canopy);
}

.timeline-phase {
  font-size: 0.68rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--moss-500);
  font-weight: 600;
}

.timeline-date {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--brand-forest);
  margin: 0.3rem 0 0.15rem;
}

.timeline-label {
  font-size: 0.92rem;
  color: var(--text-muted);
}

/* ---- Conversion panel ---- */
.cfp-panel {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: clamp(1.5rem, 4vw, 3.5rem);
  align-items: center;
  padding: clamp(1.8rem, 4vw, 3rem);
  border-radius: var(--radius-lg);
  background:
    radial-gradient(120% 120% at 0% 0%, rgba(58, 106, 58, 0.4), transparent 55%),
    linear-gradient(155deg, var(--forest-800), var(--forest-950));
  color: var(--on-dark);
  box-shadow: var(--shadow-lg);
}

.cfp-panel-copy h3 {
  color: var(--on-dark);
  font-size: 1.5rem;
  margin-bottom: 1.3rem;
}

.cfp-benefits {
  display: grid;
  gap: 0.9rem;
}

.cfp-benefits li {
  display: flex;
  gap: 0.7rem;
  align-items: flex-start;
  color: var(--on-dark-muted);
  line-height: 1.5;
}

.cfp-benefits svg {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  padding: 3px;
  border-radius: 50%;
  background: rgba(139, 177, 132, 0.18);
  color: var(--leaf-200);
  margin-top: 1px;
}

.cfp-panel-cta {
  border-left: 1px solid var(--border-on-dark);
  padding-left: clamp(1.5rem, 4vw, 3.5rem);
}

.cfp-cta-title {
  font-family: var(--font-serif);
  font-size: 1.6rem;
  color: var(--on-dark);
  margin-bottom: 0.6rem;
}

.cfp-cta-note {
  color: var(--on-dark-muted);
  font-size: 0.95rem;
  margin-bottom: 1.6rem;
}

@media (max-width: 820px) {
  .cfp-panel {
    grid-template-columns: 1fr;
  }

  .cfp-panel-cta {
    border-left: none;
    border-top: 1px solid var(--border-on-dark);
    padding-left: 0;
    padding-top: 1.8rem;
  }
}

@media (max-width: 640px) {
  .timeline {
    grid-template-columns: 1fr;
    gap: 0;
    max-width: 22rem;
    margin-inline: auto;
  }

  .timeline-track {
    top: 0;
    bottom: 0;
    left: 11px;
    right: auto;
    width: 2px;
    height: auto;
    background: linear-gradient(180deg, var(--brand-canopy), var(--leaf-300));
  }

  .timeline-step {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1.1rem;
    text-align: left;
    padding: 0 0 2rem;
  }

  .timeline-node {
    margin-bottom: 0;
  }

  .timeline-phase {
    grid-column: 2;
  }

  .timeline-date,
  .timeline-label {
    grid-column: 2;
  }
}
</style>
