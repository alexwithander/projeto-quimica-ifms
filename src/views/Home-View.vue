<template>
  <v-container>
    <v-row>
      <v-col>
        <v-carousel cycle height="400" hide-delimiter-background>
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet height="100%">
              <div class="d-flex fill-height justify-center aligh-center">
                <v-img :src="slide"></v-img>
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row v-if="userLoggedIn" >
      <v-col>
        <Popup @novo-evento="adicionarNovoEvento" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
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
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Local/Sala</div>
              <div>{{ evento.local }}</div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Popup from "@/components/AppPopup.vue";

export default {
  name: "eventosApp",
  components: {
    Popup,
  },
  data() {
    return {
      eventos: [
        {
          evento: "Congresso brasileiro de quimica",
          organizador: "Organizador A",
          data: "26/08/2024",
          local: "Campo Grande - MS",
        },
        {
          evento: "Maratona de quimica",
          organizador: "Turma X",
          data: "15/09/2024",
          local: "IFMS Campus Coxim",
        },
        {
          evento: "Palestra: A quimica ensinou-me a olhar o mundo",
          organizador: "Palestrante X",
          data: "06/03/2025",
          local: "Auditório",
        },
        {
          evento: "XII Semana da quimica",
          organizador: "Organizador C",
          data: "22/07/2025",
          local: "IFMS Campus Coxim",
        },
      ],
      slides: [
        require("../assets/FOTO_1.jpg"),
        require("../assets/FOTO_2.jpg"),
        // require("../assets/imagem3.png"),
        // require("../assets/imagem4.png"),
        // require("../assets/imagem5.png"),
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.eventos.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
    adicionarNovoEvento(novoEvento) {
      this.eventos.push(novoEvento);
    },
  },
  computed: {
    userLoggedIn() {
      return !!window.uid;
    }
  }
};
</script>
