<template>
  <div class="mt-5 d-flex justify-content-center">
      <div class="alert alert-warning"  v-if="$store.state.errorStatus">
          {{ $store.state.errorTexte }}
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
        `https://api.themoviedb.org/3/discover/movie?api_key=6c06a71acc4f3faf0e0f9ac0e2f6cfd6&page=1&sort_by=popularity.desc&language=fr-FR`
      )
      .then((res) => {
        this.movies = res.data.results;
        });

        axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=6c06a71acc4f3faf0e0f9ac0e2f6cfd6&page=2&sort_by=popularity.desc&language=fr-FR`
          )
          .then((res) => {
            res.data.results.forEach((r) => {
              this.movies.push(r);
            });
          }).catch(erreur => {
          this.$store.dispatch('seterror')
          console.log(erreur + 'ERREUR')

      })
    }
};
</script>
