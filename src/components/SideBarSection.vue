<template>
  <div class="sidebar">
    <div class="nav-list">
      <li class="nav-auth">
        <router-link to="/">
          <img
            src="../images/goku-ultra-instinct-dragon-ball-thumb-1500x844.jpg"
            alt="avatar"
          />
          <div class="infor">
            <h5 class="name">Lam Hien Nghia</h5>
            <p>Worker</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/">Feeds</router-link>
      </li>
      <li>
        <router-link to="/">Community</router-link>
      </li>
      <li>
        <router-link to="/">Settings</router-link>
      </li>
      <li class="signout">
        <p to="/"><i class="fas fa-sign-out-alt"></i> Sign out</p>
      </li>
    </div>
  </div>
</template>

<style scoped>
.sidebar .nav-list li {
  list-style: none;
}
.sidebar .nav-list .nav-auth a {
  display: flex;
  align-items: center;
  font-size: 1rem;
}
.sidebar .nav-list .nav-auth a p {
  /* color: var(--primary-color); */
  font-style: italic;
  opacity: 0.5;
}
.sidebar .nav-list .signout {
  margin-top: 1rem;
  font-size: 1.4rem;
  color: red;
}
.sidebar .nav-list li {
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.1s linear;
}
.sidebar .nav-list li:not(.signout, .nav-auth):hover {
  box-shadow: -1px 4px 3px 0 var(--shadow-color);
  transform: translateX(1px);
}
.sidebar .nav-list .signout p {
  transition: all 0.3s ease;
}
.sidebar .nav-list .signout:hover p {
  letter-spacing: 1px;
}

.sidebar .nav-list li a {
  padding: 1rem 0rem;
  font-size: 1.4rem;
  text-decoration: none;
}
.sidebar .nav-list .nav-auth a .infor {
  padding-left: 0.5rem;
}
.sidebar .nav-list .nav-auth a h5 {
  font-size: 1.5rem;
  text-decoration: underline;
  color: var(--primary-color);
  line-height: 2rem;
}
.sidebar .nav-list .nav-auth img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--primary-color);
}
.sidebar .nav-list .nav-auth:hover img {
  box-shadow: 0 0 10px 0 var(--primary-color);
}
.sidebar .nav-list .nav-auth:hover a h5 {
  text-shadow: 0 0 10px var(--primary-color);
}
@media screen and (max-width: 738px) {
  .sidebar .nav-list .nav-auth {
    padding-right: 0;
  }
  .sidebar .nav-list .nav-auth a .name {
    font-size: 1.2rem;
  }
}
@media screen and (max-width: 576px) {
  .sidebar {
    display: none;
  }
}
</style>
