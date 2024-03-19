<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="450px">
      <template v-slot:activator="{ on }">
        <v-flex class="mt-4 mb-4">
          <div class="pa-2">
            <v-btn dark block v-on="on"><v-icon>mdi-login</v-icon></v-btn>
          </div>
        </v-flex>
      </template>
      <v-card>
        <div>
          <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448">
            <form @submit.prevent="doLogin">
              <div class="text-subtitle-1 text-medium-emphasis">Email</div>
              <v-text-field
                density="compact"
                placeholder="Digite seu email"
                variant="outlined"
                v-model="email"
              ></v-text-field>

              <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                Senha
                <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
                  Esqueceu a senha?
                </a>
              </div>

              <v-text-field
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                density="compact"
                placeholder="Digite sua senha"
                prepend-inner-icon="mdi-lock-outline"
                variant="outlined"
                v-model="senha"
                @click:append-inner="visible = !visible"
              ></v-text-field>
              <v-btn type="submit" block class="mb-8" color="blue" size="large" variant="tonal">Entrar</v-btn>
            </form>
          </v-card>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'LoginForm',
  data: () => ({
    dialog: false,
    visible: false,
    email: "",
    senha: "",
    nome: "",
  }),
  methods: {
    async doLogin() {
      const { email, senha } = this;
      try {
        const res = await this.$firebase.auth().signInWithEmailAndPassword(email, senha);
        console.log("Usuário logado:", res.user.email);
      } catch (error) {
        console.log('Erro durante o login:', error);
      }
    }
  }
};
</script>
