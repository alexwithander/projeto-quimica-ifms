<template>
  <v-app>
    <v-app-bar app color="#034811" elevation="0">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="d-flex d-sm-none"
      ></v-app-bar-nav-icon>
      <v-toolbar-items class="d-flex align-center">
        <a href="https://www.ifms.edu.br/">
          <img
            class="img-logo"
            :src="require('../assets/ifms-cx-marca-2015.png')"
            height="40"
          />
        </a>
        <img class="img-logo" :src="require('../assets/icone-quimica.png')" height="40" />
        <a href="https://www.instagram.com/licenciatura_quimica_ifcx/">
          <img class="img-logo" :src="require('../assets/instagram.png')" height="20" />
        </a>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-tabs class="d-none d-sm-flex justify-center" color="white">
        <v-tab
          v-for="(menu, index) in menus"
          :key="`menu_${index}`"
          :value="menu"
          :to="menu.route"
          class="white--text"
        >
          {{ menu.titulo }}
        </v-tab>
        <v-menu offset-y flat text>
          <template v-slot:activator="{ on, attrs }">
            <v-tab class="white--text" text v-bind="attrs" v-on="on">
              CURSO
              <v-icon color="white" >mdi-chevron-down</v-icon>
            </v-tab>
          </template>

          <v-list>
            <v-list-item link :to="{ path: '/curso' }" text>
              <v-list-item-title>História do curso</v-list-item-title>
            </v-list-item>
            <v-list-item link :to="{ path: '/contatos' }" text>
              <v-list-item-title>Contato</v-list-item-title>
            </v-list-item>
            <v-list-item link :to="{ path: '/grade-curricular' }" text>
              <v-list-item-title>Grade Curricular</v-list-item-title>
            </v-list-item>
            <v-list-item
              link
              href="http://pesquisa.in.gov.br/imprensa/jsp/visualiza/index.jsp?data=30/06/2015&jornal=1&pagina=15&totalArquivos=88"
              target="_blank"
              text
            >
              <v-list-item-title>Portaria de Reconhecimento</v-list-item-title>
            </v-list-item>
            <v-list-item
              link
              href="https://www.ifms.edu.br/centrais-de-conteudo/documentos-institucionais/projetos-pedagogicos/projetos-pedagogicos-dos-cursos-de-graduacao/projeto-pedagogico-do-curso-superior-licenciatura-quimica-coxim.pdf"
              target="_blank"
              text
            >
              <v-list-item-title>PPC</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu offset-y flat text>
          <template v-slot:activator="{ on, attrs }">
            <v-tab class="white--text" text v-bind="attrs" v-on="on">
            
            
            Egressos
            <v-icon color="white" >mdi-chevron-down</v-icon>
            </v-tab>
            
          </template>
          <v-list>
            <v-list-item link :to="{ path: '/egressos' }" text>
              <v-list-item-title>Atuação Profissional</v-list-item-title>
            </v-list-item>
            <v-list-item link :to="{ path: '/qtdegressos' }" text>
              <v-list-item-title>Egressos</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <!-- <v-tab>
            <LogoutButton></LogoutButton>
          </v-tab> -->

        <v-tab class="white--text">Painel Administrativo</v-tab>
      </v-tabs>
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
        //{ titulo: "Curso", route: "/curso" },
        { titulo: "Docentes", route: "/docentes" },
        // { titulo: "Egressos", route: "/egressos" },
        //{ titulo: "Contato", route: "/contatos" },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>
<style scoped>
.img-logo {
  display: flex;
  align-items: center;
  margin-right: 10px;
}
</style>
