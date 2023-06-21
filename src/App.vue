<template>
    <AppHeader 
      @startSearch="getContentListByQuery"
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
      getContentListByQuery(searchQuery) {
          axios.get('https://api.themoviedb.org/3/search/movie?api_key=67aa46a4e4cc94fee02d3448ee99b726&query=' + searchQuery)
                  .then(function (movieResponse) {
                      console.log(movieResponse.data.results);
                      store.apiCall = movieResponse.data.results;
                  })
                  .catch(function (error) {
                      console.log(error);
                  })

          axios.get('https://api.themoviedb.org/3/search/tv?api_key=67aa46a4e4cc94fee02d3448ee99b726&query=' + searchQuery)
                  .then(function (tvResponse) {
                      console.log(tvResponse.data.results);
                      store.apiCall = store.apiCall.concat(tvResponse.data.results);
                      store.apiCall = store.apiCall.sort((a, b) => b["popularity"] - a["popularity"]);
                  })
                  .catch(function (error) {
                      console.log(error);
                  })
      }
  },

  /* computed: {
    sortItemsByPopularity() {
      return store.apiCall.sort((a, b) => b["popularity"] - a["popularity"]);
    }
  } */
}
</script>

<style lang="scss">
  @use './styles/general' as *;
</style>