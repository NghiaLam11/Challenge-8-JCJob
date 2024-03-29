<script setup lang="ts">
// import GreetSection from "./components/GreetSection.vue";
import NavBarSection from "./components/NavBarSection.vue";
import SideBarSection from "./components/SideBarSection.vue";
</script>

<template>
  <div class="app-layout">
    <NavBarSection />
    <div class="content-layout container">
      <SideBarSection class="sidebar" />
      <div class="view">
        <router-view></router-view>
      </div>
    </div>

    <!-- <GreetSection /> -->
  </div>
</template>

<style scoped>
.app-layout {
  padding: 0 2rem;
}
.content-layout {
  display: flex;
  padding-top: 2rem;
}
.sidebar {
  width: 25%;
}
</style>
