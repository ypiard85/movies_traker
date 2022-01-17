<template>
    <div class="card">
        <img
          :src="
            `https://www.themoviedb.org/t/p/w600_and_h900_bestv2` +
            movie.poster_path
          "
          class="card-img-top"
          alt="siou"
        />
        <div class="card-body">
          <h5 class="card-title">{{ movie.title }}</h5>
          <p>
            <i class="fas fa-star text-warning"></i> {{ movie.vote_average }}
            <span class="fw-bold">/10</span>
          </p>
          <p class="card-text">{{ movie.overview.slice(0, 100) }} [...] </p>
          <router-link
            :to="{ name: 'singlefilm', params: { id: movie.id } }"
            class="btn btn-primary"
            >Voir le film
          </router-link>
        </div>
      </div>
</template>

<script>
    export default {

        name: 'movie',

        props: ['movie'],


        mounted() {
            console.log(this.movie)
        }
    }

</script>