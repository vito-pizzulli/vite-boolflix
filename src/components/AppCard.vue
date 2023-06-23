<template>
    <div id="app-card" @click="toggleMediaPreview">

        <!-- Poster and No Poster Found images  -->
        <img v-if="card.poster_path" :src="'http://image.tmdb.org/t/p/w342' + card.poster_path" alt="Poster Image" class="poster">
        <img v-else src="/no_image.png" alt="No Poster Found Image" class="poster">
        <div class="circle-play-icon">
            <span><font-awesome-icon icon="circle-play" /></span>
        </div>
    </div>

    <AppMediaPreview v-if="mediaPreviewVisible"
        :card="card"
        @closeMediaPreview="toggleMediaPreview"
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
    },

    methods: {
        toggleMediaPreview() {
            this.mediaPreviewVisible = !this.mediaPreviewVisible
        }
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
        border-radius: 10px;

        &:hover div.circle-play-icon {
            background-color: rgba(0, 0, 0, 0.5);
            opacity: 1;
        }

        img.poster {
            position: absolute;
        }

        div.circle-play-icon {
            opacity: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            transition: all .3s;

            span {
                font-size: 5rem;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
</style>