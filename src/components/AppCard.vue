<template>
    <div id="app-card">
        <!-- Poster and No Poster Found images  -->
        <img v-if="card.poster_path" :src="'http://image.tmdb.org/t/p/w342/' + card.poster_path" alt="Poster Image">
        <img v-else src="../../public/no_image.png" alt="No Poster Found Image">

        <!-- Property "title" for Movies, "name" for TV Series -->
        <h1 v-if="card.title">{{ card.title }}</h1>
        <h1 v-else>{{ card.name }}</h1>

        <!-- Property "original_title" for Movies, "original_name" for TV Series -->
        <h2 v-if="card.original_title">{{ card.original_title }}</h2>
        <h2 v-else>{{ card.original_name }}</h2>

        <!-- Language flags with correction if missing or value slightly different -->
        <span v-if="(card.original_language === 'en')" class="fi fi-gb"></span>
        <span v-else-if="(card.original_language === 'ko')" class="fi fi-kr"></span>
        <span v-else-if="(card.original_language === 'ja')" class="fi fi-jp"></span>
        <span v-else-if="(card.original_language === 'cs')" class="fi fi-cz"></span>
        <span v-else-if="(card.original_language === 'zh')" class="fi fi-cn"></span>
        <img class="flag-error" v-else-if="(card.original_language === 'xx')" src="../../public/error.png">
        <span v-else :class="'fi fi-' + card.original_language"></span>

        <!-- Rating -->
        <h3>{{ card.vote_average }}</h3>
    </div>
</template>

<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
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

        img.flag-error {
            width: 25px;
        }
    }
</style>