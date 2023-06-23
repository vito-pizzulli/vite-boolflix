<template>
    <header>
        <div class="header-half">
            <img src="/netflix_logo.png" alt="Netflix Logo">
            <nav id="header-navbar">
                <ul>
                    <li v-for="link in store.navbarLinks"><a :href="link.link">{{ link.text }}</a></li>
                </ul>
            </nav>
        </div>
        <div class="header-half">
            <div id="app-searchbar">
                <button @click="inputVisible = !inputVisible" class="search-button"><font-awesome-icon icon="magnifying-glass" /></button>
                <input v-if="inputVisible" type="text" v-model="store.searchQuery" @keyup.enter="$emit('startSearch')" placeholder="Titolo del film o della serie TV">
                <button v-if="inputVisible" @click="inputVisible = !inputVisible" class="cross-button"><font-awesome-icon icon="xmark" /></button>
                <span class="icon" @click="notificationsVisible = !notificationsVisible"><font-awesome-icon icon="bell" /></span>
                <div v-if="notificationsVisible" class="notifications" @click="notificationsVisible = !notificationsVisible">
                    <span>Nessuna nuova notifica.</span>
                </div>
                <img src="/profile_pic.png" alt="Profile Pic">
                <span class="icon"><font-awesome-icon icon="caret-down" /></span>
            </div>
        </div>
    </header>
</template>

<script>
import { store } from '../store';
export default {
    name: 'AppHeader',

    data() {
        return {
            store,
            inputVisible: false,
            notificationsVisible: false
        }
    }
}
</script>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    header {
        @include flex(row, space-between, center, no-wrap);
        background-color: black;
        color: white;
        padding: 0 3rem;
        position: fixed;
        width: 100%;
        z-index: 1;

        div.header-half {
            @include flex(row, center, center, no-wrap);

            img {
            width: 150px;
            }

            nav#header-navbar ul {
                @include flex(row, start, center, no-wrap);
                list-style: none;

                li {
                    margin: 0 1rem;

                    a {
                        color: white;
                        text-decoration: none;
                    }
                }
            }

            div#app-searchbar {
                @include flex(row, center, center, no-wrap);

                img {
                    width: auto;
                    margin-left: 1rem;
                }

                button {
                    background-color: transparent;
                    color: white;
                    border: none;
                    font-size: 1.2rem;
                    margin-right: 1rem;
                    cursor: pointer;
                }

                button.cross-button {
                    transform: translateX(-150%);
                }

                input {
                    background-color: transparent;
                    border: 1px solid white;
                    padding: .5rem;
                    color: white;
                    width: 300px;
                }

                span.icon {
                    display: inline-block;
                    margin: 0 1rem;
                    font-size: 1.2rem;
                    cursor: pointer;
                }

                div.notifications {
                    position: absolute;
                    background-color: rgba(0, 0, 0, 0.5);
                    border: 1px solid white;
                    padding: 1rem;
                    color: white;
                    top: 55px;
                    right: 70px;
                }
            }
        }
    }
</style>