<template>
  <v-container>
    <v-row justify="center" >
      <v-col v-for="(variant, i) in variants" :key="i" cols="auto">
        <v-card
          class="mx-auto ma-3 text-xs-center"
          max-width="344"
          :variant="variant"
          flat
        >
          <v-img src="../assets/icone-quimica.png" height="150px" cover></v-img>

          <v-card-title >
            {{ variant }}
          </v-card-title>

          <v-card-subtitle>
            Lorem Ipsum
          </v-card-subtitle>

          <v-card-actions>
            <v-btn text plain>Ver mais</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

export default {
  data: () => ({
    variants: [
      "XII Semana da quimica",
      "Palestra: História da quimica",
      "Maratona de quimica",
      "Congresso brasileiro de quimica",
      "Visita Técnica: Campo Grande",
      "Congresso Regional de Quimica",
      "Encontro de Egressos",
      "Semana de Ciência e Tecnologia",
    ],
  }),
  methods: {
    
  
  },
  computed: {
  
},
mounted() {
   
  }
};
</script>
