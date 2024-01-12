<template>
    <div>
      <h1 class="welcome mt-5">Resume</h1>
    </div>
    <div class="container-fluid mainDiv">
<!-- EDUCATION div starts below -->
      <div>
        <h3 class="mainBrownHeading">Education</h3>
        <div class="row d-flex justify-content-between mx-5">
                    <!-- NSC starts here -->
          <div class="col-4 educationCol d-flex align-items-center justify-content-center mt-5">
            <div>
              <p class="educationSummary"><span class="boldTxt">Year: </span>{{ this.$store.state.education[0].year}}</p>
              <p class="educationSummary"><span class="boldTxt">Qualification: </span>{{ this.$store.state.education[0].qualification}}</p>
              <p class="educationSummary"><span class="boldTxt">Institute: </span>{{ this.$store.state.education[0].institute}}</p>
            </div>
          </div>
                    <!-- NSC ends here -->
                    <!-- BEng starts here -->
                    <div class="col-4 educationCol d-flex align-items-center justify-content-center mt-5">
            <div>
              <p class="educationSummary"><span class="boldTxt">Year: </span>{{ this.$store.state.education[0].year}}</p>
              <p class="educationSummary"><span class="boldTxt">Qualification: </span>{{ this.$store.state.education[0].qualification}}</p>
              <p class="educationSummary"><span class="boldTxt">Institute: </span>{{ this.$store.state.education[0].institute}}</p>
            </div>
          </div>
                    <!-- BEng ends here -->
                    <!-- LCA starts here -->
                    <div class="col-4 educationCol d-flex align-items-center justify-content-center mt-5 ">
            <div>
              <p class="educationSummary itemMargin"><span class="boldTxt">Year: </span>{{ this.$store.state.education[1].year}}</p>
              <p class="educationSummary"><span class="boldTxt">Qualification: </span>{{ this.$store.state.education[1].qualification}}</p>
              <p class="educationSummary mb-2"><span class="boldTxt">Institute: </span>{{ this.$store.state.education[1].institute}}</p>
            </div>
          </div>
                    <!-- LCA ends here -->
        </div>
      </div>
<!-- EDUCATION div ends above here -->

<!-- WORK EXPERIENCE div starts below -->

      <div>
        <h3 class="mainBrownHeading">Work Experience</h3>
        <div class="row workExperienceLoop">
          <div class="col-4 workExperienceLoopItem educationCol" v-for="workExperienceSum in this.$store.state.workExperienceSummary" :key="workExperienceSum.id">
            <div class="itemMargin">
              <p><span class="boldTxt">Year: </span>{{ workExperienceSum.year }}</p>
              <p><span class="boldTxt">Role: </span>{{ workExperienceSum.role }}</p>
              <p><span class="boldTxt">Employer: </span>{{ workExperienceSum.employer }}</p>
            </div>
          </div>
        </div>
        <div class="row workExpDescr mt-5">
          <div class="col-12">
            <div>
              <h6>{{ this.$store.state.workExperienceDescr[0].desc1 }}</h6>
              <h6>{{ this.$store.state.workExperienceDescr[0].desc2 }}</h6>

            </div>
          </div>
        </div>
      </div>
<!-- WORK EXPERIENCE div ends above here -->

<!-- SKILLS div starts below -->

      <div>
        <h3 class="mainBrownHeading ">Skills</h3>
        <div class="row d-flex justify-content-between mx-5">
<!-- NOTE TO SELF: row and v-for CANNOT be the same div. row div first and then v-for/loop div -->
          <div class=" skillItem " v-for="skillItem in this.$store.state.technicalSkills" :key="skillItem.id">
            <div class="col-2 skillItemDiv">
              <h6 class="boldTxt">{{ skillItem.name }}</h6>
              <img class="skillImg" :src="skillItem.img" alt="">
              <p class="boldTxt skillMastery">Mastery</p>
              <p>{{ skillItem.mastery }}</p>
            </div>
        </div>
        </div>
      </div>
<!-- SKILLS div ends above here -->


    </div>
  </template>

  <style>
  
  .mainBrownHeading{
    width: 250px;
    background-color: #F1CFBF;
    border-radius: 20px;
    box-shadow: 0px 0px 30px 10px #4A351D ;
    margin-inline: auto;
    margin-top: 70px;
    margin-bottom: 50px;
  }
  .educationSummary{
    margin-bottom: 0px;
  }
  .educationCol{
    max-width: 150px;
    background-color: #F1CFBF;
    border-radius: 20px;
    box-shadow: 0px 0px 30px 10px #4A351D ;
  }
  .boldTxt{
    font-weight: 700;
  }
  .workExperienceLoop{
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
  }
  .workExperienceLoopItem{
    display: flex;
    align-items: center;
    height: 220px;
  }
  .itemMargin{
    margin-top: 10px;
  }
  .workExpDescr{
    border-radius: 20px;
    box-shadow: 0px 0px 30px 10px #4A351D ;
    background-color: #F1CFBF;
  }
  .skillImg{
    width: 100px;
    height: 115px;
  }
  .skillItemDiv{
    max-width: 132px;
    height: 220px;
    margin-top: 20px;
    box-shadow: 0px 0px 30px 10px #4A351D ;
    border-radius: 20px;
  }
  .skillMastery{
    margin-bottom: 0px;
    margin-top: 10px;
  }
  .noMargin{
    margin-top: 0px;
    margin-bottom: 0px;
  }
  </style>