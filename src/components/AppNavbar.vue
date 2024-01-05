<template>
  <nav>
    <v-app-bar app>
      <v-app-bar-nav-icon v-on:click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer>
        <v-toolbar-title class="text-uppercase">
        <span>Licenciatura em Química</span>
      </v-toolbar-title>
      </v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-layout column align-center>
        <v-flex class="mt-5 text-center">
          <v-avatar size="150">
            <img src="../assets/IFMS-LOGO-VERTICAL.png" alt=""/>
          </v-avatar>
          <p class="white--text subheading mt-1 text-center">{{ nomeAdmin }}</p>
        </v-flex>
        
      </v-layout>
      <v-list flat>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
          active-class="border"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
          <LoginForm @login-admin="loginAdministrador" @fechar-dialog="fecharDialog" />
    </v-navigation-drawer>
  </nav>
</template>

<script>
//import Popup from "./AppPopup.vue";
import LoginForm from "@/components/LoginForm.vue";

export default {
  data: () => ({
    drawer: false,
    links: [
      { icon: "", text: "Página Inicial", route: "/" },
      { icon: "", text: "Eventos", route: "/eventos" },
      { icon: "", text: "Egressos", route: "/egressos" },
      { icon: "", text: "Curso", route: "/curso" },
      { icon: "", text: "Docentes", route: "/docentes" },
      { icon: "", text: "Contato", route: "/sobre" }, //desabilitado por enquanto
    ],
    admins: [
      {email:"", senha:"", nome:""}
    ],
    nomeAdmin: "",
  }),
  components: {
   // Popup,
  LoginForm,
  },

  methods:{
    loginAdministrador(loginAdmin) {
      this.nomeAdmin = loginAdmin.nome;
      this.admins.push(loginAdmin);
    },
    fecharDialog(){
      this.drawer = false;
    }
  }
};
</script>

<style scoped>
.border {
  border-left: 4px solid #0ba518;
}
</style>
<style scoped>
.v-dialog .v-sheet {
  box-shadow: none;
}