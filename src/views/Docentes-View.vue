<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg4 v-for="docente in docentes" :key="docente.nome">
        <v-card class="text-center ma-3">
          <v-responsive class="pt-4">
            <v-row>
              <v-img :width="200" aspect-ratio="1" cover :src="docente.avatar">
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
              <a :href="docente.lates" target="_blank">Currículo Lattes</a>
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
        nome: "Alexandre Geraldo Viana",
        titulo: "Doutorado em Ensino de Ciências",
        avatar: require("../assets/docentes/IMG_4053-Alexandre.png"),
        lates: "http://lattes.cnpq.br/7226902523203386",
      },
      {
        nome: "Aline Sousa Herrero",
        titulo: "Mestrado em Química",
        avatar: require("../assets/docentes/IMG_4052-Aline.png"),
        lates: "http://lattes.cnpq.br/7301508092660911",
      },
      {
        nome: "Camila Vargas Garcia Maia",
        titulo: "Doutorado em Química",
        avatar: require("../assets/docentes/IMG_4058-Camila.png"),
        lates: "http://lattes.cnpq.br/5355197780064369",
      },
      {
        nome: "Gesilane de Oliveira",
        titulo: "Doutorado em Educação",
        avatar: require("../assets/docentes/IMG_4056-Gesilane.png"),
        lates: "http://lattes.cnpq.br/9120851200345653",
      },
      {
        nome: "Geziel Rodrigues de Andrade",
        titulo: "Doutorado em Química",
        avatar: require("../assets/docentes/IMG_4054-Geziel.png"),
        lates: "http://lattes.cnpq.br/5219116879161351",
      },
      {
        nome: "Gleison Nunes Jardim",
        titulo: "Mestrado em Física",
        avatar: require("../assets/docentes/IMG_4055-Gleison.png"),
        lates: "http://lattes.cnpq.br/8648892547302446",
      },
      {
        nome: "Hygor Rodrigues de Oliveira",
        titulo: "Doutorado em Programa de pós-graduação em Química",
        avatar: require("../assets/docentes/IMG_4057-Hygor.png"),
        lates: "http://lattes.cnpq.br/9004968584664621",
      },
      {
        nome: "Manoel Maria Soares de Lima",
        titulo: "Mestrado em Química",
        avatar: require("../assets/docentes/IMG_4051-Manoel.png"),
        lates: "http://lattes.cnpq.br/1166392088850465",
      },
      {
        nome: "Mariane Ocanha",
        titulo: "Doutorado em Programa de Pós-graduação em Ensino de Ciências",
        avatar: require("../assets/docentes/IMG_4050-Mariane.png"),
        lates: " http://lattes.cnpq.br/7365065110662688",
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
