<template>
  <div>
    <v-img
      class="mx-auto my-6"
      max-width="228"
      src=""
    ></v-img>
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <form>
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
        <v-btn type="submit" block class="mb-8" color="blue" size="large" variant="tonal">Entrar</v-btn>
      </form>
    </v-card>
  </div>
</template>

<script>

export default {
  data() {
    return {
      visible: false,
      email: "",
      senha: "",
    };
  },
  methods: {
    
  },
  created() {
    
  },
  mounted() {
    
  },
};
</script>
