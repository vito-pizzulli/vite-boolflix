<template>
    <div id="app-content" v-if="store.apiCall.length > 0">
        <AppCard v-for="card in store.apiCall" v-if="store.searchComplete"
            :card="card"
        />
    </div>
    <h2 v-if="store.noResults">Nessun risultato per la tua ricerca di "{{ store.searchedQuery }}".</h2>
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

    h2 {
        color: white;
        padding: 1rem;
    }
</style>