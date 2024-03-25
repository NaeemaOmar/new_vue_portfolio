<template>
  <NavBar/>
  <router-view/>
  <Footer/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default{
  components:{
    NavBar,
    Footer
  },
  computed:{
    getInfo(){
      this.$store.dispatch('getInfo');
    },
    getProjectsInfo(){
      this.$store.dispatch('getProjectsInfo');
    },
    getResumeInfo(){
      this.$store.dispatch('getResumeInfo');
    }
  },
  mounted(){
    this.getInfo,
    this.getProjectsInfo
    this.getResumeInfo
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4A351D;
}


body{
  /* background-color: #EDB5A2; */
  background-color: #FCF2EE;
}

/* nav {
  padding: 30px;
  main, darker peach #EDB5A2;
  The nice blue = #2c3e50
  The nice brown = #4A351D
  Greyish accent color = #E6D9CB
  softer peach = #F5E9DB
} */

nav a {
  font-weight: bold;
  color: #4A351D;
  padding: 20px;
}

nav a.router-link-exact-active {
  color: #2c3e50;
}

.brownTxt{
  color: #4A351D;
}

</style>
