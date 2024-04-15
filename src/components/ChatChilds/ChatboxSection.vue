<template>
  <div class="chatbox">
    <div class="blur"></div>
    <div class="box">
      <div class="nav">
        <div class="user">
          <img
            src="/src/images/spiderman-ps4-spiderman-superheroes-games-wallpaper-preview.jpg"
            alt=""
          />
          <div class="text">
            <h4>Lam Hien Nhan</h4>
            <p>active</p>
          </div>
        </div>
        <div class="feature">
          <i class="fas fa-phone"></i>
          <i class="fas fa-video"></i>
          <i class="fas fa-times"></i>
        </div>
      </div>
      <div class="chat-list">
        <div class="chat-item">
          <img
            src="/src/images/goku-ultra-instinct-dragon-ball-thumb-1500x844.jpg"
            alt=""
          />
          <div class="message">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            voluptate atque deleniti eius.
          </div>
        </div>
        <div class="chat-item-owner">
          <img
            src="/src/images/goku-ultra-instinct-dragon-ball-thumb-1500x844.jpg"
            alt=""
          />
          <div class="message">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            voluptate atque deleniti eius.
          </div>
        </div>
      </div>
      <form>
        <input type="text" placeholder="Write..." />
        <i class="fas fa-paper-plane"></i>
      </form>
    </div>
  </div>
</template>

<style scoped>
.blur {
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--shadow-color);
}
.chatbox {
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.chatbox .box {
  background-color: var(--bg-color);
  z-index: 99;
  width: 35%;
}
.chatbox .box .nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bgs-color);
  padding: 0.7rem 1rem;
}
.chatbox .box .nav .user {
  display: flex;
  align-items: center;
}
.chatbox .box .nav .user .text {
  padding: 0 0.5rem;
}
.chatbox .box .nav .user .text h4 {
  line-height: 1rem;
  font-size: 1.2rem;
}
.chatbox .box .nav .user .text p {
  font-size: 0.9rem;
  font-weight: bold;
  color: var(--primary-color);
}
.chatbox .box .nav .user img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
}
.chatbox .box .nav .feature i {
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
}
.chatbox .box .chat-list .chat-item {
  display: flex;
  align-items: end;
  margin: 1rem 0;
}
.chatbox .box .chat-list .chat-item-owner {
  display: flex;
  align-items: end;
  flex-direction: row-reverse;
  margin: 2rem 0;
}
.chatbox .box .chat-list .chat-item-owner img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.5rem;
}
.chatbox .box .chat-list .chat-item-owner .message {
  width: 70%;
  font-size: 1.1rem;
  padding: 1rem;
  margin-right: 0.5rem;
  background-color: var(--primary-color);
  border-radius: 4px;
  font-weight: 600;
}
.chatbox .box .chat-list {
  padding: 1rem;
  height: 70vh;
  overflow-y: scroll;
}
::-webkit-scrollbar {
    display: none;
}
.chatbox .box .chat-list .chat-item .message {
  width: 70%;
  font-size: 1.1rem;
  padding: 1rem;
  margin-left: 0.5rem;
  background-color: var(--shadow-color);
  border-radius: 4px;
  font-weight: 600;
}
.chatbox .box form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--text-color);
  /* border-bottom: 1px solid var(--shadow-color); */
}

.chatbox .box form input {
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  color: var(--text-color);
  padding-left: 1rem;
}
.chatbox .box form i {
  padding: 1rem 1.4rem;
  font-size: 1.4rem;
  cursor: pointer;
  opacity: 0.6;
}
.chatbox .box form i:hover {
  opacity: 1;
}

.chatbox .box .chat-list .chat-item img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.5rem;
}

@media screen and (max-width: 992px) {
  .chatbox .box {
    width: 50%;
  }
}
@media screen and (max-width: 738px) {
  .chatbox .box {
    width: 60%;
  }
}
@media screen and (max-width: 576px) {
  .chatbox .box {
    width: 90%;
  }
}
</style>
