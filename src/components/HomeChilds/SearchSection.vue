<template>
  <div class="search">
    <form>
      <input placeholder="Ex: Draw a picture!" type="text" /><i
        class="fas fa-search"
      ></i>
    </form>
  </div>
</template>

<style scoped>
.search {
  width: 100%;
  padding: 1.5rem 2.5rem;
  display: none;
  animation: appear 0.4s ease-in-out forwards;
}
form {
  border: 1px solid var(--border-color);
  border-bottom: 5px solid var(--border-color);
  border-left: 5px solid var(--border-color);
  border-radius: 20px;
  font-size: 1.5rem;
  padding: 0.8rem 1.3rem 0.8rem 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}
input {
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  color: var(--text-color);
}

@media screen and (max-width: 738px) {
  .search {
    padding: 0rem 0rem;
  }
}
@keyframes appear {
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>
