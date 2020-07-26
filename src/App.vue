<template>
<v-app>
  <v-app-bar app>
    <Header></Header>
  </v-app-bar>
  <v-main>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-main>
  <v-footer app>
    <Footer></Footer>
  </v-footer>
</v-app>
</template>

<script>
  import Header from "./components/Header"
  import Footer from "./components/Footer"

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="scss">

</style>
