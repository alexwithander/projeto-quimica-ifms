<template>
  <v-card class="pa-md-10 mx-lg-auto" color="white" width="1500px">
    <v-img src="https://picsum.photos/512/128?image=660" height="128" cover></v-img>
    <v-card-title class="text-h6 text-md-h5 text-lg-h4">Eventos</v-card-title>
    <v-card-text>
      During my last trip to South America, I spent 2 weeks traveling through Patagonia in Chile.
    </v-card-text>
    <template v-slot:actions>
              <v-btn color="primary" variant="text">View More</v-btn>
              <v-btn color="primary" variant="text">See in Map</v-btn>
            </template>
  </v-card>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

