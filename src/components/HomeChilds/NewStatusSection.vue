<template>
  <div class="new">
    <div class="new-list">
      <div class="new-item" v-for="n in 2" :key="n">
        <div class="item-top">
          <span class="status">Find Worker</span>
          <div class="author">
            <img
              src="/src/images/goku-ultra-instinct-dragon-ball-thumb-1500x844.jpg"
              alt=""
            />
            <div class="infor">
              <h3>Lam Hien Nghia</h3>
              <span>6 minutes ago</span>
            </div>
            <i class="fas fa-ellipsis-v"></i>
          </div>
        </div>
        <div class="detail">
          <span class="job">Builder</span><span class="salary">20$/hour</span
          ><span class="time">1PM - 5PM</span>
        </div>
        <div class="text multiline-ellipsis-2" @click="onReadMore($event)">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque
          ipsa iste culpa tempora facere repudiandae fugit, reiciendis quam
          illum! In sed praesentium consectetur vitae ex harum velit ad
          suscipit! ipsa iste culpa tempora facere repudiandae fugit, reiciendis
          quam illum! In sed praesentium consectetur vitae ex harum velit ad
          suscipit!
        </div>
        <div class="thumbnail">
          <img
            src="/src/images/goku-ultra-instinct-dragon-ball-thumb-1500x844.jpg"
            alt=""
          />
        </div>
        <div class="btn-group">
          <button>Apply</button>
          <button>Chat</button>
          <button>Share</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const onReadMore = (e: any) => {
  if (e.target.className.includes("2")) {
    e.target.className = e.target.className.replace("2", "4");
  } else if (e.target.className.includes("4")) {
    e.target.className = e.target.className.replace("4", "2");
  }
};
</script>
<style scoped>
.new {
  padding: 1.5rem 2.5rem;
}
.new .new-list {
  display: flex;
  flex-wrap: wrap;
}
.new .new-list .new-item {
  border-radius: 4px;
  padding: 1rem;
  border: 1px solid var(--shadow-color);
  margin-bottom: 2rem;
}

.new .new-list .new-item .item-top .author img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
}
.new .new-list .new-item .item-top .author {
  display: flex;
  align-items: center;
  padding: 0.4rem 0;
}
.new .new-list .new-item .item-top .author i {
  margin-left: auto;
}
.new .new-list .new-item .item-top .author .infor {
  padding-left: 0.4rem;
}
.new .new-list .new-item .item-top .author .infor h3 {
  line-height: 1.5rem;
}
.new .new-list .new-item .item-top .status {
  font-style: italic;
}
.new .new-list .new-item .item-top .author .infor span {
  font-size: 0.9rem;
}
.new .new-list .new-item .detail {
  padding: 0.7rem 0;
}
.new .new-list .new-item .detail span {
  margin: 1rem;
  font-weight: bold;
  color: var(--primary-color);
  letter-spacing: 0.2px;
}
.new .new-list .new-item .text {
  margin-bottom: 1rem;
  line-height: 1.3rem;
  font-weight: 500;
}
.new .new-list .new-item .thumbnail img {
  object-fit: cover;
}
.new .new-list .new-item .btn-group {
  padding-bottom: 1rem;
  padding-top: 2rem;
}
.new .new-list .new-item .btn-group button {
  padding: 0.4rem 1.3rem;
  margin: 0 0.5rem;
  background-color: transparent;
  border-radius: 3px;
  cursor: pointer;
}
.new .new-list .new-item .btn-group button:hover {
  box-shadow: 1px 1px 3px;
}
.new .new-list .new-item .btn-group button:first-child {
  color: #22c55e;
  border: 1px solid #22c55e;
}
.new .new-list .new-item .btn-group button:nth-child(2) {
  color: #f59e0b;
  border: 1px solid #f59e0b;
}
.new .new-list .new-item .btn-group button:last-child {
  color: #1d4ed8;
  border: 1px solid #1d4ed8;
}
@media screen and (max-width: 768px) {
  .new {
    padding: 1.5rem 0rem;
  }
}
</style>
