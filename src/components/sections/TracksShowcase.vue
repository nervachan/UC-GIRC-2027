<script setup lang="ts">
import { computed, ref } from 'vue'

interface Track {
  no: string
  short: string
  title: string
  description: string
  topics: string[]
}

const tracks: Track[] = [
  {
    no: '01',
    short: 'AIoT & Data Analytics',
    title: 'AIoT, Machine Learning, and Data Analytics for Natural Hazards',
    description:
      'AI, machine learning, predictive analytics, and intelligent systems for hazard detection, forecasting, risk assessment, and emergency response.',
    topics: [
      'Predictive Analytics',
      'Hazard Detection',
      'Intelligent Systems',
      'Emergency Response',
    ],
  },
  {
    no: '02',
    short: 'Geoinformatics & Sensing',
    title: 'Geoinformatics, Seismology, Remote Sensing, and Spatial Technologies',
    description:
      'GIS, remote sensing, seismology, land surveying, and spatial technologies for hazard mapping and disaster risk reduction.',
    topics: ['GIS', 'Remote Sensing', 'Seismology', 'Hazard Mapping'],
  },
  {
    no: '03',
    short: 'Digital Transformation',
    title: 'Digital Transformation, Software Engineering, and Human-Centered Resilience',
    description:
      'Digital platforms, software systems, HCI, and community-centered technologies for preparedness, response, and recovery.',
    topics: ['Digital Platforms', 'Software Systems', 'HCI', 'Community Recovery'],
  },
  {
    no: '04',
    short: 'Sustainable Systems',
    title: 'Sustainable Systems, Resilient Infrastructure, and Climate Action',
    description:
      'Resilient infrastructure, renewable energy, sensor systems, sustainable communities, and climate-responsive technologies.',
    topics: ['Resilient Infrastructure', 'Renewable Energy', 'Sensor Systems', 'Climate Tech'],
  },
]

const activeIndex = ref(0)
const activeTrack = computed(() => tracks[activeIndex.value] ?? tracks[0]!)
</script>

<template>
  <section id="tracks" class="section section--forest tracks">
    <div class="container">
      <div class="section-header">
        <p class="eyebrow" v-reveal>Conference Tracks</p>
        <h2 class="section-title" v-reveal="{ delay: 80 }">Four themes for convergence</h2>
        <p class="section-lead" v-reveal="{ delay: 140 }">
          Focused research tracks that bring technology and community resilience together. Select a
          track to explore its scope.
        </p>
      </div>

      <div class="tracks-layout" v-reveal>
        <!-- Selector -->
        <div class="track-selector" role="tablist" aria-label="Conference tracks">
          <button
            v-for="(track, i) in tracks"
            :key="track.no"
            class="track-tab"
            :class="{ 'is-active': activeIndex === i }"
            type="button"
            role="tab"
            :aria-selected="activeIndex === i"
            @click="activeIndex = i"
          >
            <span class="track-tab-no">{{ track.no }}</span>
            <span class="track-tab-name">{{ track.short }}</span>
            <svg class="track-tab-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <!-- Detail panel -->
        <div class="track-detail">
          <span class="track-watermark" aria-hidden="true">{{ activeTrack.no }}</span>
          <Transition name="track-fade" mode="out-in">
            <div :key="activeIndex" class="track-detail-inner">
              <p class="track-detail-index">Track {{ activeTrack.no }} / 04</p>
              <h3 class="track-detail-title">{{ activeTrack.title }}</h3>
              <p class="track-detail-desc">{{ activeTrack.description }}</p>
              <ul class="track-topics">
                <li v-for="topic in activeTrack.topics" :key="topic">{{ topic }}</li>
              </ul>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tracks-layout {
  display: grid;
  grid-template-columns: minmax(240px, 0.85fr) 1.4fr;
  gap: clamp(1.5rem, 3vw, 2.5rem);
  align-items: stretch;
}

/* ---- Selector ---- */
.track-selector {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.track-tab {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.9rem;
  padding: 1.15rem 1.3rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-on-dark);
  background: rgba(255, 255, 255, 0.03);
  color: var(--on-dark-muted);
  cursor: pointer;
  text-align: left;
  transition:
    background 0.28s ease,
    border-color 0.28s ease,
    color 0.28s ease,
    transform 0.28s ease;
}

.track-tab:hover {
  background: rgba(255, 255, 255, 0.06);
  color: var(--on-dark);
  transform: translateX(4px);
}

.track-tab.is-active {
  background: linear-gradient(120deg, rgba(139, 177, 132, 0.22), rgba(58, 106, 58, 0.14));
  border-color: var(--leaf-300);
  color: var(--on-dark);
}

.track-tab-no {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--leaf-300);
}

.track-tab-name {
  font-size: 1rem;
  font-weight: 500;
}

.track-tab-arrow {
  width: 18px;
  height: 18px;
  opacity: 0;
  transform: translateX(-6px);
  transition:
    opacity 0.28s ease,
    transform 0.28s ease;
}

.track-tab.is-active .track-tab-arrow,
.track-tab:hover .track-tab-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* ---- Detail panel ---- */
.track-detail {
  position: relative;
  overflow: hidden;
  padding: clamp(1.8rem, 4vw, 3rem);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-on-dark);
  background:
    radial-gradient(120% 90% at 100% 0%, rgba(58, 106, 58, 0.28), transparent 55%),
    rgba(255, 255, 255, 0.04);
  min-height: 340px;
  display: flex;
  align-items: center;
}

.track-watermark {
  position: absolute;
  top: -3.5rem;
  right: -1rem;
  font-family: var(--font-serif);
  font-size: 20rem;
  font-weight: 700;
  line-height: 1;
  color: rgba(139, 177, 132, 0.08);
  pointer-events: none;
  user-select: none;
}

.track-detail-inner {
  position: relative;
  z-index: 1;
}

.track-detail-index {
  font-size: 0.74rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--leaf-300);
  font-weight: 600;
}

.track-detail-title {
  font-size: clamp(1.6rem, 1.5vw + 1.1rem, 2.4rem);
  color: var(--on-dark);
  margin: 0.9rem 0 1.1rem;
  line-height: 1.15;
}

.track-detail-desc {
  color: var(--on-dark-muted);
  font-size: 1.08rem;
  line-height: 1.7;
  max-width: 52ch;
  margin-bottom: 1.8rem;
}

.track-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.track-topics li {
  padding: 0.5rem 1rem;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border-on-dark);
  background: rgba(255, 255, 255, 0.05);
  font-size: 0.85rem;
  color: var(--leaf-200);
}

/* ---- Transition ---- */
.track-fade-enter-active,
.track-fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.track-fade-enter-from {
  opacity: 0;
  transform: translateY(14px);
}

.track-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 860px) {
  .tracks-layout {
    grid-template-columns: 1fr;
  }

  .track-selector {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 0.5rem;
    scroll-snap-type: x mandatory;
  }

  .track-tab {
    flex: 0 0 auto;
    scroll-snap-align: start;
    grid-template-columns: auto 1fr;
  }

  .track-tab-arrow {
    display: none;
  }

  .track-detail {
    min-height: 300px;
  }
}
</style>
