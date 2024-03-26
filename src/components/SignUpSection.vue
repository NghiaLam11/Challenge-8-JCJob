<template>
  <div class="signup">
    <div class="container signup-container">
      <div class="content">
        <div class="left">
          <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
          <Carousel>
            <Slide
              v-for="(mode, index) in modes"
              :snapAlign="'center'"
              :key="index"
            >
              <div class="carousel__item">
                <img :src="mode.url" alt="" />
                <p>{{ mode.name }}</p>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
        <div class="right">
          <h3>Sign up</h3>
          <form class="signup-form">
            <div class="form-group">
              <label for="name">FULL NAME</label>
              <input placeholder="Name..." type="text" name="name" id="name" />
            </div>
            <div class="form-group">
              <label for="email">EMAIL</label>
              <input
                placeholder="Email..."
                type="text"
                name="email"
                id="email"
              />
            </div>
            <div class="form-group">
              <label for="password">PASSWORD</label>
              <input
                id="password"
                placeholder="Password..."
                type="password"
                name="password"
              />
              <div class="show-password">
                <input type="checkbox" /><span>Show password</span>
              </div>
            </div>
            <div class="form-btn">
              <button>Sign up</button>
              <router-link to="/signin">I'm already member</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
const modes = ref([
  { url: "/src/images/signup.png", name: "Worker" },
  { url: "/src/images/signin.png", name: "Interviewer" },
]);
</script>

<style scoped>
.signup {
  height: 100vh;
}
.signup .signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.signup .signup-container .content {
  display: flex;
  align-items: center;
  padding: 2rem 3rem;
  box-shadow: 1px 2px 9px 3px var(--shadow-color);
}
.right,
.left {
  width: 50%;
  padding: 2rem;
}
.left h4 {
  line-height: 2rem;
  font-size: 1.5rem;
  text-align: center;
  margin: 0 auto;
  max-width: 85%;
  padding: 3rem;
  font-weight: 400;
  opacity: 0.4;
  font-style: italic;
}
.left img {
  max-width: 250px;
  margin: 0 auto;
  padding: 1rem;
}
.right h3 {
  font-size: 3.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}
form .form-group {
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
}
form .form-group input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid;
  padding: 0.2rem 0.3rem;
  margin-bottom: 0.5rem;
  margin-top: 0.2rem;
  outline: none;
  font-size: 1.3rem;
  color: var(--text-color);
}
form .form-group label {
  font-weight: 600;
  letter-spacing: 0.1rem;
}
form .form-group:hover label {
  animation: hoverLabel 3s ease forwards;
}
@keyframes hoverLabel {
  0% {
    letter-spacing: 0.1rem;
  }
  50% {
    letter-spacing: 0.3rem;
  }
  100% {
    letter-spacing: 0.1rem;
  }
}
input[type="checkbox"] {
  margin: 0 !important;
  margin-right: 0.2rem !important;
}
.show-password {
  display: flex;
  align-items: center;
}
.show-password span {
  opacity: 0.6;
  padding-top: 1px;
}
form .form-btn {
  padding: 0.7rem 0;
  margin-top: 1rem;
}
form .form-btn button {
  padding: 0.3rem 1.5rem;
  cursor: pointer;
  margin-right: 2rem;
  transition: all 0.4s ease-in-out;
  background-color: transparent;
  outline: none;
  border-radius: 2px;
  font-size: 1.1rem;
  border: 2px solid var(--text-color);
  color: var(--text-color);
}
form .form-btn button:hover {
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 2px;
  box-shadow: none;
  transform: scale(1.1);
}
form .form-btn a:hover {
  color: var(--primary-color);
}
@media screen and (min-width: 668px) and (max-width: 992px) {
  .signup .signup-container .content {
    flex-direction: column;
  }
  .right,
  .left {
    width: 100%;
  }
  .left img {
    max-width: 150px;
  }
}
@media screen and (max-width: 668px) {
  .signup .signup-container .content {
    flex-direction: column;
    box-shadow: none;
    padding: 1rem;
  }
  .right,
  .left {
    width: 100%;
    padding: 1rem;
  }
  .left img {
    max-width: 150px;
  }
}
</style>
