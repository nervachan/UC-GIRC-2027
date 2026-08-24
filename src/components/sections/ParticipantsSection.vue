<script setup lang="ts">
const participants = [
  'Local & international researchers and faculty',
  'Graduate and postgraduate students',
  'Government agencies and policymakers',
  'Industry partners and technology developers',
  'NGOs and community leaders',
  'Startup founders and innovation hubs',
]
</script>

<template>
  <section id="participants" class="section participants">
    <div class="container participants-grid">
      <div class="participants-intro">
        <p class="eyebrow" v-reveal>Who Should Attend</p>
        <h2 class="section-title" v-reveal="{ delay: 80 }">Target participants</h2>
        <p class="section-lead" v-reveal="{ delay: 140 }">
          A cross-section of academia, government, industry, and community — convening to turn
          research into resilient impact.
        </p>
      </div>

      <ul class="participants-list" v-reveal="{ delay: 120 }">
        <li v-for="(person, i) in participants" :key="person" class="participant">
          <span class="participant-no">{{ String(i + 1).padStart(2, '0') }}</span>
          <span class="participant-label">{{ person }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.participants-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.3fr;
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: center;
}

.participants-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.participant {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.15rem 1.35rem;
  border-radius: var(--radius-md);
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-xs);
  transition:
    transform 0.25s ease,
    border-color 0.25s ease;
}

.participant:hover {
  transform: translateY(-3px);
  border-color: var(--border-strong);
}

.participant-no {
  font-family: var(--font-serif);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--leaf-300);
  flex-shrink: 0;
}

.participant-label {
  font-size: 0.98rem;
  color: var(--text);
  line-height: 1.4;
}

@media (max-width: 860px) {
  .participants-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .participants-list {
    grid-template-columns: 1fr;
  }
}
</style>
