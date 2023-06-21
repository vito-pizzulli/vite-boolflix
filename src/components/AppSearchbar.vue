<template>
    <div id="app-searchbar">
        <h1>I'm the Searchbar</h1>
    </div>
</template>
<script>
export default {
    name: 'AppSearchbar'
    
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