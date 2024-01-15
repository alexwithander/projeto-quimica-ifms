<template>
  <v-app>
  <Navbar1 />
    <!-- <Navbar /> -->
    <v-main>
      <router-view>
      </router-view>
    </v-main>
    <!-- <Footer></Footer> -->
  </v-app>
</template>

<script>
//import Navbar from "@/components/AppNavbar";
import Navbar1 from "@/components/AppNavbar-teste";
//import Footer from "@/components/AppFooter";
export default {
  name: "App",

  components: {
   // Navbar,
    //Footer,
    Navbar1
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.v-application--wrap {
  min-height: unset;
}
</style>