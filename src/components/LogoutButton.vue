<template v-slot:activator="{ on }">
  <v-flex class="mt-4 mb-4">
    <div class="pa-2">
      <v-btn dark block v-on="on" @click="doLogout()"> Sair </v-btn>
    </div>
  </v-flex>
</template>
<script>
export default {
  methods: {
    async doLogout() {
      try {
        await this.$firebase.auth().signOut();
        window.uid = null;
        console.log("Usuário desconectado"); //verifica se o usuário foi desconectado corretamente
      } catch (error) {
        console.log("Erro durante o logout:", error);
      }
    },
  },
};
</script>
