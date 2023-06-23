<template>

    <!-- Transparent black background -->
    <div class="media-preview-background" @click="$emit('closeMediaPreview')"></div>

    <!-- Media preview container -->
    <div id="app-media-preview">
        <div class="container">
            <div class="element-backdrop">

                <!-- Backdrop and No Backdrop Found images  -->
                <img v-if="card.poster_path" :src="'http://image.tmdb.org/t/p/w1280' + card.backdrop_path" alt="Backdrop Image">
                <img v-else src="/no_backdrop.png" alt="No Backdrop Found Image">

                <div class="element-title">

                    <!-- Media title - Property "title" for Movies, "name" for TV Series -->
                    <h1 v-if="card.title">{{ card.title }}</h1>
                    <h1 v-else>{{ card.name }}</h1>

                    <!-- Media original title - Property "title" for Movies, "name" for TV Series -->
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

                    <!-- Rating displayed in stars (1 to 5) and number of votes -->
                    <div class="rating">
                        <span class="star"><font-awesome-icon icon="fa-solid fa-star" v-for="star in Math.ceil(card.vote_average / 2)" /></span>
                        <span class="empty-star"><font-awesome-icon icon="fa-solid fa-star" v-for="emptyStar in 5 - (Math.ceil(card.vote_average / 2))" /></span>
                        <span class="votes-number">{{ card.vote_count }}</span>
                    </div>

                    <!-- Media play Button -->
                    <button class="play"><font-awesome-icon icon="play" /> Riproduci</button>
                </div>

                <!-- Blur effect container -->
                <div class="blur-effect"></div>
            </div>

            <div class="element-info">
                <div class="element-info-left">

                    <!-- Overview -->
                    <h3>Trama</h3>
                    <p>{{ card.overview }}</p>
                </div>

                <div class="element-info-right">
                    
                    <!-- Release date - Property "release_date" for Movies, "first_air_date" for TV Series -->
                    <h3>Data di uscita</h3>
                    <span v-if="card.release_date">{{ dateFormatToItalian(card.release_date) }}</span>
                    <span v-else>{{ dateFormatToItalian(card.first_air_date) }}</span>
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
    },

    methods: {
        dateFormatToItalian(dateToFormat) {
            const date = new Date(dateToFormat);
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
}
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

                div.element-title {
                    width: 100%;
                    position: absolute;
                    bottom: 0%;
                    left: 2%;
                    z-index: 1;

                    h1, h2 {
                        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
                        margin-right: 1rem;
                    }

                    h1 {
                        font-size: 2.5rem;
                    }

                    h2 {
                        display: inline;
                    }

                    span.fi {
                        vertical-align: text-top;
                        margin-right: 1rem;
                    }

                    img.flag-error {
                        width: 25px;
                    }

                    div.rating {
                        display: inline;
                        background-color: rgba(0, 0, 0, 0.5);
                        padding: .5rem;
                        border-radius: 20px;

                        span.star,
                        span.votes-number {
                            color: goldenrod;
                        }

                        span.votes-number {
                            margin-left: 1rem;
                        }
                    }

                    button.play {
                        display: block;
                        padding: .5rem 3rem;
                        margin: 1rem 0;
                        background-color: white;
                        font-size: 1.5rem;
                        border: none;
                        border-radius: 10px;
                        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
                    }
                }

                img {
                    width: 100%;
                }

                div.blur-effect {
                    width: 110%;
                    height: 50px;
                    transform: translate(-5%, 20px);
                    filter: blur(.5rem);
                    position: absolute;
                    background-color: #181818;
                    bottom: 0;
                    z-index: 0;
                }
            }

            div.element-info {
                @include flex(row, start, start, no-wrap);
                padding: 1rem 2rem 2rem;

                div.element-info-left {
                    width: 70%;
                    z-index: 1;

                    h3 {
                        margin-bottom: .5rem;
                        color: goldenrod;
                    }
                }

                div.element-info-right {
                    z-index: 1;
                    width: 30%;
                    padding: 2rem;

                    h3 {
                        margin-bottom: .2rem;
                        color: goldenrod;
                    }
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