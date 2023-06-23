<template>
    <header>
        <div class="header-half">
            <img src="/boolflix_logo.png" alt="Netflix Logo" @click="$emit('getHomeContent')"> <!-- Boolflix Logo thanks to Emanuela Pau -->
            <nav id="header-navbar">
                <ul>
                    <li v-for="link in store.navbarLinks"><a :href="link.link">{{ link.text }}</a></li>
                </ul>
            </nav>
        </div>
        <div class="header-half">
            <div id="app-searchbar">
                <button @click="inputVisible = !inputVisible, notificationsHide(), profileMenuHide()" class="search-button"><font-awesome-icon icon="magnifying-glass" /></button>
                <Transition name="input-translate">
                    <input v-if="inputVisible" type="text" v-model="store.searchQuery" @keyup.enter="$emit('startSearch')" placeholder="Titolo del film o della serie TV">
                </Transition>
                <button v-if="inputVisible" @click="inputVisible = !inputVisible, notificationsHide(), profileMenuHide()" class="cross-button"><font-awesome-icon icon="xmark" /></button>
                <span class="icon" @click="notificationsVisible = !notificationsVisible, inputHide(), profileMenuHide()"><font-awesome-icon icon="bell" /></span>
                <Transition name="notifications-translate">
                    <div v-if="notificationsVisible" class="notifications" @click="notificationsVisible = !notificationsVisible, inputHide(), profileMenuHide()">
                        <span>Nessuna nuova notifica.</span>
                    </div>
                </Transition>
                <Transition name="profile-translate">
                    <div v-if="profileMenuVisible" class="profile-menu">
                        <ul>
                            <li><font-awesome-icon icon="pencil" /> Gestisci i profili</li>
                            <li><font-awesome-icon icon="user" /> Account</li>
                            <li><font-awesome-icon icon="circle-question" /> Centro assistenza</li>
                            <li v-if="!store.adultContent" @click="store.adultContent = !store.adultContent"><font-awesome-icon icon="ban" /> Contenuti per adulti: No</li>
                            <li v-else @click="store.adultContent = !store.adultContent"><font-awesome-icon icon="ban" /> Contenuti per adulti: Si</li>
                        </ul>
                    </div>
                </Transition>
                <img src="/profile_pic.png" alt="Profile Pic" @click="profileMenuVisible = !profileMenuVisible, inputHide(), notificationsHide()">
                <span class="icon" @click="profileMenuVisible = !profileMenuVisible, inputHide(), notificationsHide()"><font-awesome-icon icon="caret-down" /></span>
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
            notificationsVisible: false,
            profileMenuVisible: false
        }
    },

    methods: {
        inputHide() {
            this.inputVisible = false
        },
        notificationsHide() {
            this.notificationsVisible = false
        },
        profileMenuHide() {
            this.profileMenuVisible = false
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
            cursor: pointer;
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

                div.notifications,
                div.profile-menu {
                    position: absolute;
                    background-color: rgba(0, 0, 0, 0.8);
                    border: 1px solid white;
                    color: white;
                }

                div.notifications {
                    top: 70px;
                    right: 70px;
                }

                div.profile-menu {
                    top: 70px;
                    right: 100px;
                }

                div.notifications {
                    padding: 1rem;
                }

                div.profile-menu ul {
                    list-style: none;

                    li {
                        padding: 1rem;
                        border-bottom: 1px solid white;
                        cursor: pointer;
                        width: 250px;
                    }
                }
            }
        }
    }

    .input-translate-enter-active,
    .input-translate-leave-active,
    .notifications-translate-enter-active,
    .notifications-translate-leave-active,
    .profile-translate-enter-active,
    .profile-translate-leave-active {
        transition: all .3s;
    }

    .input-translate-enter-from,
    .input-translate-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

    .notifications-translate-enter-from,
    .notifications-translate-leave-to {
        opacity: 0;
        transform: translateY(-30px);
    }

    .profile-translate-enter-from,
    .profile-translate-leave-to{
        opacity: 0;
        transform: translate(30px, -30px);
    }
</style>