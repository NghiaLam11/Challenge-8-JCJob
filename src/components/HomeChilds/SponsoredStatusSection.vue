<template>
  <div class="sponsored">
    <div class="sponsored-list">
      <div class="sponsored-item">
        <div class="item-top">
          <span class="status">Find Worker (SPONSORED)</span>
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
.sponsored {
  padding: 1.5rem 2.5rem;
}
.sponsored .sponsored-list .sponsored-item {
  border-radius: 4px;
  padding: 1rem;
  border: 1px solid var(--primary-color);
  box-shadow: 0px 0px 3px 1px var(--primary-color);
}

.sponsored .sponsored-list .sponsored-item .item-top .author img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
}
.sponsored .sponsored-list .sponsored-item .item-top .author {
  display: flex;
  align-items: center;
  padding: 0.4rem 0;
}
.sponsored .sponsored-list .sponsored-item .item-top .author i {
  margin-left: auto;
  cursor: pointer;
}
.sponsored .sponsored-list .sponsored-item .item-top .author .infor {
  padding-left: 0.4rem;
}
.sponsored .sponsored-list .sponsored-item .item-top .author .infor h3 {
  line-height: 1.5rem;
}
.sponsored .sponsored-list .sponsored-item .item-top .status {
  font-style: italic;
  font-weight: bold;
  color: #f59e0b;
}
.sponsored .sponsored-list .sponsored-item .item-top .author .infor span {
  font-size: 0.9rem;
}
.sponsored .sponsored-list .sponsored-item .detail {
  padding: 0.7rem 0;
}
.sponsored .sponsored-list .sponsored-item .detail span {
  margin: 1rem;
  font-weight: bold;
  color: var(--primary-color);
  letter-spacing: 0.2px;
}
.sponsored .sponsored-list .sponsored-item .text {
  margin-bottom: 1rem;
  line-height: 1.3rem;
  font-weight: 500;
}
.sponsored .sponsored-list .sponsored-item .thumbnail img {
  object-fit: cover;
}
.sponsored .sponsored-list .sponsored-item .btn-group {
  padding-bottom: 1rem;
  padding-top: 2rem;
}
.sponsored .sponsored-list .sponsored-item .btn-group button {
  padding: 0.4rem 1.3rem;
  margin: 0 0.5rem;
  background-color: transparent;
  border-radius: 3px;
  cursor: pointer;
}
.sponsored .sponsored-list .sponsored-item .btn-group button:hover {
  box-shadow: 1px 1px 3px;
}
.sponsored .sponsored-list .sponsored-item .btn-group button:first-child {
  color: #22c55e;
  border: 1px solid #22c55e;
}
.sponsored .sponsored-list .sponsored-item .btn-group button:nth-child(2) {
  color: #f59e0b;
  border: 1px solid #f59e0b;
}
.sponsored .sponsored-list .sponsored-item .btn-group button:last-child {
  color: #1d4ed8;
  border: 1px solid #1d4ed8;
}
@media screen and (max-width: 768px) {
  .sponsored {
    padding: 1.5rem 0rem;
  }
}
</style>
