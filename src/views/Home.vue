<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Bienvenido</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Bienvenido</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <!-- Inputs with labels -->
        <ion-item>
          <ion-label>Bienvenido</ion-label>
        </ion-item>

        <ion-button @click="LogOut" expand="block" color="danger"
          >Log Out</ion-button
        >
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  toastController,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

import { ref, onBeforeMount } from "vue";
import firebase from "firebase";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  methods: {
    async openToast() {
      const toast = await toastController.create({
        message: "Has cerrado sesión.",
        duration: 2000,
      });
      return toast.present();
    },
      LogOut () {
      firebase
        .auth()
        .signOut()
        .then(() => this.openToast())
        .catch((err) => alert(err.message));
    }
  },
  setup() {
    const name = ref("");

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
    });

    return {
      router: useRouter(),
      name,
    };
  },
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 20%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>