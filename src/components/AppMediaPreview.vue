<template>
    <div id="app-media-preview">
        <h1>Sono la preview</h1>
    </div>
</template>

<script>
export default {
    name: 'AppMediaPreview',

    props: {
        card: Object
    }
}
</script>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    div#app-media-preview {
        color: white;
    }
</style>