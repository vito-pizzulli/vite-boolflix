<template>
    <main>
        <AppContent />
    </main>
</template>

<script>
import AppContent from './AppContent.vue';
export default {
    name: 'AppMain',

    components: {
        AppContent
    }
}
</script>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    main {
        padding-top: 5rem;
        background-color: #141414;
        height: 100vh;
        overflow-y: scroll;
    }
</style>