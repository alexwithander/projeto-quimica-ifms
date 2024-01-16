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
            <div class="text-subtitle-1 text-medium-emphasis">Nome</div>
            <v-text-field
              density="compact"
              placeholder="Digite seu nome"
              prepend-inner-icon="mdi-account-outline"
              variant="outlined"
              v-model="nome"
            ></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis">Email</div>

            <v-text-field
              density="compact"
              placeholder="Digite seu email"
              
              variant="outlined"
              v-model="email"
            ></v-text-field>

            <div
              class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
            >
              Senha<a
                class="text-caption text-decoration-none text-blue"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
                Esqueceu a senha de login?</a
              >
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
                será temporariamente bloqueada por três horas. Se precisar fazer l ogin
                agora, você também pode clicar em "Esqueceu a senha de login?" abaixo para
                redefinir a senha de login.
              </v-card-text>
            </v-card>

            <v-btn block class="mb-8" color="blue" size="large" variant="tonal" @click="conectar" >
              Conectar
            </v-btn>
            <v-alert v-if="erro" dense outlined type="error" class="mt-2">
            Preencha todos os campos.
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
    nome: "",
    erro: false,
  }),
  methods: {
    conectar() {
      if (this.email && this.senha && this.nome) {
        this.erro = false;
        const loginAdmin = {
            email: this.email,
            senha: this.senha,
            nome: this.nome
        }
        this.$emit("login-admin", loginAdmin);
        this.$emit("fechar-dialog");
        }else{
            this.erro = true;
        }
    },
  },
};
</script>
