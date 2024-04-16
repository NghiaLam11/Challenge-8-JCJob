<template>
    <div class="feeds">
      <div class="feeds-list">
        <div class="feeds-item" v-for="n in 2" :key="n">
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
            suscipit!Quia itaque ipsa iste culpa tempora facere repudiandae fugit.
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
  .feeds {
    padding: 1.5rem 2.5rem;
  }
  .feeds .feeds-list {
    display: flex;
    flex-wrap: wrap;
  }
  .feeds .feeds-list .feeds-item {
    border-radius: 4px;
    padding: 1rem;
    border: 1px solid var(--shadow-color);
    margin-bottom: 2rem;
  }
  
  .feeds .feeds-list .feeds-item .item-top .author img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  }
  .feeds .feeds-list .feeds-item .item-top .author {
    display: flex;
    align-items: center;
    padding: 0.4rem 0;
  }
  .feeds .feeds-list .feeds-item .item-top .author i {
    margin-left: auto;
  }
  .feeds .feeds-list .feeds-item .item-top .author .infor {
    padding-left: 0.4rem;
  }
  .feeds .feeds-list .feeds-item .item-top .author .infor h3 {
    line-height: 1.5rem;
  }
  .feeds .feeds-list .feeds-item .item-top .status {
    font-style: italic;
  }
  .feeds .feeds-list .feeds-item .item-top .author .infor span {
    font-size: 0.9rem;
  }
  .feeds .feeds-list .feeds-item .detail {
    padding: 0.7rem 0;
  }
  .feeds .feeds-list .feeds-item .detail span {
    margin: 1rem;
    font-weight: bold;
    color: var(--primary-color);
    letter-spacing: 0.2px;
  }
  .feeds .feeds-list .feeds-item .text {
    margin-bottom: 1rem;
    line-height: 1.3rem;
    font-weight: 500;
  }
  .feeds .feeds-list .feeds-item .thumbnail img {
    object-fit: cover;
  }
  .feeds .feeds-list .feeds-item .btn-group {
    padding-bottom: 1rem;
    padding-top: 2rem;
  }
  .feeds .feeds-list .feeds-item .btn-group button {
    padding: 0.4rem 1.3rem;
    margin: 0 0.5rem;
    background-color: transparent;
    border-radius: 3px;
    cursor: pointer;
  }
  .feeds .feeds-list .feeds-item .btn-group button:hover {
    box-shadow: 1px 1px 3px;
  }
  .feeds .feeds-list .feeds-item .btn-group button:first-child {
    color: #22c55e;
    border: 1px solid #22c55e;
  }
  .feeds .feeds-list .feeds-item .btn-group button:nth-child(2) {
    color: #f59e0b;
    border: 1px solid #f59e0b;
  }
  .feeds .feeds-list .feeds-item .btn-group button:last-child {
    color: #1d4ed8;
    border: 1px solid #1d4ed8;
  }
  @media screen and (max-width: 768px) {
    .feeds {
      padding: 1.5rem 0rem;
    }
  }
  </style>
  