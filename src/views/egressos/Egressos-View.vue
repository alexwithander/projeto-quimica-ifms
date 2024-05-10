<template>
  <div>
    <GraficoEgressos/>
    <QdtEgressos/>
  </div>
</template>
<script>
import QdtEgressos from "../egressos/QtdEgressos-View.vue"
import GraficoEgressos from "../egressos/GraficoEgressos-View.vue"

export default {
  components: {
    QdtEgressos,
    GraficoEgressos,
  },
}
</script>




