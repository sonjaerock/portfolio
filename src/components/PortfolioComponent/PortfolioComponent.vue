<template>
  <div class="hello">
    {{ msg }}
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'Portfolio',
    computed: {
      ...mapGetters({
        portfolio: 'portfolio'
      }),
    },
    data () {
      return {
        msg: 'Portfolio'
      }
    },
    created() {
      this.$store.dispatch("setPortfolio");
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
