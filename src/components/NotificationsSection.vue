<template>
  <div class="notification">
    <!-- <div class="empty">Have no notification!</div> -->
    <div class="notification-list">
      <div class="notification-item">
        <img
          src="../images/spiderman-ps4-spiderman-superheroes-games-wallpaper-preview.jpg"
          alt=""
        />
        <div class="notification-body">
          <div class="notification-top">
            <h3>Lam Hien Nghia</h3>
            <span>5 minutes ago</span>
          </div>
          <p class="message multiline-ellipsis-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum ipsam
            reiciendis aut necessitatibus quia blanditiis! A voluptates dolores
            ut nihil natus obcaecati consequatur! Unde ad voluptatum dolore
            incidunt, esse aliquid.
          </p>
        </div>
        <i class="fas fa-ellipsis-v"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.notification .empty {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  font-weight: 300;
  font-size: 1.3rem;
  font-style: italic;
}
.notification .notification-list .notification-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--shadow-color);
  cursor: pointer;
}

.notification .notification-list .notification-item:hover h3 {
  color: var(--primary-color);
}
.notification .notification-list .notification-item img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 0.5rem;
}
.notification .notification-list .notification-item i {
  cursor: pointer;
  opacity: 0.5;
  padding: 0 0.5rem;
}
.notification .notification-list .notification-item i:hover {
  opacity: 1;
}
.notification .notification-list .notification-item .notification-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.notification .notification-list .notification-item .notification-top h3 {
  padding: 0 0.3rem;
  font-size: 1.4rem;
  line-height: 1.8rem;
  transition: all 0.1s linear;
}
.notification .notification-list .notification-item .notification-top span {
  margin: 0 1rem;
  font-size: 0.9rem;
  opacity: 0.7;
}
.notification .notification-list .notification-item p {
  opacity: 0.8;
  font-style: italic;
}
</style>
