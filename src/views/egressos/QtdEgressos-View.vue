<template>
  <div class="card-container">
    <v-card flat v-for="(item, index) in items" :key="index" class="card-item">
      <div class="card-title">{{ item.titulo }}</div>
      <div class="card-count">{{ item.count }}+</div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { titulo: "Egressos", qtd: "150", count: 0 },
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

<style scoped>
.card-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;
}

.card-item {
  flex-basis: calc(50% - 40px);
  margin: 20px;
  padding: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.card-item:hover {
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

.card-title {
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.card-count {
  text-align: center;
  font-size: 150px;
  color: #ff6384;
}
</style>
