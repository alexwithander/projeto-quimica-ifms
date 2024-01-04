<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col
        v-for="(variant, i) in variants"
        :key="i"
        cols="auto"
      >
        <v-card
          class="mx-auto ma-3 text-xs-center"
          max-width="344"
          :variant="variant"
          flat
        >
          <v-card-item>
            <div>
              <div class="text-overline mb-1 text-center">
                {{ variant }}
              </div>

              <div class="text-center text-h6 mb-1">
                Lorem Ipsum
              </div>
              <div class="text-caption text-center" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn>
              Ver mais
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
  const variants = ['XII Semana da quimica', 'Palestra: Historia da quimica', 'Maratona de quimica', 'Congresso brasileiro de quimica',
  'Visita Técnica: Campo Grande', 'Congresso Regional de Quimica', 'Encontro de Egressos', 'Semana de Ciênci e Tecnologia'
  ]
</script>