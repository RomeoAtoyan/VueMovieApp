<template>
  <nav>
    <router-link class="router-tags" to="/">
      <h1>Vue Movie App</h1>
    </router-link>
  </nav>
</template>

<style scoped>
nav {
  width: 80%;
  margin: 10px auto;
  background-color: #1f1f1f;
  padding: 15px;
  border-radius: 12px;
}

.router-tags {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: none;
}

@media only screen and (max-width: 600px) {
  nav {
    width: 80%;
    text-align: center;
  }
}
</style>
