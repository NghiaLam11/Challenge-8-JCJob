<script setup lang="ts">
// import GreetSection from "./components/GreetSection.vue";
import NavBarSection from "./components/NavBarSection.vue";
import SideBarSection from "./components/SideBarSection.vue";
import ChatSection from "./components/ChatSection.vue";
</script>

<template>
  <div class="app-layout">
    <NavBarSection />
    <div class="content-layout container">
      <SideBarSection class="sidebar" />
      <div class="view">
        <router-view></router-view>
      </div>
      <ChatSection class="chat-section" />
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
  border-right: 1px solid var(--shadow-color);
}
.view {
  width: 50%;
  max-height: calc(100vh - 94px);
  overflow-y: scroll;
  overflow-x: hidden;
}
.view::-webkit-scrollbar {
  display: none;
}
.chat-section {
  width: 25%;
}
@media screen and (max-width: 998px) {
  .chat-section {
    width: 0%;
  }
  .sidebar {
    width: 40%;
  }
  .view {
    width: 100%;
    padding: 1rem;
  }
}
@media screen and (max-width: 738px) {
  .app-layout {
    padding: 0.5rem;
  }
}
@media screen and (max-width: 576px) {
  .content-layout {
    padding-top: 0rem;
  }
}
</style>
