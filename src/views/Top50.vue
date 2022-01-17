<template>
  <div class="mt-5 d-flex justify-content-center">
    <div v-if="$store.state.errorStatus">
      <section class="alert alert-warning">
        {{ $store.state.errorTexte }}
      </section>
    </div>
    <div class="d-flex flex-wrap container row" v-else>
      <Lists :movies="movies" />
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
        `https://api.themoviedb.org/3/discover/movie?api_key=6c06a71acc4f3faf0e0f9ac0e2f6cfd6&page=1&sort_by=vote_average.desc&vote_count.gte=10000&language=fr-FR`
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
