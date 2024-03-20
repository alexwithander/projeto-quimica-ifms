<template>
  <button @click="logoutMethod()">
    <i></i>
    Sair
  </button>
</template>

<script>
export default {
  methods: {
    async logoutMethod () {
      try {
        await this.$firebase.auth().signOut();
        console.log("Logout realizado");
        this.$emit('logout');
      } catch (error) {
        console.error("Erro ao fazer logout:", error);
      }
    }
  }
}
</script>
