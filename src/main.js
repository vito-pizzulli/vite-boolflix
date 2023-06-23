import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar, faMagnifyingGlass, faBell, faCaretDown, faXmark, faPlay } from '@fortawesome/free-solid-svg-icons'
library.add(faStar, faMagnifyingGlass, faBell, faCaretDown, faXmark, faPlay)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
