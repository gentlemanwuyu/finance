<template>  
  <v-footer app dark color="#1867c0">
    <v-col class="text-center" cols="12">
      Copyright © {{ yearText }} <a href="https://www.woozee.com.cn/"><strong>Woozee</strong></a>
    </v-col>
  </v-footer>
</template>

<script>
    export default {
      name: "Footer",
      data() {
        return {
            yearText: '2019~2020'
        };
      },
      methods: {

      },
      mounted () {
        let startYear = 2020
        let dateObj = new Date()
        let thisYear = dateObj.getFullYear()
        if (startYear == thisYear) {
          this.yearText = startYear
        }else {
          this.yearText = startYear + '~' + thisYear
        }
      }
    }
</script>

<style lang="scss" scope>
  .v-footer {
    a {
      color: #ffffff!important;
    }
  }
</style>
