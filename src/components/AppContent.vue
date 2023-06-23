<template>
    <div id="app-content">
        <TransitionGroup name="cards">
            <AppCard v-for="(card, index) in store.apiCall" v-if="store.searchComplete" :key="card.id"
                :card="card"
            />
        </TransitionGroup>
    </div>
    <h2 v-if="(store.apiCall.length === 0 && store.searchedQuery)">Nessun risultato per la tua ricerca di "{{ store.searchedQuery }}".</h2>
    <h2 v-else-if="store.searchedQuery.length === 0">Inserisci il nome di un film o di una serie TV.</h2>
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

    .cards-enter-active, .cards-leave-active {
        transition: all .3s;
    }
    .cards-enter, .cards-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
</style>