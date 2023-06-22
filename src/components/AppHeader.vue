<template>
    <header>
        <div id="app-searchbar">
            <h1>Boolflix</h1>
            <input type="text" v-model="store.searchQuery" @keyup.enter="$emit('startSearch')">
            <button @click="$emit('startSearch')">Search</button>
    </div>
    </header>
</template>

<script>
import { store } from '../store';
export default {
    name: 'AppHeader',

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

    header {
        padding: 1rem;
        border: 1px solid black;
    }
</style>