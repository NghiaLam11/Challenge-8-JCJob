<template>
  <div class="new-worker">
    <div class="worker-list">
      <div class="worker-item" v-for="n in 3" :key="n">
        <i class="fas fa-ellipsis-v report-icon"
          ><div class="report">
            <span>Report</span>
          </div></i
        >
        <div class="item-left">
          <div class="item-top">
            <div class="auth">
              <img
                src="/src/images/spiderman-ps4-spiderman-superheroes-games-wallpaper-preview.jpg"
                alt=""
              />
              <div>
                <h4>Lam Hien Nghia</h4>
                <p>Worker</p>
              </div>
            </div>

            <div class="bio multiline-ellipsis-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo, animi nihil ipsa tempore modi pariatur est ex
              recusandae ipsum commodi ducimus consequuntur, sapiente corrupti
              culpa cumque voluptate a, voluptas tenetur!
            </div>
          </div>
        </div>
        <div class="item-body">
          <ul class="worker-detail">
            <li>
              <i class="fas fa-heartbeat"></i>
              <p>34 years old</p>
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <p>Thuan My, Chau Thanh, Long An</p>
            </li>
            <li>
              <i class="fas fa-seedling"></i>
              <p>Fix Computer, Reset Window, Coding,...</p>
            </li>
          </ul>
          <div class="item-btn">
            <button>Follow</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
<style scoped>
.new-worker .worker-list {
  display: flex;
  flex-wrap: wrap;
}
.new-worker .worker-list .worker-item {
  width: 100%;
  border: 1px solid var(--shadow-color);
  padding: 1rem;
  margin: 0.5rem;
  display: flex;
  transition: all 0.1s linear;
  cursor: pointer;
  position: relative;
}
.new-worker .worker-list .worker-item .report-icon {
  position: absolute;
  top: 10px;
  right: 0px;
  padding: 0 1rem;
  opacity: 0.6;
}
.new-worker .worker-list .worker-item .report-icon .report {
  display: none;
}
.new-worker .worker-list .worker-item .report-icon .report:hover {
  color: red;
  font-weight: 800;
}

.new-worker .worker-list .worker-item .report-icon:hover .report {
  display: block;
  position: absolute;
  top: -10px;
  right: 0;
  padding: 1rem 2rem;
  background-color: var(--bgs-color);
}

.new-worker .worker-list .worker-item:hover {
  transform: translateY(-3px);
  border: 1px solid var(--primary-color);
}
.new-worker .worker-list .worker-item .item-left {
  width: 40%;
}
.new-worker .worker-list .worker-item .item-top {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
}
.new-worker .worker-list .worker-item .item-top .auth {
  display: flex;
  align-items: center;
}
.new-worker .worker-list .worker-item .item-top .auth img {
  margin-right: 0.5rem;
}
.new-worker .worker-list .worker-item .item-top .auth p {
  font-size: 0.9rem;
  font-weight: 500;
  font-family: monospace;
}
.new-worker .worker-list .worker-item .item-top img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
}
.new-worker .worker-list .worker-item .item-top h4 {
  font-size: 1.2rem;
  line-height: 1.5rem;
}

.new-worker .worker-list .worker-item .item-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.new-worker .worker-list .worker-item .item-body .item-btn button {
  margin-left: 1rem;
  background-color: transparent;
  color: var(--text-color);
  border: 1px solid var(--text-color);
  padding: 0.2rem 1.5rem;
  cursor: pointer;
}

.new-worker .worker-list .worker-item .item-body .item-btn button:hover {
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color);
}
.new-worker .worker-list .worker-item .item-top .bio {
  line-height: 1.3rem;
  margin: 0.5rem 0;
}
.new-worker .worker-list .worker-item .item-body .worker-detail {
  padding-left: 1rem;
}
.new-worker .worker-list .worker-item .item-body .worker-detail li {
  display: flex;
  align-items: center;
  color: var(--primary-color);
  font-weight: 500;
}
.new-worker .worker-list .worker-item .item-body .worker-detail li p {
  padding: 0 0.4rem;
}
</style>
