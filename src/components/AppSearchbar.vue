<template>
    <div id="app-searchbar">
        <input type="text" v-model="store.searchQuery">
        <button>Search</button>
    </div>
</template>
<script>
import { store } from '../store';
export default {
    name: 'AppSearchbar',

    data() {
        return {
            store
        }
    }
}
</script>
<style lang="scss">
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    #app-searchbar{
        padding: 1rem;
        border: 1px solid black;
    }
</style>