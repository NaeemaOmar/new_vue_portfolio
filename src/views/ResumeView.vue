<template>
    <div>
      <h1>Resume</h1>
    </div>
    <div>
<!-- EDUCATION div starts below -->
<!-- ADD: in 2023, i started my journey as a web developer at lifeChoices coding academy where I learnt..... -->
      <div>
        <h3>Education</h3>
        <div>
                    <!-- NSC starts here -->
          <div>
            <div>
              <p ><span>Year: </span>{{ this.$store.state.education[0].year}}</p>
              <p ><span>Qualification: </span>{{ this.$store.state.education[0].qualification}}</p>
              <p ><span>Institute: </span>{{ this.$store.state.education[0].institute}}</p>
            </div>
          </div>
                    <!-- NSC ends here -->
                    <!-- BEng starts here -->
                    <div >
            <div>
              <p><span>Year: </span>{{ this.$store.state.education[0].year}}</p>
              <p><span>Qualification: </span>{{ this.$store.state.education[0].qualification}}</p>
              <p><span>Institute: </span>{{ this.$store.state.education[0].institute}}</p>
            </div>
          </div>
                    <!-- BEng ends here -->
                    <!-- LCA starts here -->
                    <div>
            <div>
              <p><span>Year: </span>{{ this.$store.state.education[1].year}}</p>
              <p><span>Qualification: </span>{{ this.$store.state.education[1].qualification}}</p>
              <p><span>Institute: </span>{{ this.$store.state.education[1].institute}}</p>
            </div>
          </div>
                    <!-- LCA ends here -->
        </div>
      </div>
<!-- EDUCATION div ends above here -->

<!-- WORK EXPERIENCE div starts below -->

      <div>
        <h3>Work Experience</h3>
        <div>
          <div v-for="workExperienceSum in this.$store.state.workExperienceSummary" :key="workExperienceSum.id">
            <div>
              <p><span>Year: </span>{{ workExperienceSum.year }}</p>
              <p><span>Role: </span>{{ workExperienceSum.role }}</p>
              <p><span>Employer: </span>{{ workExperienceSum.employer }}</p>
            </div>
          </div>
        </div>
        <div>
          <div>
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
        <h3>Skills</h3>
        <div>
<!-- NOTE TO SELF: row and v-for CANNOT be the same div. row div first and then v-for/loop div -->
          <div v-for="skillItem in this.$store.state.technicalSkills" :key="skillItem.id">
            <div>
              <h6>{{ skillItem.name }}</h6>
              <img :src="skillItem.img" alt="">
              <p>Mastery</p>
              <p>{{ skillItem.mastery }}</p>
            </div>
        </div>
        </div>
      </div>
<!-- SKILLS div ends above here -->


    </div>
  </template>
