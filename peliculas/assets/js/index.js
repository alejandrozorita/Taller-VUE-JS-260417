Vue.component('movie',  {
    template: '#single-movie',
    props: ['selectedMovie']
});

var vm = new Vue({
    el: '#root',
    data: {
        title: 'Título de la aplicación ocn VUE js',
        selectedMovie: {}
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
});