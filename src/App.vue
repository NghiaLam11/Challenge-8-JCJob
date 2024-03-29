<script setup lang="ts">
// import GreetSection from "./components/GreetSection.vue";
import NavBarSection from "./components/NavBarSection.vue";
</script>

<template>
  <div class="app-layout">
    <NavBarSection />
    <div class="content-layout">
      <router-view></router-view>
    </div>

    <!-- <GreetSection /> -->
  </div>
</template>

<style scoped></style>
