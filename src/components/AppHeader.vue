<template>
    <header>
        <h1>I'm the Header</h1>
        <AppSearchbar />
    </header>
</template>

<script>
import AppSearchbar from './AppSearchbar.vue';
export default {
    name: 'AppHeader',
    
    components: {
        AppSearchbar
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