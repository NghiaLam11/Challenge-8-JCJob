<template>
  <div>
   <div class="chat">
    <h3>Chats</h3>
    <div class="chat-list">
      <div class="chat-item">
        <img
          src="../images/goku-ultra-instinct-dragon-ball-thumb-1500x844.jpg"
          alt="avatar"
        />
        <div class="infor">
          <h5 class="name">Lam Hien Nghia</h5>
          <p>Worker</p>
        </div>
      </div>
    </div>
  </div>
  <div class="chat-mobile" v-if="isOpenChat">
    <h3>Chats</h3>
    <div class="chat-list">
      <div class="chat-item">
        <img
          src="../images/goku-ultra-instinct-dragon-ball-thumb-1500x844.jpg"
          alt="avatar"
        />
        <div class="infor">
          <h5 class="name">Lam Hien Nghia</h5>
          <p>Worker</p>
        </div>
      </div>
    </div>
  </div>
  <div :class="[isOpenChat === true ? 'open' : '', 'chat-icon']">
    <i @click="onToggleChats" class="fas fa-comment-dots"></i>
  </div>   
  </div>

</template>

<script setup lang="ts">
import { ref } from "vue";
const isOpenChat = ref(false);
const onToggleChats = () => {
  isOpenChat.value = !isOpenChat.value;
};
</script>

<style scoped>
.chat h3 {
  padding: 0 2rem;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem 2rem;

  border-bottom: 1px solid var(--shadow-color);
}
.chat .chat-list {
  min-height: 100%;
}
.chat .chat-list .chat-item {
  display: flex;
  align-items: center;
  padding: 0.2rem 2rem;
  margin: 0 0.2rem;
  cursor: pointer;
}

.chat .chat-list .infor {
  padding-left: 0.5rem;
}
.chat .chat-list h5 {
  font-size: 1.3rem;
  text-decoration: underline;
  line-height: 1.6rem;
  transition: all 0.1s linear;
}
.chat .chat-list img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  transition: all 0.1s linear;
  filter: grayscale(1);
}
.chat .chat-list {
  overflow-y: scroll;
  max-height: calc(100vh - 94px);
}
::-webkit-scrollbar {
  display: none;
}
.chat .chat-list .chat-item:hover img {
  filter: grayscale(0);
}
.chat .chat-list .chat-item:hover h5 {
  letter-spacing: 1px;
  color: var(--primary-color);
}
.chat-icon {
  position: fixed;
  bottom: 50px;
  right: 0;
  background-color: var(--bgs-color);
  transform: scaleX(-1);
  padding: 0.2rem 1.3rem 0.2rem 1.5rem;
  font-size: 2.5rem;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  color: var(--text-color);
  display: none;
}

.chat-mobile {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--bgs-color);
}
.open {
  color: var(--primary-color);
  background-color: var(--bg-color);
}
.chat-mobile h3 {
  padding: 0 2rem;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem 2rem;

  border-bottom: 1px solid var(--shadow-color);
}
.chat-mobile .chat-list .chat-item {
  display: flex;
  align-items: center;
  padding: 0.2rem 2rem;
  margin: 0 0.2rem;
  cursor: pointer;
}

.chat-mobile .chat-list .infor {
  padding-left: 0.5rem;
}
.chat-mobile .chat-list h5 {
  font-size: 1.5rem;
  text-decoration: underline;
  line-height: 2rem;
  transition: all 0.1s linear;
}
.chat-mobile .chat-list img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  transition: all 0.1s linear;
  filter: grayscale(1);
}
.chat-mobile .chat-list {
  overflow-y: scroll;
  max-height: calc(100vh - 94px);
}
::-webkit-scrollbar {
  display: none;
}
.chat-mobile .chat-list .chat-item:hover img {
  filter: grayscale(0);
}
.chat-mobile .chat-list .chat-item:hover h5 {
  letter-spacing: 1px;
  color: var(--primary-color);
}
@media screen and (max-width: 998px) {
  .chat {
    display: none;
  }
  .chat-icon {
    display: block;
  }
}
</style>
