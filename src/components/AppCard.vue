<template>
    <div id="app-card" @click="mediaPreviewVisible = !mediaPreviewVisible">

        <!-- Poster and No Poster Found images  -->
        <img v-if="card.poster_path" :src="'http://image.tmdb.org/t/p/w342/' + card.poster_path" alt="Poster Image" class="poster">
        <img v-else src="/public/no_image.png" alt="No Poster Found Image" class="poster">

        <div class="element-info">
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

            <!-- Rating displayed in stars (1 to 5) -->
            <span class="star"><font-awesome-icon icon="fa-solid fa-star" v-for="star in Math.ceil(card.vote_average / 2)" /></span>
            <span class="empty-star"><font-awesome-icon icon="fa-solid fa-star" v-for="emptyStar in 5 - (Math.ceil(card.vote_average / 2))" /></span>

            <!-- Overview -->
            <p>{{ card.overview }}</p>
        </div>
    </div>

    <AppMediaPreview v-if="mediaPreviewVisible"
        :card="card"
        :mediaPreviewVisible="mediaPreviewVisible"
    />
</template>

<script>
import AppMediaPreview from './AppMediaPreview.vue';
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default {
    name: 'AppCard',

    data() {
        return {
            mediaPreviewVisible: false
        }
    },

    components: {
        AppMediaPreview
    },

    props: {
        card: Object
    }
}
</script>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    div#app-card {
        position: relative;
        width: 342px;
        height: 513px;
        margin: 1rem;
        background-color: black;
        color: white;
        overflow-y: hidden;

        img.poster {
            position: absolute;
            z-index: 1;
            transition: all .5s ease;

            &:hover {
                opacity: 0;
            }
        }

        div.element-info {
            padding: 1rem;

            img.flag-error {
                width: 25px;
            }

            h1 {
            font-size: 1.3rem;
            }

            h2 {
                font-size: .9rem;
            }

            h1, h2, span, p {
                margin: .3rem 0;
            }

            p {
                font-size: .79rem;
            }

            span.star {
                color: goldenrod;
            }

            span.fi {
                margin-right: 1rem;
            }
        }
    }
</style>