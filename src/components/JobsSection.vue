<template>
  <div class="job">
    <div class="search">
      <form>
        <input placeholder="search..." type="search" /><i
          class="fas fa-search"
        ></i>
      </form>
      <div class="filter">
        <select>
          <option value="">Area</option>
        </select>
        <select>
          <option value="">Industry</option>
        </select>
        <select>
          <option value="">Level</option>
        </select>
        <button>Filter</button>
      </div>
    </div>
    <div class="job-list">
      <div class="job-item" v-for="n in 3" :key="n">
        <div class="item-top">
          <img
            src="../images/goku-ultra-instinct-dragon-ball-thumb-1500x844.jpg"
            alt=""
          />
          <div class="auth">
            <h4 class="name">Lam Hien Nghia</h4>
            <span>4 minutes ago</span>
          </div>
          <i class="fas fa-ellipsis-v"></i>
        </div>
        <div class="item-body">
          <ul class="job-detail">
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <p>Thuan My, Chau Thanh, Long An</p>
            </li>
            <li>
              <i class="fas fa-briefcase"></i>
              <p>Cong nhan</p>
            </li>
            <li>
              <i class="fas fa-coins"></i>
              <p>4$</p>
            </li>
            <li>
              <i class="fas fa-mobile-alt"></i>
              <p>093468239</p>
            </li>
          </ul>
        </div>
        <div class="item-bottom">
          <button>More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.search {
  margin: 0.5rem;
}
.search .filter {
  padding: 0.5rem 0;
}
.search .filter select {
  background-color: transparent;
  color: var(--text-color);
  padding: 0.4rem;
  border: 1px solid var(--shadow-color);
  width: 100px;
  cursor: pointer;
}

.search .filter button {
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid var(--primary-color);
  padding: 0.3rem 0.8rem;
  background-color: transparent;
  color: var(--text-color);
  margin-left: 1rem;
}
.search .filter button:hover {
  background-color: var(--primary-color);

}
.search form {
  border: 1px solid var(--shadow-color);
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.search form input {
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  padding: 0.5rem;
  color: var(--text-color);
}
.search form i {
  padding: 0 0.8rem;
  cursor: pointer;
}
.search form i:hover {
  transform: scale(1.1);
}
.job .job-list {
  display: flex;
  flex-wrap: wrap;
}
.job .job-list .job-item {
  width: calc(50% - 0.3rem - 1px);
  padding: 1rem;
  border: 1px solid var(--shadow-color);
  border-radius: 4px;
  margin: 0.2rem;
  /* box-shadow: 2px 0 5px 0 var(--shadow-color); */
}
.job .job-list .item-top {
  display: flex;
  align-items: center;
}
.job .job-list .item-top i {
  margin-left: auto;
  cursor: pointer;
  opacity: 0.7;
  padding: 0 1rem;
}
.job .job-list .item-top i:hover {
  opacity: 1;
}
.job .job-list .item-top .auth .name {
  font-size: 1.2rem;
  line-height: 1.5rem;
}
.job .job-list .item-top .auth span {
  font-size: 0.9rem;
  font-style: italic;
}
.job .job-list .item-top img {
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 0.5rem;
}
.job .job-list .item-body .job-detail {
  padding: 1rem 0 1rem 1rem;
}
.job .job-list .item-body .job-detail li {
  display: flex;
  align-items: center;
  padding: 0.2rem;
  color: var(--primary-color);
  font-weight: bold;
}
.job .job-list .item-body .job-detail li p {
  padding-left: 0.5rem;
}
.job .job-list .item-bottom button {
  margin: 0 1rem;
  width: 50%;
  padding: 0.5rem 0;
  border: 1px solid var(--text-color);
  border-radius: 2px;
  color: var(--text-color);
  background-color: transparent;
  transition: all 0.15s linear;
  cursor: pointer;
}
.job .job-list .item-bottom button:hover {
  border: 1px solid var(--primary-color);
  background-color: var(--primary-color);
}
@media screen and (max-width: 576px) {
  .job .job-list .job-item {
    width: 100%;
  }
}
</style>
