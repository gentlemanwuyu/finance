<template>
  <v-row>
    <v-col cols="12">
      <v-text-field label="天数"></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-menu
        ref="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field label="开始日期" readonly v-bind="attrs" v-on="on"></v-text-field>
        </template>
        <v-date-picker no-title scrollable locale="zh">
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>
    <v-col cols="12">
      <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-1"></v-data-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ContinuedStrong",
  data() {
    return {
      headers: [
        { text: "代码", value: "code" },
        { text: "简写", value: "name" }
      ],
      desserts: [
        { code: "Frozen Yogurt", name: 159 },
        { code: "Ice cream sandwich", name: 237 },
        { code: "Eclair", name: 262 },
        { code: "Cupcake", name: 305 },
        { code: "Gingerbread", name: 356 },
        { code: "Jelly bean", name: 375 },
        { code: "Lollipop", name: 392 },
        { code: "Honeycomb", name: 408 },
        { code: "Donut", name: 452 },
        { code: "KitKat", name: 518 }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss">
</style>
