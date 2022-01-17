<template>
    <div class="container mt-5">
        <div class="row">
            <input type="text" @keyup="SearchData(query)" v-model="query" class="form-control" placeholder="Recherchez un film"  />
        </div>
        <div class="mt-5 d-flex  justify-content-center">
            <div class="d-flex flex-wrap container row">
                <Lists v-if="query != '' " :movies="movies"  />
            </div>
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
            query: '',
            movies: [],
        }
    },

    methods:{

    SearchData(query){
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6c06a71acc4f3faf0e0f9ac0e2f6cfd6&language=fr&query=${query}`).then(res => {
                this.movies = res.data.results
        }).catch( erreur => {
            this.$store.dispatch('seterror')
            console.log(erreur)
          })
      }
    }


}
</script>
