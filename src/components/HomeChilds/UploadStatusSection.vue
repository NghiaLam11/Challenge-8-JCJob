<template>
  <div class="upload">
    <div class="avatar">
      <img
        src="/src/images/goku-ultra-instinct-dragon-ball-thumb-1500x844.jpg"
        alt="avatar"
      />
    </div>
    <form>
      <input
        @click="onOpenUploadForm"
        value="What are you thinking?!"
        type="button"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
const onOpenUploadForm = () => {
  console.log("FORM");
};
</script>

<style scoped>
.upload {
  width: 100%;
  padding: 1.5rem 2.5rem;
  display: flex;
  align-items: center;
}
.avatar {
  width: 40px;
  height: 40px;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
form {
  padding-left: 0.5rem;
  width: calc(100% - 45px);
}
input {
  width: 100%;
  font-size: 1.5rem;
  padding: 0.8rem 0rem;
  padding-left: 1rem;
  border-radius: 20px;
  color: var(--border-color);
  border: 1px solid var(--border-color);
  /* border-bottom: 4px solid var(--border-color); */

  /* border-left: 4px solid var(--border-color); */
  /* border-left: none; */
  outline: none;
  background-color: transparent;
  text-align: left;
}
@media screen and (max-width: 738px) {
  .upload {
    padding: 0;
    margin: 1rem 0;
  }
}
</style>
