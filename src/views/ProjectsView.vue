<template>
  <div>
          <h1>Projects</h1>
          <h2>Below you will find the projects I completed since starting my coding journey at Life Choices Academy</h2>
  </div>
  <div>
  <!-- <div class="container-fluid d-flex justify-content-evenly parentDivMaxWidth"> -->
    <!-- div above opens project holding div -->
        <div v-for="project in this.$store.state.projectsData" :key="project.id">
          <!-- This div holds the individual project cards -->
          <div>
            <h1>{{ project.name }}</h1>
            <!-- d-flex align-items-center vertically centers the text in its 165px container -->
            <img :src="project.imgSRC" alt="">
            <!-- Image link wasn't loading for 2 reasons: 1) src is an attribute and therefore needs to be bound (w/ : before the src) and 2) because attributes do NOT take moustache syntax-->
            <h5>{{ project.description }}</h5>
            <div>
              <div>
                <a :href="project.netlify">
                  <button>View project</button>
                  <!-- Q: why wasn't the anchor tag working?
                  A: because href is a attribute and therefore needs a colon for binding AND no mostache syntax -->
                </a>
              </div>
              <div>
                <a :href="project.github">
                  <button>Project gitHub</button>
                </a>
              </div>
            </div>
          </div>
          
        </div>
    <!-- div below closes project holding div -->
  </div>
</template>

