<template>
    <AppHeader 
      @startSearch="getMovieListByQuery()"
    />
    <AppMain />
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store';
import axios from 'axios';
export default {
  name: 'App',

  components: {
    AppHeader,
    AppMain
  },

  data() {
        return {
            store,
        }
    },

    methods: {
        getMovieListByQuery() {
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=67aa46a4e4cc94fee02d3448ee99b726&query=' + store.searchQuery)
                    .then(function (response) {
                        console.log(response.data.results);
                        store.apiCall = response.data.results;
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
        }
    }
}
</script>

<style lang="scss">
  @use './styles/general' as *;
</style>