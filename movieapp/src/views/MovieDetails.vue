<template>
  <div
    :style="{
      'background-image': `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
    }"
    class="banner animate__animated animate__fadeIn"
  >
    <div class="movie-info animate__animated animate__fadeIn">
      <h1>
        {{ movie?.title || movie?.original_title }}
      </h1>

      <p>
        {{ movie?.overview }}
      </p>
      <br />
      <span>
        {{ movie?.release_date }}
      </span>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import "animate.css";


export default {
  setup() {
    const movie = ref({});
    const route = useRoute();

    onBeforeMount(() => {
      const apiKey = "83ac8bb4583fd137050ecfe93cac4232";
      const apiUrl = `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${apiKey}&language=en-US`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          movie.value = data;
        })
        .catch((error) => console.error(error));
    });

    return {
      movie,
    };
  },
};
</script>

<style scoped>
.banner {
  width: 80%;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
}

.banner h1 {
  font-size: 100px;
}

.movie-info {
  padding: 50px;
  background-color: rgba(0, 0, 0, 0.466);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  text-align: center;
}

p {
  font-weight: bold;
  font-size: large;
}
</style>
