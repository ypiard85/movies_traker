<template>
  <div>
    <SortData :movies="movies" />
    <div class="d-flex flex-wrap">
      <div
        id="list-film"
        class="list col-md-3"
        v-for="movie in movies"
        :key="movie.id"
      >
      <Movie :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
    import SortData from '../components/SortData'
    import Movie from './Movie'
export default {
  name: "Lists",
  props: ["movies"],

  data(){
    return{

    }
  },

  mounted(){
    console.log(this.text)
  },

  components: {
    SortData, Movie
  },
};

</script>

<style>
.card {
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>
