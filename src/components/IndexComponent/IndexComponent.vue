<template>
  <div class="container-fluid main">
    <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div class="my-auto">
        <h1 class="mb-0">FrontEnd Developer
          <span class="text-red">Son Jaerock</span>
        </h1>
        <div class="subheading mb-5">Github :
          <a
            class="text-red"
            :href="profile.github_link">{{ profile.github_link }}</a><br>
          Blog :
          <a
            class="text-red"
            :href="profile.blog_link">{{ profile.blog_link }}</a>
        </div>
        <p class="lead mb-5">{{ profile.description }} </p>
        <!--<div class="social-icons">-->
          <!--<a href="#">-->
            <!--<font-awesome-icon icon="user-secret" />-->
            <!--<i class="fab fa-linkedin-in"></i>-->
          <!--</a>-->
          <!--<a href="#">-->
            <!--<i class="fab fa-github"></i>-->
          <!--</a>-->
          <!--<a href="#">-->
            <!--<i class="fab fa-twitter"></i>-->
          <!--</a>-->
          <!--<a href="#">-->
            <!--<i class="fab fa-facebook-f"></i>-->
          <!--</a>-->
        <!--</div>-->


        <div class="subheading mb-5">
          <h4>Skill Stack</h4>
          <div
            class="skills col-md-3"
            :id="skill.id"
            v-for="(skill, index) in profile.skill_stack">
            <img
              class="logo"
              :src="profile.skill_icon[index]">
            <div class="skill-name">{{ skill }}</div>
          </div>



          <div class="mb-3 text-center">
            <button
              @click="goProject"
              class="btn btn-lg project bg-red"
            >About Projects</button>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
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
    },
    methods: {
      goProject: function() {
        this.$router.push("project")
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .text-red {
    color: #bf5d32;
  }
  .main {
    margin-left: 17rem;
    position: relative;
    width: 100%;
  }

  .resume-section {
    width: 100%;
    min-height: 100vh;
    text-align: left;
    display: table-cell;
    vertical-align: middle;
  }

  .my-auto {
    padding-top: auto !important;
    padding-bottom: auto !important;
  }
  .skills {
    float: left;
    text-align: center;
  }
  .logo {
    margin-top: 30px;
    width: 100px;
    height: 100px;
  }
  .skill-name {
    margin-top: 10px;
    font-weight: 700;
  }

  .project {
    margin-top: 40px;
    background: #bf5d32 !important;
    color: white;
    font-weight: 800;
    outline: none;
  }
  .project:focus {
    outline: none;
  }
  .project:hover {
    background: white !important;
    color: #bf5d32;
    font-weight: 800;
  }

  .bg-red {

  }
</style>
