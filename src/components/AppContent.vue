<template>
    <div id="app-content" v-if="store.apiCall.length > 0">
        <AppCard v-for="card in store.apiCall"
            :card="card"
        />
    </div>
    <h2 v-if="(store.noResults === true)">No results for your search with "{{ store.searchedQuery }}".</h2>
</template>

<script>
import AppCard from './AppCard.vue';
import { store } from '../store';
export default {
    name:'App Content',

    components: {
        AppCard
    },

    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    div#app-content {
        @include flex(row, start, center, wrap);
        padding: 1rem;
    }
</style>