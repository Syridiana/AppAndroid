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
    IonButton,
  },
  setup() {
    const email = ref("");
    const password = ref("");
    
    const RegisterUser = () => {
    
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => alert("Registrado correctamente"))
        .catch((err) => alert(err.message));
    };
    return {
      router: useRouter(),
      RegisterUser,
      email,
      password,
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
  top: 50%;
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