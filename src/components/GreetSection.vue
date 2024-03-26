<template>
  <div class="greet">
    <div class="content">
      <h4>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse pariatur
        sunt, facere minus consequatur dicta alias
      </h4>
      <img src="../images/arrived.png" alt="arrived" />
      <button>Discover</button>
    </div>
  </div>
</template>

<style scoped>
.greet {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  background-color: var(--shadow-color);
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content h4 {
  text-align: center;
  width: 60%;
  margin: 0 auto;
  font-weight: 400;
  font-size: 1.5rem;
  font-style: italic;
  opacity: 0.7;
}
.content button {
  font-size: 1.2rem;
  border-radius: 3px;
  padding: 0.5rem 1.5rem;
  transition: all 0.2s ease;
  background-color: transparent;
  color: var(--text-color);
  border: 1px solid var(--text-color);
  cursor: pointer;
}
.content button:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
  transform: scale(1.05);
}
.content img {
  max-width: 200px;
}
@media screen and (max-width: 576px) {
    .content h4 {
        width: 85%;
    }
}
</style>
