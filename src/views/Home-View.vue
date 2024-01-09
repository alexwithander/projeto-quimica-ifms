<template>
  <div>
    <v-card>
      <v-img src="../assets/portal.png" cover></v-img>
      <v-card-text class="text-justify">
        O profissional formado no curso superior de Licenciatura em Química está apto a
        trabalhar no processo de ensino e aprendizagem, identificando problemas, propondo
        soluções e ajudando os estudantes na construção próprio conhecimento. O químico
        pode atuar na educação básica, em todas as modalidades de ensino, lecionando e
        desenvolvendo pesquisas como forma de produzir conhecimento relevante para área.
      </v-card-text>
    </v-card>

    <br />
    <Popup @novo-evento="adicionarNovoEvento" />
    <div class="eventos">
      <v-container>
        <v-layout row wrap class="mb-4">
          <v-tooltip>
            <template v-slot:activator="{ on }">
              <v-btn
                small
                color="green"
                v-on:click="sortBy('data')"
                class="mr-2"
                dark
                v-on="on"
              >
                <span class="caption text-lowercase">Filtrar por data</span>
              </v-btn>
            </template>
          </v-tooltip>
        </v-layout>
        <v-card flat v-for="evento in eventos" :key="evento.evento" class="mb-1">
          <v-layout row wrap class="pa-3">
            <v-flex xs12 md6>
              <div class="caption grey--text">Evento</div>
              <div>{{ evento.evento }}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Organizador</div>
              <div>{{ evento.organizador }}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Data</div>
              <div>{{ evento.data }}</div>
            </v-flex>
            </v-layout>
        </v-card>
      </v-container>
    </div>

    <div>
      <v-container>
        <v-carousel height="400" hide-delimiters progress="primary">
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet height="100%">
              <div class="d-flex fill-height justify-center align-center">
                <div class="text-h2">{{ slide }}</div>
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </div>
  </div>
</template>

<script>
import Popup from "@/components/AppPopup.vue";

export default {
  name: "eventosApp",
  components: {
    Popup,
  },
  data: () => ({
    eventos: [
      {
        evento: "Congresso brasileiro de quimica",
        organizador: "Organizador A",
        data: "06/08/2025",
      },
      {
        evento: "Maratona de quimica",
        organizador: "Turma X",
        data: "05/08/2025",
      },
      {
        evento: "Palestra: A quimica ensinou-me a olhar o mundo",
        organizador: "Palestrante X",
        data: "22/09/2025",
      },
      {
        evento: "XII Semana da quimica",
        organizador: "Organizador C",
        data: "22/07/2025",
      },
    ],
    slides: [
          'imagem 1',
          'imagem 2',
          'imagem 3',
          'imagem 4',
          'imagem 5',
        ],
  }),
  methods: {
    sortBy(prop) {
      this.eventos.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
    adicionarNovoEvento(novoEvento) {
      this.eventos.push(novoEvento);
    },
  },
};
</script>
<style>

</style>
