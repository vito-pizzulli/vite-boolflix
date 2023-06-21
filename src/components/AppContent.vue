<template>
    <div id="app-content">
        <h1>I'm the App Content</h1>
    </div>
</template>

<script>
export default {
    name:'App Content'
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