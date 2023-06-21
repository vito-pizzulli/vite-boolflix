<template>
    <header>
        <div id="app-searchbar">
            <h1>I'm the Header</h1>
            <input type="text" v-model="searchQuery" @keyup.enter="$emit('startSearch', searchQuery)">
            <button @click="$emit('startSearch', searchQuery)">Search</button>
    </div>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',

    data() {
        return {
            searchQuery: ''
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