import { createApp } from 'vue'
import './style.css'
import router from './router/index.ts';
import { Quasar, Notify } from 'quasar'
import iconSet from 'quasar/icon-set/fontawesome-v6'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import specific icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp(App)

myApp.use(Quasar, {
  // import Quasar plugins and add here
  plugins: {
    Notify
  },
  config: {
    dark: true,
  },
  iconSet: iconSet
})

myApp.use(router);

// Add icons to the library
library.add(faFacebook, faTwitter, faInstagram);
myApp.component('font-awesome-icon', FontAwesomeIcon);

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
