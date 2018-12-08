<template>
  <div class="hello">
    {{ msg }}
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'Index',
    computed: {
      ...mapGetters({
        profile: 'profile'
      }),
    },
    data () {
      return {
        msg: 'index'
      }
    },
    created() {
      this.$store.dispatch("setProfile");
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
