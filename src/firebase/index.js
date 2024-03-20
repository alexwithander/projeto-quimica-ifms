import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/database";

// inicialização do Firebase
export const firebaseApp = firebase.initializeApp({
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
});

// configuração da persistência de autenticação
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
    console.log("Persistência de autenticação configurada com sucesso.");
  })
  .catch((error) => {
    console.error("Erro ao configurar a persistência de autenticação:", error);
  });

// função para instalar o Firebase no Vue
export default function install(Vue) {
  Object.defineProperty(Vue.prototype, "$firebase", {
    get() {
      return firebaseApp;
    },
  });
}
