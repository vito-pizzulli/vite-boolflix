<template>
    <div id="app-body">
        <AppHeader 
            @startSearch="getContentListByQuery"
        />
        <AppMain />
    </div>
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppMain from './AppMain.vue';
import { store } from '../store';
import axios from 'axios';
export default {
    name: 'AppBody',

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
        getContentListByQuery() {
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=67aa46a4e4cc94fee02d3448ee99b726&language=it-IT&include_adult=' + store.adultContent + 'true&query=' + store.searchQuery)
                .then(function (movieResponse) {
                    store.searchComplete = false;
                    store.noResults = false;
                    store.apiCall = movieResponse.data.results;
                })
                .catch(function (error) {
                    console.log(error);
                })

            axios.get('https://api.themoviedb.org/3/search/tv?api_key=67aa46a4e4cc94fee02d3448ee99b726&language=it-IT&include_adult=' + store.adultContent + '&query=' + store.searchQuery)
                .then(function (tvResponse) {
                    store.apiCall = store.apiCall.concat(tvResponse.data.results);
                    store.apiCall = store.apiCall.sort((a, b) => b["popularity"] - a["popularity"]);
                    console.log(store.apiCall);
                    store.searchComplete = true;

                    if (store.apiCall.length === 0) {
                    store.noResults = true;
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })

                store.searchedQuery = store.searchQuery
        }
    },

    created() {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=67aa46a4e4cc94fee02d3448ee99b726&language=it-IT&query=a')
            .then(function (movieResponse) {
                store.apiCall = movieResponse.data.results;
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('https://api.themoviedb.org/3/search/tv?api_key=67aa46a4e4cc94fee02d3448ee99b726&language=it-IT&query=b')
            .then(function (tvResponse) {
                store.apiCall = store.apiCall.concat(tvResponse.data.results);
                store.apiCall = store.apiCall.sort((a, b) => b["popularity"] - a["popularity"]);
                console.log(store.apiCall);
                store.searchComplete = true;
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}
</script>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

</style>