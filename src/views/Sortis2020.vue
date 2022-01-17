<template>
  <div class="mt-5 d-flex  justify-content-center">
      <div v-if="$store.state.errorStatus">
          <section class="alert alert-warning"> {{ $store.state.errorTexte }} </section>
      </div>
      <div class="d-flex flex-wrap container row" v-else>
        <Lists :movies="movies" />
      </div>
    </div>
</template>


<script>
import axios from 'axios';
import Lists from '../components/Lists'

export default {

    components: {
        Lists
    },

    data(){
        return{
            movies: [],
        }
    },

    created: function(){

            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=6c06a71acc4f3faf0e0f9ac0e2f6cfd6&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2020`).then( (res) => {
                this.movies = res.data.results
            }).catch( erreur => {
            this.$store.dispatch('seterror')
            console.log(erreur)
          })
  },
}
</script>

<style lang="css">

</style>