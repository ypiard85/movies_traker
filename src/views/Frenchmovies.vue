<template>
  <div class="container mt-5">
    <div class="alert alert-warning" v-if="$store.state.errorStatus">
      {{ $store.state.errorTexte }}
    </div>
    <div class="mt-5 d-flex justify-content-center" v-else>
      <div class="d-flex flex-wrap container row">
        <Lists :movies="movies" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Lists from "../components/Lists";

export default {
  components: {
    Lists,
  },

  data() {
    return {
      movies: [],
    };
  },

  created: function () {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=6c06a71acc4f3faf0e0f9ac0e2f6cfd6&language=fr&with_original_language=fr&vote_count.gte=1000`
      )
      .then((res) => {
        this.movies = res.data.results;
      })
      .catch((erreur) => {
        this.$store.dispatch("seterror");
        console.log(erreur);
      });
  },
};
</script>

<style lang="css"></style>
