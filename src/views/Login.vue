<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Login</ion-title>
        </ion-toolbar>
      </ion-header>

      <form @submit.prevent="Login">
        <!-- Inputs with labels -->
        <ion-item>
          <ion-label>Usuario</ion-label>
          <ion-input v-model="email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Contraseña</ion-label>
          <ion-input v-model="password"></ion-input>
        </ion-item>

        <ion-button @click="Login" expand="block" >Ingresar</ion-button>
        <ion-button @click="router.replace({path:'/register'})" color="warning" expand="block">Register</ion-button>
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
  name: "LogIn",
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
    
    const Login = () => {
    
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((data) => console.log(data))
        .catch((err) => alert(err.message));
    };
    return {
      router: useRouter(),
      Login,
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