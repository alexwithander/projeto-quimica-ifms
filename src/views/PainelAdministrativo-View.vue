<template>
  <div>
    <v-img
      class="mx-auto my-6"
      max-width="228"
      src=""
    ></v-img>
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <form @submit.prevent="doLogin">
        <div class="text-subtitle-1 text-medium-emphasis">Email</div>
        <v-text-field
        required
          density="compact"
          placeholder="Digite seu email"
          variant="outlined"
          v-model="email"
        ></v-text-field>

        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          Senha
          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Esqueceu a senha?
          </a>
        </div>

        <v-text-field
        required
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Digite sua senha"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          v-model="senha"
          @click:append-inner="visible = !visible"
        ></v-text-field>
        <v-btn type="submit" block class="mb-8" color="blue" size="large" variant="tonal"
          >Entrar</v-btn
        >
      </form>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    visible: false,
    email: "",
    senha: "",
  }),
  methods: {
    async doLogin() {
      const { email, senha } = this;
      try {
        const res = await this.$firebase.auth().signInWithEmailAndPassword(email, senha);
        window.uid = res.user.uid;
        if (this.$route.name !== "home") {
          this.$router.push({ name: "home" });
        }
        this.dialog = false;
        console.log("Usuário logado:", res.user.email);
        console.log("UID do usuário:", res.user.uid); // verificar o UID do usuário
      } catch (error) {
        console.log("Erro durante o login:", error);
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    if (!window.uid) {
      next();
    } else {
      next((vm) => {
        if (vm.$route.name !== "home") {
          vm.$router.push({ name: "home" });
        }
      });
    }
  },
  created() {
    this.$firebase.auth().onAuthStateChanged((user) => {
      this.currentUser = user;
      if (user) {
        console.log("Usuário conectado:", user.email);
        console.log("UID do usuário conectado: ", user.uid);
      }
    });
  },
};
</script>
