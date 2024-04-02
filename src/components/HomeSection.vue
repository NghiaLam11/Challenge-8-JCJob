<template>
  <div class="home">
    <SearchSection />
    <UploadStatusSection />
    <NewStatusSection />
  </div>
</template>

<script setup lang="ts">
import SearchSection from "./HomeChilds/SearchSection.vue";
import NewStatusSection from "./HomeChilds/NewStatusSection.vue";
import UploadStatusSection from "./HomeChilds/UploadStatusSection.vue";
</script>
