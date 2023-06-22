<template>
    <div id="app-media-preview" @click="$emit('closeMediaPreview')">
        <h1 v-if="card.title">{{ card.title }}</h1>
        <h1 v-else>{{ card.name }}</h1>

        <img v-if="card.poster_path" :src="'http://image.tmdb.org/t/p/w342/' + card.poster_path" alt="Poster Image" class="poster">
        <img v-else src="/public/no_image.png" alt="No Poster Found Image" class="poster">
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
        @include flex(column, center, center, no-wrap);
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 2;
        color: white;
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>