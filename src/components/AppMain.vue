<template>
    <main>
        <h1>I'm the Main</h1>
    </main>
</template>

<script>
export default {
    name: 'AppMain'

}
</script>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    main {
        padding: 1rem;
        border: 1px solid black;
    }
</style>