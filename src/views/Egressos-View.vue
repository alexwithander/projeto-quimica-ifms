<template>
  <div>
    <v-card flat v-for="(item, index) in items" :key="index">
      <div class="cardcenter">{{ item.titulo }}</div>
      <div class="cardcenter">{{ item.count }}+</div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { titulo: "Egressos", qtd: "70", count: 0 },
        { titulo: "Egressos cadastrados", qtd: "56", count: 0 },
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

<style>
.cardcenter {
  text-align: center;
  font-size: 50px;
}
</style>
