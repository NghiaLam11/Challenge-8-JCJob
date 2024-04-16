<template>
  <div class="profile-setting">
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Lam Hien Nghia" />
      </div>
      <div class="form-group">
        <label for="bio">Bio</label>
        <textarea
          rows="4"
          type="text"
          id="bio"
          placeholder="Lam Hien Nghia"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="experiences">Experiences</label>
        <input type="text" id="experiences" placeholder="Software,..." />
      </div>
      <div class="form-group">
        <div class="form-group-child">
          <label for="birthday">Birthday</label>
          <select id="birthday">
            <option value="">2003</option>
          </select>
        </div>
        <div class="form-group-child">
          <label for="mode">Mode</label>
          <select id="mode">
            <option value="">Worker</option>
          </select>
        </div>
        <div class="form-group-child">
          <label for="location">Location</label>
          <select id="location">
            <option value="">On</option>
          </select>
        </div>
      </div>
      <div class="btn-group">
        <button>Save</button>
        <button>Back</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.profile-setting {
  padding: 1rem;
}
.profile-setting form .form-group {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
}
.profile-setting form .form-group label {
  font-size: 1.3rem;
  margin-left: 0.4rem;
  opacity: 0.9;
}
.profile-setting form .form-group input,
textarea {
  padding: 0.5rem 1rem;
  font-size: 1.3rem;
  background-color: transparent;
  border: 1px solid var(--shadow-color);
}
.profile-setting form .form-group:nth-child(4) {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 1rem 0;
}
.profile-setting form .form-group:nth-child(4) .form-group-child {
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
}
.profile-setting form .form-group:nth-child(4) .form-group-child select {
  padding: 0.5rem;
  width: 100px;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: transparent;
  color: var(--text-color);
}
.profile-setting form .btn-group button {
  width: 70px;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  margin-right: 1rem;
  background-color: transparent;
  border: 1px solid var(--border-color);
  border-radius: 3px;
  color: var(--text-color);
  cursor: pointer;
}

.profile-setting form .btn-group button:first-child:hover {
  border-color: var(--primary-color);
  background-color: var(--primary-color);
}
.profile-setting form .btn-group button:last-child:hover {
  border-color: var(--text-color);
  background-color: var(--shadow-color);
}

</style>
