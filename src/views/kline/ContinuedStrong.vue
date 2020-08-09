<template>
  <v-row>
    <v-col cols="12">
      <v-chip class="ma-1" :color="strongBtnColor" @click="status = 'strong'; strongBtnColor = 'error'; weakBtnColor = '';">持续强势</v-chip>
      <v-chip class="ma-1" :color="weakBtnColor" @click="status = 'weak'; strongBtnColor = ''; weakBtnColor = 'primary';">持续弱势</v-chip>
    </v-col>
    <v-col cols="12">
      <v-text-field label="天数" v-model="searchParams.days"></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-menu
        ref="dateMenu"
        v-model="dateMenu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        :return-value.sync="searchParams.start_date"
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            label="开始日期"
            readonly
            v-on="on"
            v-model="searchParams.start_date"
          ></v-text-field>
        </template>
        <v-date-picker no-title scrollable v-model="searchParams.start_date">
          <v-spacer></v-spacer>
          <v-btn text color="error" @click="dateMenu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dateMenu.save(searchParams.start_date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>
    <v-col cols="12">
      <v-btn color="primary" @click="loadData();">搜索</v-btn>
    </v-col>
    <v-col cols="12">
      <v-data-table
        :headers="headers"
        :items="stocks"
        :items-per-page="20"
        class="elevation-1"
        disable-sort
        :loading="loading"
        :loading-text="loadingText"
        :footer-props="{
          'items-per-page-options': [20, 40, 60, 100, -1],
          'items-per-page-text': '每页条数'
        }"
      >
        <template v-slot:item.name="{ item }">
          <a :href="`https://xueqiu.com/S/${item.code}`" target="_blank">{{ item.name }}</a>
        </template>
      </v-data-table>
    </v-col>
    <v-snackbar v-model="snackbar">{{ snackbarText }}</v-snackbar>
  </v-row>
</template>

<script>
export default {
  name: "ContinuedStrong",
  data() {
    return {
      searchParams: {
        days: null,
        start_date: null
      },
      headers: [
        { text: "代码", value: "ts_code" },
        { text: "简写", value: "name" }
      ],
      stocks: [],
      loading: true,
      loadingText: "数据加载中...",
      snackbar: false,
      snackbarText: "",
      dateMenu: false,
      status: 'strong',
      strongBtnColor:'error',
      weakBtnColor:'',
    };
  },
  methods: {
    // 加载数据
    loadData() {
      let that = this;
      this.loading = true;
      this.stocks = [];
      this.$axios
        .get("/stock/get-continued-strong-list", {
          params: Object.assign({}, this.searchParams, {status: this.status})
        })
        .then(function(res) {
          that.loading = false;
          let response = res.data;
          if (0 == response.code) {
            that.stocks = that.processData(response.data);
          } else {
            that.snackbarText = "数据加载错误";
            that.snackbar = true;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    processData(data) {
      data.forEach(function (val) {
        val.code = val.ts_code.split('.').reverse().join('');
      });
      return data;
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>

<style lang="scss">
</style>
