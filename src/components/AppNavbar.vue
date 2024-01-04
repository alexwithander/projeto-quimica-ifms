<template>
  <nav>
    <v-app-bar color="#1B5E20" dark app>
      <v-app-bar-nav-icon v-on:click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer>
        <v-toolbar-title class="text-uppercase">
        <span>Licenciatura em Quimica</span>
      </v-toolbar-title>
      </v-spacer>
      <!-- <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon left ></v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list flat>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
            active-class="border"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" dark app color="#1B5E20">
      <v-layout column align-center>
        <v-flex class="mt-5 text-center">
          <v-avatar size="50">
            <img src="../assets/avatar.png" alt=""/>
          </v-avatar>
          <p class="white--text subheading mt-1 text-center">Nome do usuário</p>
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
          <LoginForm @login-admin="loginAdministrador" />
    </v-navigation-drawer>
  </nav>
</template>

<script>
//import Popup from "./AppPopup.vue";
import LoginForm from "@/components/LoginForm.vue";

export default {
  data: () => ({
    drawer: false,
   // mostrarLoginForm: false,
    links: [
      { icon: "", text: "Página Inicial", route: "/" },
      { icon: "", text: "Eventos", route: "/eventos" },
      { icon: "", text: "Egressos", route: "/egressos" },
      { icon: "", text: "Curso", route: "/curso" },
      { icon: "", text: "Docentes", route: "/docentes" },
      { icon: "", text: "Sobre", route: "" }, //desabilitado por enquanto
    ],
    admins: [
      {email:"", senha:""}
    ]
  }),
  components: {
   // Popup,
  LoginForm,
  },

  methods:{
    loginAdministrador(loginAdmin) {
      this.admins.push(loginAdmin);
    },
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