<template>
  <v-container>
    <v-toolbar flat class="mainHeader">
      <v-toolbar-title>Licenciatura em Quimica</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text><router-link to="/">Página Inicial</router-link></v-btn>
        <v-btn text><router-link to="/eventos">Eventos</router-link></v-btn>
        <v-btn text><router-link to="/egressos">Egressos</router-link></v-btn>
        <v-btn text><router-link to="/curso">Curso</router-link></v-btn>
        <v-btn text><router-link to="/docentes">Docentes</router-link></v-btn>
        <v-btn text><router-link to="/contato">Contato</router-link></v-btn>
        <LoginForm @login-admin="loginAdministrador" @fechar-dialog="fecharDialog" />
      </v-toolbar-items>
      <div class="hidden-sm-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list class="responsiveMenu">
            <v-list-item>
              <v-list-item-title><router-link to="/">Página Inicial</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><router-link to="/eventos">Eventos</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><router-link to="/egressos">Egressos</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><router-link to="/curso">Curso</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><router-link to="/docentes">Docentes</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><router-link to="/contato">Contato</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <LoginForm @login-admin="loginAdministrador" @fechar-dialog="fecharDialog" />
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>
  </v-container>
</template>

<script>
//import Popup from "./AppPopup.vue";
import LoginForm from "@/components/LoginForm.vue";

export default {
  data: () => ({
    name: "Header",
    drawer: false,
    /* links: [
      { icon: "", text: "Página Inicial", route: "/" },
      { icon: "", text: "Eventos", route: "/eventos" },
      { icon: "", text: "Egressos", route: "/egressos" },
      { icon: "", text: "Curso", route: "/curso" },
      { icon: "", text: "Docentes", route: "/docentes" },
      { icon: "", text: "Contato", route: "/contato" }, //desabilitado por enquanto
    ], */
    admins: [{ email: "", senha: "", nome: "" }],
  }),
  components: {
    // Popup,
    LoginForm,
  },

  methods: {
    loginAdministrador(loginAdmin) {
      this.nomeAdmin = loginAdmin.nome;
      this.admins.push(loginAdmin);
    },
    fecharDialog() {
      this.drawer = false;
    },
  },
};
</script>