<template>
  <div class="authentication">
    <div v-if="!isToggleChangePassword" class="change-password">
      <p>Do you wanna change the password?</p>
      <button @click="onToggleChangePassword">Yes</button>
    </div>
    <form v-else>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="text" id="password" placeholder="Enter password..." />
      </div>
      <div class="form-group">
        <label for="password">Re-password</label>
        <input type="text" id="password" placeholder="Re-enter password..." />
      </div>
      <div class="btn-group">
        <button>Save</button>
        <button>Back</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isToggleChangePassword = ref(false);
const onToggleChangePassword = () => {
  isToggleChangePassword.value = !isToggleChangePassword.value;
};
</script>

<style scoped>
.authentication .change-password {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}
.authentication .change-password p {
  font-size: 1.4rem;
}
.authentication .change-password button {
  font-size: 1.2rem;
  padding: 0.3rem 1.5rem;
  margin-left: 0.5rem;
  background-color: transparent;
  color: var(--text-color);
  border: 1px solid var(--border-color);
  border-radius: 3px;
  cursor: pointer;
}
.authentication .change-password button:hover {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}
.authentication form {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
.authentication form .form-group {
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
}
.authentication form .form-group label {
  font-size: 1.2rem;
}
.authentication form .form-group input {
  font-size: 1.2rem;
  padding: 0.6rem 1rem;
  background-color: transparent;
  border: 1px solid var(--border-color);
  border-radius: 3px;
  color: var(--text-color);
}
.authentication form .btn-group button {
  margin-top: 1rem;
  margin-right: 1rem;
  width: 80px;
  padding: 0.5rem 0;
  font-size: 1.1rem;
  background-color: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-color);
  border-radius: 3px;
  cursor: pointer;
}
.authentication form .btn-group button:first-child:hover {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
}
</style>
