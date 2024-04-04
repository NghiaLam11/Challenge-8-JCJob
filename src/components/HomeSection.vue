<template>
  <div class="home">
    <SearchSection />
    <UploadStatusSection />
    <NewStatusSection />
    <SponsoredStatusSection />
    <RecommendedRecruitersSection />
    <RandomStatusSection />
  </div>
</template>

<script setup lang="ts">
import SearchSection from "./HomeChilds/SearchSection.vue";
import NewStatusSection from "./HomeChilds/NewStatusSection.vue";
import SponsoredStatusSection from "./HomeChilds/SponsoredStatusSection.vue";
import RandomStatusSection from "./HomeChilds/RandomStatusSection.vue";
import UploadStatusSection from "./HomeChilds/UploadStatusSection.vue";
import RecommendedRecruitersSection from "./HomeChilds/RecommendedRecruitersSection.vue";
</script>
