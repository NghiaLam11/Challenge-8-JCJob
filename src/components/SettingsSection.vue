<template>
  <div class="settings">
    <ul>
      <li><router-link to="/profile-setting">Profile</router-link></li>
      <li><router-link to="/">Authencation</router-link></li>
      <li><router-link to="/">Theme</router-link></li>
    </ul>
  </div>
</template>

<style scoped>
.settings ul {
  list-style: none;
  padding-left: 0;
  padding: 1rem;
}
.settings ul li {
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--shadow-color);
}
.settings ul li a {
  text-decoration: none;
  padding-left: 2rem;
  font-size: 1.5rem;
  font-weight: 500;
}
.settings ul li a:hover {
    color: var(--primary-color);
}
</style>
