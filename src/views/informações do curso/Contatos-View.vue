<template>
  <v-container>
    <v-row>
      <!-- Primeiro v-card -->
      <v-col cols="12" sm="6">
        <v-card
          class="mx-auto my-8"
          elevation="2"
          max-width="344"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            :src="require('@/assets/docentes/IMG_4054-Geziel.png')"
          >
            <v-card-title>Geziel Rodrigues de Andrade</v-card-title>
          </v-img>

          <v-card-subtitle class="pl-4 pt-4">
            Coordenador do Curso
          </v-card-subtitle>

          <v-card-text class="text--primary pl-4">
            <v-icon class="mr-2">mdi-email</v-icon>
            Email: coliq.cx@ifms.edu.br
          </v-card-text>
        </v-card>
      </v-col>
      
      <!-- Segundo v-card -->
      <v-col cols="12" sm="6">
        <v-card
          class="mx-auto my-8"
          elevation="2"
          max-width="344"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            :src="require('@/assets/docentes/IMG_4051-Manoel.png')"
          >
            <v-card-title>Manoel Maria Soares de Lima</v-card-title>
          </v-img>

          <v-card-subtitle class="pl-4 pt-4">
            Coordenador Substituto do Curso
          </v-card-subtitle>

          <v-card-text class="text--primary pl-4">
            <v-icon class="mr-2">mdi-email</v-icon>
            Email: coliq.cx@ifms.edu.br
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({

  }),
};
</script>
