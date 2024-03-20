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

  mounted (){
    console.log(this.$firebase)
    this.$firebase.auth().onAuthStateChanged(user => {
      window.uid = user ? user.uid : null
      this.isLogged = !!user

      this.$router.push({ name: window.uid ? 'home' : 'login' })

    })
  }
};
</script>

<style>
.v-application--wrap {
  min-height: unset;
}
</style>


