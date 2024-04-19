<script>
import { Pie, mixins } from "vue-chartjs";

export default {
  extends: Pie,
  mixins: [mixins.reactiveProp],
  data() {
    return {
      datacollection: {
        labels:
         ["Professor de Química", "Já atuou como professor", "Outras áreas"],
         
        datasets: [
          {
            data: [59.1, 6.8, 34.1],
            backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
            hoverBackgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "ATUAÇÃO PROFISSIONAL",
          fontSize: 25,
          fontColor: '#000000',
        
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              var dataset = data.datasets[tooltipItem.datasetIndex];
              var currentValue = dataset.data[tooltipItem.index];
              return data.labels[tooltipItem.index] + ': ' + currentValue + "%";
            },
          },
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.datacollection, this.options);
  },
};
</script>

<style scoped></style>
