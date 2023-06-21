<template>
    <div id="app-card">
        <h1>{{ card.title }}</h1>
        <h2>{{ card.original_title }}</h2>
        <span v-if="(card.original_language === 'en')" class="fi fi-gb"></span>
        <span v-else-if="(card.original_language === 'ko')" class="fi fi-kr"></span>
        <span v-else-if="(card.original_language === 'ja')" class="fi fi-jp"></span>
        <span v-else-if="(card.original_language === 'cs')" class="fi fi-cz"></span>
        <img v-else-if="(card.original_language === 'xx')" src="../../public/error.png">
        <span v-else :class="'fi fi-' + card.original_language"></span>
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

        img {
            width: 25px;
        }
    }
</style>