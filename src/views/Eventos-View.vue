<template>
  <div>
    <v-card class="mx-auto">
    <v-layout>
      <v-main>
        <v-container fluid>
          <v-card
            border
            class="mb-2"
          >
            <v-img src="https://picsum.photos/512/128?image=660" height="128" cover></v-img>

            <v-card-text>
              During my last trip to South America, I spent 2 weeks traveling through Patagonia in Chile.
            </v-card-text>

            <template v-slot:actions>
              <v-btn color="primary" variant="text">View More</v-btn>

              <v-btn color="primary" variant="text">See in Map</v-btn>
            </template>
          </v-card>

          <v-card
            border
            density="comfortable"
          >
            <v-img src="https://picsum.photos/512/128?random" height="128" cover></v-img>

            <v-card-text>
              During my last trip to Florida, I spent 2 weeks traveling through the Everglades.
            </v-card-text>

            <template v-slot:actions>
              <v-btn color="primary" variant="text">View More</v-btn>

              <v-btn color="primary" variant="text">See in Map</v-btn>
            </template>
          </v-card>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
  </div>
</template>

