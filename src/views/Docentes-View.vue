<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="docente in docentes" :key="docente.nome">
        <v-card class="text-center ma-3">
          <v-responsive class="pt-4">
            <v-row>
              <v-img :width="365" aspect-ratio="1" cover :src="docente.avatar">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular
                      indeterminate
                      color="grey-lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-row>
          </v-responsive>
          <v-card-text>
            <h2>{{ docente.nome }}</h2>
            <h4>{{ docente.titulo }}</h4>
            <div id="lates">
              <a :href="docente.lates" target="_blank">Curriculo Lates</a>
            </div>
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
        nome: "Mariane Ocanha",
        titulo: "Doutora em ...",
        avatar: require("../assets/docentes/IMG_4050-Mariane.png"),
        lates: "",
      },
      {
        nome: "Aline Sousa Herrero",
        titulo: "Doutora em ...",
        avatar: require("../assets/docentes/IMG_4052-Aline.png"),
        lates: "",
      },
      {
        nome: "Gesilane de Oliveira",
        titulo: "Doutora em ...",
        avatar: require("../assets/docentes/IMG_4056-Gesilane.png"),
        lates: "",
      },
      {
        nome: "Manoel Maria Soares de Lima",
        titulo: "Mestre em ...",
        avatar: require("../assets/docentes/IMG_4051-Manoel.png"),
        lates: "",
      },

      {
        nome: "Geziel Rodrigues de Andrade",
        titulo: "Doutor em ...",
        avatar: require("../assets/docentes/IMG_4054-Geziel.png"),
        lates: "",
      },
      {
        nome: "Gleison Nunes Jardim",
        titulo: "Mestre em ...",
        avatar: require("../assets/docentes/IMG_4055-Gleison.png"),
        lates: "",
      },
      {
        nome: "Alexandre Geraldo Viana",
        titulo: "Doutor em ...",
        avatar: require("../assets/docentes/IMG_4053-Alexandre.png"),
        lates: "",
      },

      {
        nome: "Docente 8",
        titulo: "Mestre em ...",
        avatar: require("../assets/avatar.png"),
        lates: "",
      },
    ],
  }),
};
</script>
<style>
#lates {
  font-style: italic;
}
</style>
