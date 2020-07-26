<template>  
  <v-app-bar app dense dark color="#1867c0">
    <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <router-link v-for="(menu, k) in menus" :key="k" :to="menu.url">
            <v-list-item>
              <v-list-item-title>{{ menu.title }}</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list>
      </v-menu>
    <v-toolbar-title>在路上</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
    export default {
      name: "Header",
      data() {
        return {
          menus: [
            {title: '持续强势', url: '/kline/continued-strong'},
          ]
        };
      },
      methods: {

      }
    }
</script>

<style lang="scss">

</style>
