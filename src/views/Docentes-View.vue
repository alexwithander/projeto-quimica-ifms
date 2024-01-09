<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="docente in docentes" :key="docente.nome">
        <v-card class="text-center ma-3" >
          <v-responsive class="pt-4">
            <v-avatar size="150">
              <img :src="docente.avatar" />
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <h2>{{ docente.nome }}</h2>
            <h4>{{ docente.titulo }}</h4>
            <div>
            <a :href="docente.linkedin" target="_blank">Linkedin</a>
            </div>
            <div>link 2</div>
            <div>link 3</div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "DocentesView",

  components: {},
  data: () => ({
    docentes: [
      {
        nome: "Docente 1",
        titulo: "Mestre em ...",
        avatar: require("../assets/avatar.png"),
        linkedin: "https://www.linkedin.com/in/alexander-ifmscoxim/",
      },
      {
        nome: "Docente 2",
        titulo: "Doutor em ...",
        avatar: require("../assets/avatar.png"),
        linkedin:"",
      },
      {
        nome: "Docente 3",
        titulo: "Especializado em ...",
        avatar: require("../assets/avatar.png"),
        linkedin:"",
      },
      {
        nome: "Docente 4",
        titulo: "Mestre em ...",
        avatar: require("../assets/avatar.png"),
        linkedin:"",
      },
      {
        nome: "Docente 5",
        titulo: "Mestre em ...",
        avatar: require("../assets/avatar.png"),
        linkedin:"",
      },
      {
        nome: "Docente 6",
        titulo: "Mestre em ...",
        avatar: require("../assets/avatar.png"),
        linkedin:"",
      },
      {
        nome: "Docente 7",
        titulo: "Mestre em ...",
        avatar: require("../assets/avatar.png"),
        linkedin:"",
      },
      {
        nome: "Docente 8",
        titulo: "Mestre em ...",
        avatar: require("../assets/avatar.png"),
        linkedin:"",
      },
    ],
  }),
};
</script>
