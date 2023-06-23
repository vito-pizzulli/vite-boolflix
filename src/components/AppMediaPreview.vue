<template>
    <div class="media-preview-background" @click="$emit('closeMediaPreview')"></div>
    <div id="app-media-preview">
        <div class="container">

            <div class="element-backdrop">
                <img v-if="card.poster_path" :src="'http://image.tmdb.org/t/p/w1280' + card.backdrop_path" alt="Backdrop Image">
                <img v-else src="/public/no_image.png" alt="No Backdrop Found Image">
                <div class="blur-effect"></div>
            </div>

            <div class="element-info">
                <div class="element-info-left">
                    <h1 v-if="card.title">{{ card.title }}</h1>
                    <h1 v-else>{{ card.name }}</h1>

                    <h2 v-if="card.original_title">{{ card.original_title }}</h2>
                    <h2 v-else>{{ card.original_name }}</h2>

                    <span v-if="(card.original_language === 'en')" class="fi fi-gb"></span>
                    <span v-else-if="(card.original_language === 'ko')" class="fi fi-kr"></span>
                    <span v-else-if="(card.original_language === 'ja')" class="fi fi-jp"></span>
                    <span v-else-if="(card.original_language === 'cs')" class="fi fi-cz"></span>
                    <span v-else-if="(card.original_language === 'zh')" class="fi fi-cn"></span>
                    <img class="flag-error" v-else-if="(card.original_language === 'xx')" src="../../public/error.png">
                    <span v-else :class="'fi fi-' + card.original_language"></span>

                    <span class="star"><font-awesome-icon icon="fa-solid fa-star" v-for="star in Math.ceil(card.vote_average / 2)" /></span>
                    <span class="empty-star"><font-awesome-icon icon="fa-solid fa-star" v-for="emptyStar in 5 - (Math.ceil(card.vote_average / 2))" /></span>
                </div>

                <div class="element-info-right">
                    <p>{{ card.overview }}</p>
                </div>
            </div>

            <button class="close-media-preview" @click="$emit('closeMediaPreview')"><font-awesome-icon icon="xmark" /></button>
        </div>
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

    div.media-preview-background {
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2
        }

    div#app-media-preview {
        @include flex(column, center, center, no-wrap);
        color: white;
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;

        div.container {
            width: 50%;
            background-color: #181818;
            border-radius: 10px;
            overflow: hidden;
            position: relative;
            z-index: 2;

            div.element-backdrop {
                position: relative;

                img {
                    width: 100%;
                }

                div.blur-effect {
                    width: 110%;
                    height: 100px;
                    transform: translate(-5%, 50%);
                    filter: blur(.9rem);
                    position: absolute;
                    background-color: #181818;
                    bottom: 0;
                }
            }

            div.element-info {
                @include flex(row, space-between, start, no-wrap);
                padding: 1rem;

                div.element-info-left {
                    width: 50%;
                    padding: .5rem;
                }

                div.element-info-right {
                    width: 50%;
                    padding: 2rem .5rem 0;
                }
            }

            button.close-media-preview {
                background-color: #181818;
                border-radius: 50%;
                border: none;
                width: 40px;
                aspect-ratio: 1;
                color: white;
                font-size: 1.5rem;
                position: absolute;
                top: 3%;
                left: 94%;
            }
        }
    }
</style>