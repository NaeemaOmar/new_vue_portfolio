<template>
  <div class="firstDivsChild">
          <h1 class="welcome mt-5">Projects</h1>
          <h2 class="brownShadow">Below you will find the projects I completed since starting my coding journey at Life Choices Academy</h2>
  </div>
  <div class="row projectRowMargin ">
  <!-- <div class="container-fluid d-flex justify-content-evenly parentDivMaxWidth"> -->
    <!-- div above opens project holding div -->
        <div class="col-12 col-sm-6 col-md-3 loopDiv" v-for="project in this.$store.state.projectsData" :key="project.id">
          <!-- This div holds the individual project cards -->
          <div class="border projectDiv">
            <h1>{{ project.name }}</h1>
            <img class="projectDivImg" :src="project.imgSRC" alt="">
            <!-- Image link wasn't loading for 2 reasons: 1) src is an attribute and therefore needs to be bound (w/ : before the src) and 2) because attributes do NOT take moustache syntax-->
            <h5 class="projectDesc">{{ project.description }}</h5>
            <div class="row projectDesc">
              <div class="col-6 projectDesc">
                <a :href="project.netlify">
                  <button class="btnStyling">View project</button>
                  <!-- Q: why wasn't the anchor tag working?
                  A: because href is a attribute and therefore needs a colon for binding AND no mostache syntax -->
                </a>
              </div>
              <div class="col-6">
                <a :href="project.github">
                  <button class="btnStyling">Project gitHub</button>
                </a>
              </div>
            </div>
          </div>
          
        </div>
    <!-- div below closes project holding div -->
  </div>
</template>

<!-- <script>
  export default{
    computed:{
      projectsData(){
        return this.$store.state.projectsData;
      },
    },

  }
</script> -->

<style>
  .brownShadow{
    text-shadow: 1px 1px 8px #4A351D;
    /* 1st number = x offset. 2nd number = y offset. 3rd number = how blurry*/
  }
  .projectDiv{
    width: 250px;
    margin-top: 50px;
    margin-inline: 50px;
  }
  .projectDivImg{
    max-width: 250px;
    margin-bottom: 15px;
  }
  .projectDesc{
    margin-bottom: 15px;
  }
  .projectRowMargin{
    max-width: 1000px;
  }
  .loopDiv{
    max-width: 250px;
    margin-inline: 23px;
    }
  @media (min-width: 1250px){
    .loopDiv{
      max-width: 190px;
      margin-inline: 30px;
      display: flex;
      justify-content: ;
    }
    .projectDiv{
      width: 250px;
      margin-top: 50px;
      margin-inline: 100px;

    }
  }
</style>