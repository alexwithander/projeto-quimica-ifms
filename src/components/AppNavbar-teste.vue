<template>
  <v-app>
    <v-app-bar app color="white" light elevation="0">
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
            :key="`menu_${index}`"
            :value="menu"
            :to="menu.route"
          >
            {{ menu.titulo }}
          </v-tab>
          <v-tab v-if="userLoggedIn">
            <LogoutButton></LogoutButton>
          </v-tab>
          <v-tab
          v-else 
        v-for="(admin, index) in admin"
        :key="`admin_${index}`"
        :value="admin"
        :to="admin.route"
      >
        Painel Administrativo
      </v-tab>
        </v-tabs>
      </v-card>
      
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      mobile-breakpoint="768"
      disable-resize-watcher
    >
      <v-list-item><v-list-item-title>Menu</v-list-item-title></v-list-item>
      <v-divider></v-divider>
      <v-list-item link v-for="(menu, index) in menus" :key="`menu_${index}`" :to="menu.route">
        <v-list-item-title>{{ menu.titulo }}</v-list-item-title>
      </v-list-item>
      <v-list-item link v-for="(admin, index) in admin" :key="`admin_${index}`" :to="admin.route">
        <v-list-item-title>{{ admin.titulo }}</v-list-item-title>
      </v-list-item>

      <br />
    </v-navigation-drawer>
  </v-app>
</template>
<script>

import LogoutButton from "@/components/LogoutButton";

export default {
  components: {
   LogoutButton,
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
      admin: [{ titulo: "Painel Administrativo", route: "/admin" }],
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
  computed: {
    userLoggedIn() {
      return !!window.uid;
    },
  },
};
</script>
