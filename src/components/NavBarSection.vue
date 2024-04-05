<template>
  <div class="navbar container">
    <div class="nav-computer">
      <div class="nav-logo">
        <h2>JCJob</h2>
      </div>
      <ul class="nav-list">
        <li class="nav-item"><router-link to="/">Home</router-link></li>
        <li class="nav-item"><router-link to="/jobs">Jobs</router-link></li>
        <li class="nav-item">
          <router-link to="/workers">Workers</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/network">Network</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/notifications">Notifications</router-link>
        </li>
        <li class="nav-item">
          <i @click="onOpenSearch" class="fas fa-search"></i>
        </li>
      </ul>
      <div class="nav-theme">
        <img
          v-if="theme === 'dark'"
          @click="onLightMode"
          src="../images/full-moon (1).png"
          alt=""
        />
        <img v-else @click="onDarkMode" src="../images/sun.png" alt="" />
      </div>
    </div>
    <div class="nav-mobile">
      <div class="nav-top">
        <i @click="onToggleNavMobileHidden" class="fas fa-bars"></i>
        <div class="nav-logo">
          <h2>JCJob</h2>
        </div>
        <i class="fas fa-search" @click="onOpenSearch"></i>
      </div>
      <div class="sidebar">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link to="/"
              ><span class="icon">&#9978;</span
              ><span class="text">Home</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/jobs"
              ><span class="icon">&#128188;</span
              ><span class="text">Jobs</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/workers"
              ><span class="icon">&#129466;</span
              ><span class="text">Workers</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/network"
              ><span class="icon">&#127759;</span
              ><span class="text">Network</span></router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="nav-mobile-hidden" ref="navMobileHidden">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/feed">Feed</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/community">Community</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/notifications">Notifications</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/settings">Settings</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/">Sign out</router-link>
        </li>
        <li class="nav-theme">
          <img
            v-if="theme === 'dark'"
            @click="onLightMode"
            src="../images/full-moon (1).png"
            alt=""
          />
          <img v-else @click="onDarkMode" src="../images/sun.png" alt="" />
        </li>
      </ul>
      <i @click="onClose" class="fas fa-times close"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
const navMobileHidden = ref();
const onToggleNavMobileHidden = () => {
  navMobileHidden.value.style.display = "flex";
  console.log("BLCOK");
};
const onClose = () => {
  navMobileHidden.value.style.display = "none";
};

const themeLocalStorage = localStorage.getItem("theme");
const theme = ref(themeLocalStorage !== null ? themeLocalStorage : "light");
onMounted(() => {
  const html: any = document.querySelector("html");
  if (themeLocalStorage !== null) {
    html.classList.add(themeLocalStorage);
  } else {
    html.classList.add("light");
  }
});

const onDarkMode = () => {
  const html: any = document.querySelector("html");
  html.classList.remove("light");
  html.classList.add("dark");
  theme.value = "dark";
  localStorage.removeItem("theme");
  localStorage.setItem("theme", "dark");
};

const onLightMode = () => {
  const html: any = document.querySelector("html");
  html.classList.remove("dark");
  html.classList.add("light");
  theme.value = "light";
  localStorage.removeItem("theme");
  localStorage.setItem("theme", "light");
};
const isOpenSearch = ref(false);
const onOpenSearch = () => {
  const searchElement: any = document.querySelector(".search");
  if (isOpenSearch.value === true) {
    searchElement.style.display = "none";
    isOpenSearch.value = false;
  } else {
    searchElement.style.display = "block";
    isOpenSearch.value = true;
  }
};

</script>

<style scoped>
.nav-computer {
  display: flex;
  align-items: center;
  padding: 2rem 0;
}
.nav-logo {
  width: 20%;
}
.nav-logo h2 {
  /* scale: 2; */
  font-size: 3rem;
  letter-spacing: 0.6px;
  font-family: monospace;
  font-weight: bold;
  background: linear-gradient(to right, #4ade80, #0ea5e9 50%);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.nav-theme {
  width: 10%;
  cursor: pointer;
}
.nav-theme img {
  width: 33px;
  margin: 0 auto;
  animation: toggleTheme 1.5s forwards cubic-bezier(0.075, 0.82, 0.165, 1.5);
}
@keyframes toggleTheme {
  0% {
    transform: translateY(-100px) rotate(-360deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
}
.nav-list {
  margin-left: auto;
  display: flex;
  align-items: center;
}
.nav-list li {
  list-style: none;
  cursor: pointer;
}

.nav-list li a {
  padding: 2rem;
  padding-top: 4rem;
  font-size: 1.3rem;
  background-color: transparent;

  text-decoration: none;
}
.nav-item i {
  font-size: 1.4rem;
  padding: 2rem;
}
.nav-list li a:hover {
  box-shadow: 0 2px 0 0 var(--primary-color);
}
.nav-mobile,
.nav-mobile-hidden {
  display: none;
}

@media screen and (max-width: 738px) {
  .nav-computer {
    display: none;
  }
  .nav-mobile-hidden {
    display: none;
    /* display: flex; */
    background-color: var(--bgs-color);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    justify-content: center;
    align-items: center;
  }
  .nav-mobile-hidden .nav-list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding-left: 0;
  }

  .nav-mobile-hidden .nav-list li {
    padding: 1rem;
  }
  .nav-mobile-hidden .nav-list li:hover {
    box-shadow: 0 1px 0 0 var(--primary-color);
  }
  .nav-mobile-hidden .nav-list li a:hover {
    box-shadow: none;
  }
  .nav-mobile-hidden .nav-list .nav-theme {
    width: 300px;
    animation: toggleTheme 1.5s forwards cubic-bezier(0.075, 0.82, 0.165, 1.5);
  }
  @keyframes toggleTheme {
    0% {
      transform: translateX(-200px) translateY(-100px) rotate(-360deg);
    }
    100% {
      transform: translateX(0) translateY(0) rotate(0deg);
    }
  }
  .close {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 2.5rem;
  }
  .nav-mobile {
    display: block;
  }
  .nav-mobile .nav-top {
    display: flex;
    justify-content: space-between;
    box-shadow: 0 1px 0 0 var(--primary-color);
    width: 100%;
  }
  .nav-logo {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav-mobile .nav-top i {
    padding: 2rem;
  }
  .nav-mobile .nav-top i {
    font-size: 1.6rem;
  }
  .nav-mobile .nav-top .nav-logo {
    width: 30%;
  }
  .sidebar .nav-list {
    justify-content: center;
    /* box-shadow: 0 1px 0 0 var(--shadow-color); */

    margin-left: 0;
    padding: 1rem 0;
  }
  .sidebar .nav-list li {
    border-left: 0.5px solid var(--shadow-color);
    border-right: 0.5px solid var(--shadow-color);
    text-align: center;
    display: flex;
  }
  .sidebar .nav-list li a {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}
</style>
