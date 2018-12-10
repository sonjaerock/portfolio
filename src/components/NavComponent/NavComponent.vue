<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">Clarence Taylor</span>
        <span class="d-none d-lg-block">
            <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="https://avatars3.githubusercontent.com/u/17614151?s=460&v=4">
          </span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              :class="{'selected' : nowCategory === '/'}"
              @click="goUrl('/')">About</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              :class="{'selected' : nowCategory === '/project'}"
              @click="goUrl('/project')">Project</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import {mapGetters} from 'vuex';

  export default {
    name: 'Nav',
    computed: {
      ...mapGetters({
        profile: 'profile'
      }),
    },
    data () {
      return {
        msg: 'index',
        nowCategory: '',
      }
    },
    methods: {
      goUrl: function(val){
        this.$router.push(val);
        this.nowCategory = val;
      }
    },
    created() {
      this.$store.dispatch("setProfile");
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {

  }
  .header {
    display: inline-block;
  }
  @media (min-width: 992px) {
    #sideNav {
      background-color: #bf5d32;
      text-align: center;
      position: fixed;
      top: 0;
      left: 0;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 17rem;
      height: 100vh;
    }
    #sideNav .navbar-brand {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin: auto auto 0;
      padding: 0.5rem;
    }
    #sideNav .navbar-brand .img-profile {
      max-width: 150px;
      max-height: 150px;
      border: 0.5rem solid rgba(255, 255, 255, 0.2);
    }
    #sideNav .navbar-collapse {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
      -webkit-box-flex: 0;
      -ms-flex-positive: 0;
      flex-grow: 0;
      width: 100%;
      margin-bottom: auto;
    }
    #sideNav .navbar-collapse .navbar-nav {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 100%;
    }
    #sideNav .navbar-collapse .navbar-nav .nav-item {
      display: block;
    }
    #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
      display: block;
    }

    .selected {
      font-weight: 800;
      color: white;
    }
  }
</style>
