<template>
  <div class="communities">
    <div class="communities-list">
      <div class="communities-item">
        <img src="../images/facebook.png" alt="" />
      </div>
      <div class="communities-item">
        <img src="../images/linkedin.png" alt="" />
      </div>
      <div class="communities-item">
        <img src="../images/instagram.png" alt="" />
      </div>
      <div class="communities-item">
        <img src="../images/twitter.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.communities-list {
  display: flex;
  gap: 1rem;
  padding: 1rem;
}
.communities-list .communities-item {
  width: 25%;
  background-color: var(--bgs-color);
  border-radius: 1rem;
  padding: 2rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.communities-list .communities-item img {
    border-radius: 50%;
}
.communities-list .communities-item img:hover {
  animation: lighting 0.7s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
}
@keyframes lighting {
  from {
    box-shadow: 0 0 0px 0px var(--primary-color);
  }
  to {
    box-shadow: 0 0 3px 50px var(--primary-color);
  }
}

</style>
