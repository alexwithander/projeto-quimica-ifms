<template>
  <v-container>
    <div>
      <v-row>
        <v-col
          v-for="(foto, index) in fotos"
          :key="index"
          class="d-flex child-flex"
          cols="4"
        >
          <v-img :src="foto" aspect-ratio="1.77" class="bg-grey-lighten-2" contain>
            <template v-slot:placeholder>
              <v-row align="center" class="fill-height ma-0" justify="center">
                <v-progress-circular
                  color="grey-lighten-5"
                  indeterminate
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "eventosApp",
  components: {},
  data() {
    return {
      fotos: [
        require("../src/assets/eventos/IMG_2418.JPG"),
        // Adicione outras imagens aqui, se necessário
      ],
    };
  },
};
</script>
