<template>
  <v-app>
      <v-app-bar app color="white" light elevation="0" elevation-on-scroll>
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          class="d-flex d-sm-none"
        ></v-app-bar-nav-icon>
        <v-row>
          <v-col cols="12">
            <a href="https://www.ifms.edu.br/">
              <img
                class="mr-3"
                :src="require('../assets/ifms-cx-marca-2015.png')"
                height="40"
              />
            </a>
            <img class="mr-3" :src="require('../assets/icone-quimica.png')" height="40" />
            <a href="https://www.instagram.com/maratona_oficial_de_quimica/">
              <img class="mr-3" :src="require('../assets/instagram.png')" height="20" />
            </a>
          </v-col>
        </v-row>
        <v-card flat>
          <v-tabs class="d-none d-sm-flex" color="deep-purple-accent-4" align-tabs="end">
          <v-tab
            v-for="(menu, index) in menus"
            :key="index"
            :value="menu"
            :to="menu.route"
            
          >
            {{ menu.titulo }}
          </v-tab>
          <v-tab class="d-none d-sm-flex" >
          <LoginForm @login-admin="loginAdministrador" @fechar-dialog="fecharDialog" />
          </v-tab>
        </v-tabs>
        </v-card>
        <!-- <v-list class="d-flex d-sm-flex align-center" flat>
        <v-list-item color="primary" :ripple="false" link v-for="(menu, index) in menus" :key="index" :to="menu.route" class="d-none d-sm-flex">
          <v-list-item-title>{{ menu.titulo }}</v-list-item-title>
        </v-list-item>
        <v-dialog v-model="dialogVisible" max-width="500">
          <template v-slot:activator="{ on }">
            <v-list-item :ripple="false" class="d-none d-sm-flex" v-bind="on" text flat>
            <LoginForm @login-admin="loginAdministrador" @fechar-dialog="fecharDialog" />
            </v-list-item>
          </template>
        </v-dialog>
      </v-list> -->
      </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      mobile-break-point="768"
      disable-resize-watcher
    >
      <v-list-item><v-list-item-title>Menu</v-list-item-title></v-list-item>
      <v-divider></v-divider>
      <v-list-item link v-for="(menu, index) in menus" :key="index" :to="menu.route">
        <v-list-item-title>{{ menu.titulo }}</v-list-item-title>
      </v-list-item>
      <br />
      <v-btn text>
        <LoginForm @login-admin="loginAdministrador" @fechar-dialog="fecharDialog" />
      </v-btn>
    </v-navigation-drawer>
  </v-app>
</template>
<script>
import LoginForm from "@/components/LoginForm";
export default {
  components: {
    LoginForm,
  },
  data() {
    return {
      drawer: false,
      tab: null,
      menus: [
        { titulo: "Página Inicial", route: "/" },
        { titulo: "Eventos", route: "/eventos" },
        { titulo: "Curso", route: "/curso" },
        { titulo: "Docentes", route: "/docentes" },
        { titulo: "Egressos", route: "/egressos" },
        { titulo: "Contato", route: "/contatos" },
      ],
      dialogVisible: false,
    };
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
    },
    loginAdministrador() {
      //
    },
    fecharDialog() {
      this.dialogVisible = false;
    },
  },
};
</script>
