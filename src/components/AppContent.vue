<template>
    <div id="app-content">
        <h1>I'm the App Content</h1>
        <AppCard v-for="card in store.apiCall"
            :title="store.apiCall.title"
            :originalTitle="store.apiCall.originalTitle"
            :language="store.apiCall.language"
            :rating="store.apiCall.rating"
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