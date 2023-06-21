<template>
    <div id="app-card">
        <h1>I'm a Card</h1>
    </div>
</template>

<script>
export default {
    name: 'AppCard'
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