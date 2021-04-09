<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Register</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Register</ion-title>
        </ion-toolbar>
      </ion-header>

      <form @submit.prevent="RegisterUser">
        <!-- Inputs with labels -->
        <ion-item>
          <ion-label>Usuario</ion-label>
          <ion-input v-model="email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Contraseña</ion-label>
          <ion-input v-model="password"></ion-input>
        </ion-item>

        <ion-button @click="RegisterUser" expand="block" color="warning">Register</ion-button>
        <ion-button @click="router.replace({path:'/login'})" expand="block">Go back to login</ion-button>
      </form>
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
  IonLabel,
  IonItem,
  IonInput,
  IonButton,
  toastController
} from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

import { ref } from "vue";
import firebase from "firebase";

export default defineComponent({
  name: "Register",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonItem,
    IonInput,
    IonButton
  },
   methods: {
    async openToast() {
      const toast = await toastController.create({
        message: "Registrado correctamente.",
        duration: 2000,
      });
      return toast.present();
    },
    RegisterUser() {
    
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => this.openToast())
        .catch((err) => alert(err.message));
    }
  },
  setup() {
    const email = ref("");
    const password = ref("");

    return {
      router: useRouter(),
      email,
      password,
    };
  },
});
</script>

<style scoped>
ion-content {
  /* Set the background of the entire app */
  --ion-background-color: #eee;

  /* Set the font family of the entire app */
  --ion-text-color: #000;
}

ion-header {
  /* Set the background of the entire app */
  --ion-background-color: #eee;

  /* Set the font family of the entire app */
  --ion-text-color: #000;
}
</style>