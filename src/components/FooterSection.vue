<template>
  <div class="footer container">
    <div class="logo">JCJob</div>
    <ul class="nav">
      <li><router-link to="/">Jobs</router-link></li>
      <li><router-link to="/">Workers</router-link></li>
      <li><router-link to="/">Network</router-link></li>
      <li><router-link to="/">Notifications</router-link></li>
    </ul>
    <ul class="nav">
      <li><router-link to="/">Settings</router-link></li>
      <li><router-link to="/">Contact</router-link></li>
      <li><router-link to="/">Community</router-link></li>
    </ul>
    <ul class="nav">
      <li>
        <a href="#"><i class="fab fa-facebook-square"></i></a>
      </li>
      <li>
        <a href="#"><i class="fab fa-instagram-square"></i></a>
      </li>
      <li>
        <a href="#"><i class="fab fa-linkedin"></i></a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  background-color: var(--bg-color);
  padding: 3rem 1rem;
}
.footer .logo {
  font-size: 3.5rem;
  letter-spacing: 0.6px;
  font-family: monospace;
  font-weight: bold;
  background: linear-gradient(to right, #4ade80, #0ea5e9 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.footer .nav {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0;
}
.footer .nav:last-child {
  flex-direction: row;
  gap: 0.5rem;
}
.footer .nav:last-child li a i {
  font-size: 2rem;
}
.footer .nav li a {
  text-decoration: none;
  font-size: 1.3rem;
}
.footer .nav li {
  padding: 0.1rem;
}
.footer .nav li:hover {
  text-decoration: underline;
}
</style>
