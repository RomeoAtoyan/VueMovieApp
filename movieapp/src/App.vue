<script>
import Home from "./views/Home.vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Home,
    Navbar,
  },
};
</script>

<template>
  <main>
    <Navbar />
    <router-view />
  </main>
</template>

<style scoped></style>
