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
