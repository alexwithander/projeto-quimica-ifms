<template>
  <v-container>
    <v-row justify="center">
      <v-col
        v-for="docente in docentes"
        :key="docente.nome"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card class="mx-auto my-8" elevation="2" max-width="344" color="grey lighten-3">
          <v-img
            class="mx-auto rounded-circle"
            width="200"
            aspect-ratio="1"
            cover
            :src="docente.avatar"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>

          <v-card-title class="headline d-flex justify-center">{{ docente.nome }}</v-card-title>
          <v-card-subtitle class="pl-4 pt-4 text-center">{{ docente.titulo }}</v-card-subtitle>        
          <v-card-text class="text-center">
              <a class="lates" :href="docente.lates" target="_blank">Currículo Lattes</a>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DocentesView",

  components: {},
  data: () => ({
    docentes: [
      {
        nome: "Alexandre Geraldo",
        titulo: "D.r em Ensino de Ciências",
        avatar: require("../assets/docentes/IMG_4053-Alexandre.png"),
        lates: "http://lattes.cnpq.br/7226902523203386",
      },
      {
        nome: "Aline Sousa",
        titulo: "M.e em Química",
        avatar: require("../assets/docentes/IMG_4052-Aline.png"),
        lates: "http://lattes.cnpq.br/7301508092660911",
      },
      {
        nome: "Camila Vargas",
        titulo: "D.ra em Química",
        avatar: require("../assets/docentes/IMG_4058-Camila.png"),
        lates: "http://lattes.cnpq.br/5355197780064369",
      },
      {
        nome: "Gesilane de Oliveira",
        titulo: "D.ra em Educação",
        avatar: require("../assets/docentes/IMG_4056-Gesilane.png"),
        lates: "http://lattes.cnpq.br/9120851200345653",
      },
      {
        nome: "Geziel Rodrigues",
        titulo: "D.r em Química",
        avatar: require("../assets/docentes/IMG_4054-Geziel.png"),
        lates: "http://lattes.cnpq.br/5219116879161351",
      },
      {
        nome: "Gleison Nunes",
        titulo: "M.e em Física",
        avatar: require("../assets/docentes/IMG_4055-Gleison.png"),
        lates: "http://lattes.cnpq.br/8648892547302446",
      },
      {
        nome: "Hygor Rodrigues",
        titulo: "D.r em Programa de pós-graduação em Química",
        avatar: require("../assets/docentes/IMG_4057-Hygor.png"),
        lates: "http://lattes.cnpq.br/9004968584664621",
      },
      {
        nome: "Manoel Maria Soares",
        titulo: "M.e em Química",
        avatar: require("../assets/docentes/IMG_4051-Manoel.png"),
        lates: "http://lattes.cnpq.br/1166392088850465",
      },
      {
        nome: "Mariane Ocanha",
        titulo: "D.ra em Programa de Pós-graduação em Ensino de Ciências",
        avatar: require("../assets/docentes/IMG_4050-Mariane.png"),
        lates: " http://lattes.cnpq.br/7365065110662688",
      },
    ],
  }),
};
</script>
<style scoped>
.lates {
  font-style: italic;
}
</style>
