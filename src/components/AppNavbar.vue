<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <a href="https://www.ifms.edu.br/">
          <img class="mr-3" :src="require('../assets/ifms-cx-marca-2015.png')" height="50" />
        </a>
        <img class="mr-3" :src="require('../assets/icone-quimica.png')" height="50" />
        <a href="https://www.instagram.com/maratona_oficial_de_quimica/">
          <img class="mr-3" :src="require('../assets/instagram.png')" height="30" />
        </a>
        
      </v-col>

    </v-row>
    <v-toolbar flat class="pc-toolbar">

      <v-container>

        <v-row justify="center">
          <v-spacer></v-spacer>
          <v-toolbar-items class="text-decoration-none">
            <v-btn plain :ripple="false" height="72" min-width="164" text to="/">Página Inicial</v-btn>
            <v-btn plain :ripple="false" height="72" min-width="164" text to="/curso">Curso</v-btn>
            <v-btn plain :ripple="false" height="72" min-width="164" text to="/docentes">Docentes</v-btn>
            <v-btn plain :ripple="false" height="72" min-width="164" text to="/egressos">Egressos</v-btn>
            <v-btn plain :ripple="false" height="72" min-width="164" text to="/eventos">Eventos</v-btn>
            <v-btn plain :ripple="false" height="72" min-width="164" text to="/contatos">Contatos</v-btn>
            <v-btn plain :ripple="false" height="72" min-width="164">
              <LoginForm @login-admin="loginAdministrador" @fechar-dialog="fecharDialog" />
            </v-btn>
          </v-toolbar-items>
        </v-row>
      </v-container>
    </v-toolbar>


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
            <v-list-item-title><router-link to="/curso">Curso</router-link></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><router-link to="/docentes">Docentes</router-link></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><router-link to="/egressos">Egressos</router-link></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><router-link to="/eventos">Eventos</router-link></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><router-link to="/contatos">Contatos</router-link></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <LoginForm @login-admin="loginAdministrador" @fechar-dialog="fecharDialog" />
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
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
      { icon: "", text: "Contato", route: "/contatos" }, //desabilitado por enquanto
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

<style scoped>
a {
  text-decoration: none;
}

@media (min-width: 768px) {
  .pc-toolbar {
    display: flex;
    justify-content: center;
  }
}
</style>
