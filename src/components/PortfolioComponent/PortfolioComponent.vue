<template>
  <div class="main">
    <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div class="my-auto">
        <h1 class="mb-5">PROJECTS by
          <span class="text-red">Son Jaerock</span>
        </h1>

        <div class="projects mb-5 row">
          <div
            :kye="project.id"
            v-for="project in portfolio"
            class="card">
            <div class="card-header">
              {{ project.develop_perod }}
            </div>
            <div class="card-body">
              <img class="card-img-top" :src="project.screenshots[0]" alt="Card image cap">
              <h4 class="card-title">{{ project.title }}</h4>
              <p class="card-text">
                link :
                <a
                  class="text-red"
                  :href="project.link">{{ project.link }}
                </a>
              </p>
              <!--<p class="card-text">{{ project.description }}</p>-->

              <a @click="goDetail(project.id)" class="btn btn-light">About More</a>
            </div>
          </div>
        </div>


      </div>
    </section>
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
    },
    methods: {
      goDetail: function(val){
        this.$router.push("project/"+ val);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    width: 31%;
    margin: 1%;
  }
  .text-red {
    color: #bf5d32;
  }

  .main {
    margin-left: 17rem;
    width: 100%;
    overflow: hidden;
  }

  .resume-section {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    min-height: 100vh;
    text-align: left;
    display: table-cell;
    vertical-align: middle;
  }

  .my-auto {
    width: 100%;
    padding-top: auto !important;
    padding-bottom: auto !important;
  }

  .card-img-top {
    height: 200px;
    width: 200px;
  }
</style>
