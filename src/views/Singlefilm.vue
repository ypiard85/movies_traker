<template>
  <div>
    <div class="alert alert-warning container" v-if="$store.state.errorStatus">
      {{ $store.state.errorTexte }}
    </div>
    <header class="bg-primary py-5" v-else>
      <div class="container d-flex flex-wrap">
        <div class="left">
          <img
            class="img-responsive col-md-7 col-12"
            :src="
              `https://www.themoviedb.org/t/p/w600_and_h900_bestv2` +
              list.poster_path
            "
            alt=""
          />
        </div>
        <div class="right text-white col-md-5 col-12">
          <h1>{{ list.title }}</h1>
          <p>
            <i class="fas fa-star text-warning"></i> {{ list.vote_average }}
            <span class="fs-3 fw-bold">/10</span>
          </p>
          <h6 class="text-dark">{{ list.tagline }}</h6>
          <p>Date de sortie : {{ list.release_date }}</p>
          <div class="resumer">
            {{ list.overview }}
          </div>
        </div>
      </div>
      <div class="container">
        <iframe class="mt-5 col-md-6 col-12" height="315" autoplay :src="`https://www.youtube.com/embed/`+  video[0].key" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </header>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "singlefilm",

  data() {
    return {
      list: null,
      video: null,
      params: this.$route.params.id,
    };
  },

  created() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.params}?api_key=6c06a71acc4f3faf0e0f9ac0e2f6cfd6&language=fr-FR&include_video=true`
      )
      .then((res) => {
          this.list = res.data;

        axios.get(`https://api.themoviedb.org/3/movie/${this.params}/videos?api_key=6c06a71acc4f3faf0e0f9ac0e2f6cfd6&language=fr`).then(res => {
            this.video = res.data.results
            console.log(this.video)
        })

      })
      .catch((erreur) => {
        this.$store.dispatch("seterror");
        console.log(erreur);
      });
  },
};
</script>
