<template>
    <div>
        <v-card>
          <v-card-title>Total de Egressos</v-card-title>
          <v-card-text>Total de Egressos: {{ totalEgressos }}</v-card-text>
        </v-card>
  
    </div>
    
  </template>


  
  
  <script>
  export default {
    data() {
      return {
        totalEgressos: 150,
      };
    },
  };
  </script>
  