<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
//import { useRouter, useRoute } from 'node_modules/vue-router/dist/vue-router';
import { defineComponent } from 'vue';
import { onBeforeMount } from 'vue';
import firebase from 'firebase';

import { useRouter, useRoute } from 'vue-router';



export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  setup(){
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if(!user){
          router.replace('/login');
        } else if (route.path == "/login" || route.path == "/register"){
          router.replace('/');
        }
      });
    });
  }
});
</script>