<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import CallForPapers from './components/sections/CallForPapers.vue'
import TracksShowcase from './components/sections/TracksShowcase.vue'
import ScopeSection from './components/sections/ScopeSection.vue'
import ObjectivesSection from './components/sections/ObjectivesSection.vue'
import ParticipantsSection from './components/sections/ParticipantsSection.vue'
import OutputsSection from './components/sections/OutputsSection.vue'
import SdgSection from './components/sections/SdgSection.vue'
import TaglineBand from './components/sections/TaglineBand.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="page">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <TheHeader />
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <CallForPapers />
      <TracksShowcase />
      <ScopeSection />
      <ObjectivesSection />
      <ParticipantsSection />
      <OutputsSection />
      <SdgSection />
      <TaglineBand />
    </main>
    <TheFooter />
  </div>
</template>
