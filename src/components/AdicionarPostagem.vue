<template>
  <v-card>
    <v-toolbar color="blue-grey" dark flat>
      <v-toolbar-title>Enviar uma postagem</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-text-field
        label="Titulo"
        variant="filled"
      ></v-text-field>

      <v-textarea
        label="Texto"
        model-value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"
        variant="filled"
      ></v-textarea>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="success"> Publicar </v-btn>
    </v-card-actions>
  </v-card>
</template>
