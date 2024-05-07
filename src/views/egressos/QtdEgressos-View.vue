<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4" v-for="(item, index) in items" :key="index">
        <v-card
        
        class="mx-auto pa-5"
    max-width="750"
          align="center"
          d-flex
        >
          <v-card-title class="headline d-flex justify-center">{{ item.titulo }}</v-card-title>
          <v-card-subtitle class="display-2">{{ item.count }}+</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  watch: {
  },
  data() {
    return {
      items: [
        { titulo: "Egressos", qtd: "53", count: 0 },
        { titulo: "Alunos Matriculados", qtd: "69", count: 0 },
      ],
    };
  },
  methods: {
    incremento(item) {
      let interval = setInterval(() => {
        if (item.count < parseInt(item.qtd.replace("+", ""))) {
          item.count++;
        } else {
          clearInterval(interval);
        }
      }, 50);
    },
  },
  mounted() {
    this.items.forEach(this.incremento);
  },
};
</script>
