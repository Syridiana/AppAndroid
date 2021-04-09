import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

// Firebase
import firebase from 'firebase';
import { VueWrapper } from '@vue/test-utils';



const firebaseConfig = {
  apiKey: "AIzaSyAOrELTN0qNyoxn1oc-rZuW7gLLXbXNM1w",
  authDomain: "pruebaapp-16c2b.firebaseapp.com",
  projectId: "pruebaapp-16c2b",
  storageBucket: "pruebaapp-16c2b.appspot.com",
  messagingSenderId: "238710568061",
  appId: "1:238710568061:web:2c32ff7566d32c8ac86d14"
};

firebase.initializeApp(firebaseConfig);

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});