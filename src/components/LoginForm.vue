<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="800px">
      <template v-slot:activator="{ on }">
        <v-flex class="mt-4 mb-4">
          <div class="pa-2">
            <v-btn dark block v-on="on">Painel administrativo</v-btn>
          </div>
        </v-flex>
      </template>
      <v-card>
        <div>
          <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
            <div class="text-subtitle-1 text-medium-emphasis">Administrador</div>

            <v-text-field
              density="compact"
              placeholder="Digite seu email"
              prepend-inner-icon="mdi-email-outline"
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
                Esqueceu a senha de login?
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

            <v-card class="mb-12" color="surface-variant" variant="tonal">
              <v-card-text class="text-medium-emphasis text-caption">
                Aviso: Após 3 tentativas consecutivas de login malsucedidas, sua conta
                será temporariamente bloqueada por três horas. Se precisar fazer login
                agora, você também pode clicar em "Esqueceu a senha de login?" abaixo para
                redefinir a senha de login.
              </v-card-text>
            </v-card>

            <v-btn block class="mb-8" color="blue" size="large" variant="tonal" @click="login">
              Conectar
            </v-btn>

            <!-- Resposta de login visualmente -->
            <v-alert
              v-if="erroLogin"
              :value="true"
              type="error"
            >
              Credenciais inválidas. Tente novamente.
            </v-alert>

            <v-alert
              v-if="realizadoLogin"
              :value="true"
              type="success"
            >
              Login bem-sucedido! Redirecionando...
            </v-alert>
          </v-card>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    visible: false,
    email: "",
    senha: "",
    erroLogin: false,
    realizadoLogin: false,
  }),
  methods: {
    login() {
      // Simulação de autenticação no frontend (login estático)
      if (this.email === "exemplo@exemplo.com" && this.senha === "senha123") {
        this.erroLogin = false;
        this.realizadoLogin = true;

        setTimeout(() => {
          this.dialog = false;
          this.realizadoLogin = false;

          // Redirecionamento para uma view exemplo
          this.$router.push({ name: 'sobre' }); // página "sobre" só como exemplo
        }, 2000);
      } else {
        this.erroLogin = true;
        this.realizadoLogin = false;
      }
    },
  },
};
</script>
