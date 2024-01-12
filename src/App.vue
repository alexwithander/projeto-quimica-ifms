<template>
  <v-app>
    <Navbar />
    <v-main class="ma-4">
      <router-view>
      </router-view>
    </v-main>
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
