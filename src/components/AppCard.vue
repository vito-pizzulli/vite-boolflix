<template>
    <div id="app-card">
        <h1>{{ card.title }}</h1>
        <h2>{{ card.original_title }}</h2>
        <h3>{{ card.original_language }}</h3>
        <h4>{{ card.vote_average }}</h4>
    </div>
</template>

<script>
export default {
    name: 'AppCard',

    props: {
        card: Object
    }
}
</script>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    #app-card {
        padding: 1rem;
        border: 1px solid black;
    }
</style>