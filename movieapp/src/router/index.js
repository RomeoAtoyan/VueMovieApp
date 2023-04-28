import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MovieDetails from "../views/MovieDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      props: true,
    },
    {
      path: "/movie-details/:id",
      name: "Movie Details",
      component: MovieDetails,
      props: true,
    },
  ],
});

export default router;
