<template>
  <div v-if="movies" class="movies">
    <router-link
      class="router-tags"
      :to="'/movie-details/' + movie?.id"
      v-for="movie in movies"
      :key="movie?.id"
    >
      <MovieCard
        class="animate__animated animate__fadeIn"
        :title="movie?.title"
        :rating="movie?.vote_average"
        :imageSrc="`https://image.tmdb.org/t/p/original${movie?.poster_path}`"
      />
    </router-link>
  </div>
  <div class="page-buttons">
    <button @click="handlePrevPage">&lt</button>
    <span>{{ this.page }}</span>
    <button @click="handleNextPage">></button>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import MovieCard from "../components/MovieCard.vue";

export default {
  components: {
    Navbar,
    MovieCard,
  },
  data() {
    return {
      movies: [],
      page: 1,
    };
  },
  methods: {
    fetchMovies() {
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=83ac8bb4583fd137050ecfe93cac4232&language=en-US&page=${this.page}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.movies = data.results;
          console.log(data);
        })
        .catch((error) => console.error(error));
    },
    handleNextPage() {
      this.page++;
      if (this.page > this.totalPages) {
        this.page = this.totalPages;
      }
      this.fetchMovies();
    },

    handlePrevPage() {
      if (this.page > 1) {
        this.page--;
        this.fetchMovies();
      }
    },
  },
  mounted() {
    this.fetchMovies();
  },
};
</script>

<style scoped>
.movies {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.page-buttons {
  width: 5%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #1f1f1f;
  padding: 5px;
  border-radius: 12px;
}

button {
  border-radius: 10px;
  padding: 10px 20px;
  background-color: #1f1f1f;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: larger;
}

button:first-child:hover {
  box-shadow: 0 0 10px black;
  transform: translateX(-5px);
}
button:last-child:hover {
  box-shadow: 0 0 10px black;
  transform: translateX(5px);
}

.router-tags {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: none;
}
</style>
