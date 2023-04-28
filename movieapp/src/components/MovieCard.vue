<template>
  <div class="movie-container">
    <div class="movie-left">
      <img width="120" :src="imageSrc" alt="movie-poster" srcset="" />
    </div>
    <div class="movie-right">
      <h2>{{ title }}</h2>
      <br />
      <h4>{{ rating }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.movie-container {
  width: 500px;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  background-color: #1f1f1f;
  border-radius: 12px;
  cursor: pointer;
}

.movie-container:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 20px rgb(0, 0, 0);
}

.movie-right {
  width: 100%;
}

h2 {
  text-align: center;
}

h4 {
  text-align: center;
  background-color: yellowgreen;
  margin: 0 auto;
  width: fit-content;
  padding: 5px;
  border-radius: 6px;
  color: black;
}

img {
  margin-left: 10px;
  margin-top: 5px;
  border-radius: 12px;
}
</style>

<!-- https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg -->
