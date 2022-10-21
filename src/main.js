import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowUpFromBracket, faBell, faCalendarDays, faChevronRight, faEarthEurope, faFileImport, faGear, faLocationDot, faRightFromBracket, faUser, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons'


library.add(faUser)
library.add(faUsers)
library.add(faBell)
library.add(faGear)
library.add(faChevronRight)
library.add(faEarthEurope)
library.add(faLocationDot)
library.add(faCalendarDays)
library.add(faRightFromBracket)
library.add(faFileImport)
library.add(faUserPlus)





createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

