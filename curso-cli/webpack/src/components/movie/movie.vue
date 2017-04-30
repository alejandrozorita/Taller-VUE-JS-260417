<template lang="htmt">
<transition appear name="slide-fade">
    <section class="single-movie-wrapper">
        <div class="movie-data">
        </div>
        <footer>
            <div class="row">
                <div class="col-sm-offset-3 col-sm-6">
                    <div class="thumbnail">
                        <img v-if="selectedMovie.Poster != 'N/A'" class="movie-poster" :src="selectedMovie.Poster" :alt="selectedMovie.Title + 'poster'">
                        <div class="caption">
                            <h2>{{ selectedMovie.Title }}</h2>
                            <p class="plot"> {{ selectedMovie.Plot }}</p>
                            <p><b>Genero: </b>{{ selectedMovie.Genere }}</p>
                            <p><b>Year: </b>{{ selectedMovie.Year }}</p>
                            <p><b>Director: </b>{{ selectedMovie.Director }}</p>
                            <p><b>Actors: </b>{{ selectedMovie.Actors }}</p>
                            <p><b>Runtime: </b>{{ selectedMovie.Runtime }}</p>
                            <p><b>Rating: </b>{{ selectedMovie.Rating }}</p>
                            <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </section>
</transition>
</template>

<script>
  export default {
    name: 'Movie',
    props: {
      selectMovie: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="css">
  .slide-fade-enter-active {
    -webkit-transition: all 2s ease;
    -moz-transition: all 2s ease;
    -ms-transition: all 2s ease;
    -o-transition: all 2s ease;
    transition: all 2s ease;
}

.slide-fade-leave-active {
    -webkit-transition: all 3.25s cubic-bezier(1.0, 0.5, 0.5, 1.0);
    -moz-transition: all 3.25s cubic-bezier(1.0, 0.5, 0.5, 1.0);
    -ms-transition: all 3.25s cubic-bezier(1.0, 0.5, 0.5, 1.0);
    -o-transition: all 3.25s cubic-bezier(1.0, 0.5, 0.5, 1.0);
    transition: all 3.25s cubic-bezier(1.0, 0.5, 0.5, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
    -webkit-transform: translateY(-1rem);
    -moz-transform: translateY(-1rem);
    -ms-transform: translateY(-1rem);
    -o-transform: translateY(-1rem);
    transform: translateY(-1rem);
    opacity: 0;
}
</style>
