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
//import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    movie
  },
  data() {
    return {
      title: 'Título de la aplicación ocn VUE js',
      selectedMovie: {}
    }

  },
  mounted: function() {
      this.searchMovie('indiana');
  },
  methods: {
    searchMovie: function(movie) {
      fetch('http://www.omdbapi.com/?t=' + movie)
          .then(function(response) {
              return response.json();
          }).then(function(json) {
              this.selectedMovie = json;
          }.bind(this));
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
