<template>
  <div class="firstDivsChild">
          <h1 class="welcome mt-5">Projects</h1>
          <h2 class="brownTxtShadow">Below you will find the projects I completed since starting my coding journey at Life Choices Academy</h2>
  </div>
  <div class="row projectRowMargin">
  <!-- <div class="container-fluid d-flex justify-content-evenly parentDivMaxWidth"> -->
    <!-- div above opens project holding div -->
        <div class="col-12 col-sm-6 col-md-3 loopDiv" v-for="project in this.$store.state.projectsData" :key="project.id">
          <!-- This div holds the individual project cards -->
          <div class="brownBoxShadow projectDiv gap">
            <h1 class="projectName brownTxtShadow d-flex align-items-center">{{ project.name }}</h1>
            <!-- d-flex align-items-center vertically centers the text in its 165px container -->
            <img class="projectDivImg" :src="project.imgSRC" alt="">
            <!-- Image link wasn't loading for 2 reasons: 1) src is an attribute and therefore needs to be bound (w/ : before the src) and 2) because attributes do NOT take moustache syntax-->
            <h5 class="projectDesc d-flex align-items-center">{{ project.description }}</h5>
            <div class="row projectBtn">
              <div class="col-6 projectBtn">
                <a :href="project.netlify">
                  <button class="btnStyling btnRounding noBorder iconStyling">View project</button>
                  <!-- Q: why wasn't the anchor tag working?
                  A: because href is a attribute and therefore needs a colon for binding AND no mostache syntax -->
                </a>
              </div>
              <div class="col-6">
                <a :href="project.github">
                  <button class="btnStyling btnRounding noBorder iconStyling">Project gitHub</button>
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
  .brownTxtShadow{
    text-shadow: 1px 1px 8px #4A351D;
    /* 1st number = x offset. 2nd number = y offset. 3rd number = how blurry*/
  }
  .brownBoxShadow{
    box-shadow: 0px 0px 30px 10px #4A351D;
    border-radius: 20px;  
  }

/* ALIGNMENT ATTEMPT 2 STARTS HERE */

  /* NOTE: projectDivImg is perfect as is */
  .projectDivImg{
    max-width: 228px;
    /* reducing the max-width fr 250px to 228 makes the image fit the projectDiv */
    margin-bottom: 15px;
  }
  /* NOTE: .loopDiv is the parent holding EACH INDIVIDUAL PROJECT. projectDiv is holding the actual projects. */
  .loopDiv{
    max-width: 250px;
    /* 260px is the biggest the max-width can get to have 5 projects in the first row */
    margin-inline: 23px;
    /* NOTE: Removing the margin-inline still left a margin at the start due to the margin-inline of the projectDiv */
    /* This margin-inline also adds space between the projects */
    /* NOTE: including this margin-inline applied 23px margin to the left AND right but it was unequal because the row div has a margin at the end somehow */
    } 
    .projectDiv{
    width: 250px;
    margin-top: 50px;
    /* margin-inline: 50px; */
    /* NOTE: removing this div removed all margin on the start */
    /* NOTE: including this margin-inline ONLY adds a margin to the start */
  }
  .projectRowMargin{
    max-width: 1505px;
    /* NOTE: appling a max-width of 1505px makes the div fit the page w/out stretching the navBar and footer */
    margin-inline: 2px;
    /* NOTE: adding a margin in-line centers the row in the page at all breakpoints (300px, 700px, 1000px, 1500px)*/
    /* NOTE: adding margin-left = 25px centers the 700px view */
  }
  .projectDesc{
    height: 250px;
    margin-bottom: 15px;
    /* height: 250px; */
    /* NOTE: I thought making the desc have a fixed width would align my buttons but I need both the heading AND the desc to have a fixed width */
  }
  .projectName{
    height:165px;
  }
  .projectBtn{
    /* The btn had the same styling as the desc but i needed them separate so I'm making the btn have its own styling */
    margin-bottom: 15px;
    /* NOTE: btn only had a margin bottom */
    
  }
  .iconStyling{
    color: #4A351D ;
    box-shadow: 0px 0px 30px 10px #4A351D ;
    }
    
    .noBorder{ 
        border: none;
    }
    .btnRounding{
        border: 3px solid #4A351D;
        border-radius:10px;
        background-color: #F1CFBF;
    }

  /* NOTE: Alignment attempt 2 fixes the projects alignment at full-screen */
  /* ALIGNMENT ATTEMPT 2 ENDS HERE */



  /* .projectDiv{
    width: 250px;
    margin-top: 50px;
    margin-inline: 50px;
  }
  
  .projectDesc{
    margin-bottom: 15px;
  }
  .projectRowMargin{
    max-width: 1000px;
  }
  */

    /* Below is the original styling that I can revert to if the new manipulations do not work */
  /* @media (max-width: 1250px){
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
  } */

  /* The following styling works flawlessly @1000px and 700px and only needs a little tweaking at 300px
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
  */
</style>