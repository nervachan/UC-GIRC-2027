<script setup lang="ts">
const exploreLinks = [
  { label: 'About', href: '#about' },
  { label: 'Call for Papers', href: '#call-for-papers' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Scope', href: '#scope' },
  { label: 'Objectives', href: '#objectives' },
  { label: 'SDGs', href: '#sdgs' },
]

const keyDates = [
  { label: 'Abstract', value: 'Sep 30, 2026' },
  { label: 'Full Paper', value: 'Oct 31, 2026' },
  { label: 'Camera-Ready', value: 'Jan 30, 2027' },
  { label: 'Conference', value: 'Mar 23–26, 2027' },
]

const year = 2027
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <div class="footer-brand-top">
          <img
            src="/uc_logo.png"
            alt="University of the Cordilleras logo"
            width="52"
            height="52"
            class="footer-logo"
          />
          <div>
            <p class="footer-org">University of the Cordilleras</p>
            <p class="footer-conf">UC-GIRC 2027</p>
          </div>
        </div>
        <p class="footer-blurb">
          The flagship international research conference on Smart Systems — advancing innovation,
          resilience, and convergence for a sustainable future.
        </p>
        <p class="footer-pillars">Resilience · Innovation · Convergence</p>
      </div>

      <nav class="footer-col" aria-label="Explore">
        <p class="footer-heading">Explore</p>
        <ul>
          <li v-for="link in exploreLinks" :key="link.href">
            <a :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </nav>

      <div class="footer-col">
        <p class="footer-heading">Key Dates</p>
        <ul class="footer-dates">
          <li v-for="d in keyDates" :key="d.label">
            <span class="footer-date-label">{{ d.label }}</span>
            <span class="footer-date-value">{{ d.value }}</span>
          </li>
        </ul>
      </div>

      <div class="footer-col">
        <p class="footer-heading">Venue</p>
        <p class="footer-venue">
          University of the Cordilleras<br />
          Governor Pack Road<br />
          Baguio City, Philippines
        </p>
        <a class="button button--outline-light button--sm footer-cta" href="#call-for-papers">
          Call for Papers
        </a>
      </div>
    </div>

    <div class="container footer-bottom">
      <p>© {{ year }} University of the Cordilleras. All rights reserved.</p>
      <p>“Innovating Knowledge. Transforming Communities. Sustaining Futures.”</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: auto;
  background: linear-gradient(180deg, var(--forest-950), #081408);
  color: var(--on-dark-muted);
  padding-top: clamp(3.5rem, 6vw, 5rem);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
  gap: clamp(2rem, 4vw, 3.5rem);
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--border-on-dark);
}

/* ---- Brand ---- */
.footer-brand-top {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 1.2rem;
}

.footer-logo {
  width: 48px;
  height: 48px;
  border-radius: 11px;
  background: #fff;
  padding: 5px;
  object-fit: contain;
}

.footer-org {
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--on-dark-subtle);
}

.footer-conf {
  font-family: var(--font-serif);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--on-dark);
}

.footer-blurb {
  max-width: 34ch;
  font-size: 0.95rem;
  line-height: 1.65;
  margin-bottom: 1.1rem;
}

.footer-pillars {
  font-size: 0.8rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--leaf-300);
}

/* ---- Columns ---- */
.footer-heading {
  font-size: 0.74rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--on-dark);
  font-weight: 600;
  margin-bottom: 1.2rem;
}

.footer-col ul {
  display: grid;
  gap: 0.7rem;
}

.footer-col a {
  font-size: 0.95rem;
  color: var(--on-dark-muted);
  transition: color 0.2s ease;
}

.footer-col a:hover,
.footer-col a:focus-visible {
  color: var(--leaf-200);
}

.footer-dates li {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.footer-date-label {
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--on-dark-subtle);
}

.footer-date-value {
  font-size: 0.95rem;
  color: var(--on-dark);
}

.footer-venue {
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1.4rem;
}

.footer-cta {
  display: inline-flex;
}

/* ---- Bottom bar ---- */
.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.75rem;
  padding-block: 1.6rem 2rem;
  font-size: 0.85rem;
  color: var(--on-dark-subtle);
}

@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 540px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
  }
}
</style>
