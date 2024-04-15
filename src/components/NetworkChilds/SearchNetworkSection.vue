<template>
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
</template>

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
</style>
