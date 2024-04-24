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
          <a href="https://www.instagram.com/licenciatura_quimica_ifcx/">
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
          <v-menu offset-y flat text>
            <template v-slot:activator="{ on, attrs }">
              <v-tab text v-bind="attrs" v-on="on">Egressos</v-tab>
            </template>
            <v-list >
              <v-list-item link :to="{ path: '/egressos' }" text>
                <v-list-item-title >ATUAÇÃO PROFISSIONAL</v-list-item-title>
              </v-list-item>
              <v-list-item link :to="{ path: '/qtdegressos' }" text>
                <v-list-item-title>EGRESSOS</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <!-- <v-tab :to="{ path: '/contatos' }">informações do curso</v-tab>

          <v-tab v-if="isUserAuthenticated">
            <LogoutButton></LogoutButton>
          </v-tab>

          <v-tab v-else @click="navigateToAdminPanel"> Painel Administrativo </v-tab> -->
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
      <v-list-item
        link
        v-for="(menu, index) in menus"
        :key="`menu_${index}`"
        :to="menu.route"
      >
        <v-list-item-title>{{ menu.titulo }}</v-list-item-title>
      </v-list-item>
    </v-navigation-drawer>
  </v-app>
</template>
<script>
//import LogoutButton from "@/components/LogoutButton";

export default {
  components: {
    //LogoutButton,
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
        // { titulo: "Egressos", route: "/egressos" },
        //{ titulo: "Contato", route: "/contatos" },
      ],
    };
  },
  methods: {
    navigateToAdminPanel() {
      // Redirecionar para o painel administrativo
      this.$router.push({ path: "/admin" });
    },
  },
  computed: {
    // Verificar se o usuário está autenticado
    isUserAuthenticated() {
      return this.$firebase.auth().currentUser;
    },
  },
};
</script>
