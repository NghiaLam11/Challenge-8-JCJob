<template>
  <div class="signup">
    <div class="container signup-container">
      <div class="left">
        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
        <img src="../images/signup.png" alt="seeker job" />
      </div>
      <div class="right">
        <h3>Sign up</h3>
        <form class="signup-form">
          <div class="form-group">
            <label for="name">FULL NAME</label>
            <input placeholder="Name..." type="text" name="name" />
          </div>
          <div class="form-group">
            <label for="email">EMAIL</label>
            <input placeholder="Email..." type="text" name="email" />
          </div>
          <div class="form-group">
            <label for="password">PASSWORD</label>
            <input placeholder="Password..." type="text" name="password" />
          </div>
          <div class="form-btn">
            <button>Sign up</button>
            <router-link to="/signin">I'm already member</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.signup {
  height: 100vh;
}
.signup .signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.right,
.left {
  width: 50%;
}
.left h4 {
  font-size: 1.5rem;
  text-align: center;
  margin: 0 auto;
  max-width: 70%;
  padding: 3rem;
  font-weight: 400;
  opacity: 0.7;
  font-style: italic;
}
.left img {
  max-width: 250px;
  margin: 0 auto;
}
</style>
