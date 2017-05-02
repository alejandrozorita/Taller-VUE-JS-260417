<template>
  <main role="main" id="root" class="">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h1 style="text-align: center">{{ title }}</h1>
                    <movie v-bind:selected-movie="selectedMovie"></movie>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Vue from 'vue'
import movie from '@/components/Movie/movie'

export default {
  name: 'app',
  components: {
    movie
  },
  data () {
    return {
      title: 'Título de la aplicación ocn VUE js',
      selectedMovie: {}
    }
  },
  mounted: function () {
    this.searchMovie('rey-leon')
  },
  methods: {
    searchMovie (movie) {
      return window.fetch(Vue.config.movies.ENDPOINT + movie)
        .then(response => {
          return response.json()
        }).then(json => {
          this.selectedMovie = json
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
