<template>
  <v-app>
    <Navbar />
    <v-content class="ma-4">
      <router-view></router-view>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navbar from "@/components/AppNavbar";
import Footer from "@/components/AppFooter";
export default {
  name: "App",

  components: {
    Navbar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
