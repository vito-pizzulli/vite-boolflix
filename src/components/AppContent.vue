<template>
    <div id="app-content">
        <AppCard v-for="card in store.apiCall"
            :card="card"
        />
    </div>
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

    #app-content {
        padding: 1rem;
        border: 1px solid black;
    }
</style>