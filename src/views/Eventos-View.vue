<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col v-for="(variant, i) in variants" :key="i" cols="auto">
        <v-card
          class="mx-auto ma-3 text-xs-center"
          max-width="344"
          :variant="variant"
          flat
        >
          <v-img src="../assets/icone-quimica.png" height="150px" cover></v-img>

          <v-card-title class="text-center text-h6 mb-1">
            {{ variant }}
          </v-card-title>

          <v-card-subtitle class="text-caption text-center">
            Lorem Ipsum
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text"> Ver mais </v-btn>
            <v-spacer></v-spacer>

            <v-btn icon @click="alternarCard(i)" class="dark">
              <v-icon>{{
                expandirCards[i] ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="expandirCards[i]">
              <v-divider></v-divider>

              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    expandirCards: Array.from({ length: 8 }, () => false),
    variants: [
      "XII Semana da quimica",
      "Palestra: Historia da quimica",
      "Maratona de quimica",
      "Congresso brasileiro de quimica",
      "Visita Técnica: Campo Grande",
      "Congresso Regional de Quimica",
      "Encontro de Egressos",
      "Semana de Ciência e Tecnologia",
    ],
  }),
  methods: {
    alternarCard(index) {
      this.$set(this.expandirCards, index, !this.expandirCards[index]);
    },
  },
};
</script>
