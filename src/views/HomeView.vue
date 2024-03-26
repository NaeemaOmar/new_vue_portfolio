<template>
  <div>
    <div>
      <div>
        <h1>Welcome to my online abode</h1>
      </div>
    </div>
    <div>
      <!-- The d-flex... in the line above is keeping things centered in the 1000px page width -->

      <!-- Image column starts here -->
      <div>
        <img
          src="https://i.ibb.co/dDknjkr/about-Pg-Pic.jpg"
          alt=""
        />
      </div>
      <!-- Image column ends here -->

      <div>
        <div>
          <h3>I am <span>Naeema Omar,</span></h3>
          <h3>an aspiring</h3>
          <h3>Full-stack developer</h3>
          <!-- Buttons row starts here -->
          <div >
            <div>
              <a href="/src/views/AboutView.vue">
                <button>
                  <router-link to="/about">
                    <span>About</span></router-link
                  >
                </button>
              </a>
            </div>
            <div>
              <a>
                <button>
                  <router-link to="/contact">
                    <span>Contact</span></router-link
                  >
                </button>
              </a>
            </div>
          </div>
          <!-- Buttons row ends here -->
        </div>
      </div>
    </div>
  </div>
</template>

<!-- 
  Home pg image link:
  1)https://i.ibb.co/YRBhdkQ/My-Home-Pg-Pic-Bg-Rectangle-Ver-no-Bg.png
  2)https://i.ibb.co/3fwNCwS/My-Home-Pg-Pic-Bg-Square-Ver-no-Bg.png
 -->

<!-- 
    Testimonial images: links
    1)https://i.ibb.co/qnYVPmZ/Asi-NoBg.png
    2)https://i.ibb.co/1L1YbSy/Matthew-no-Bg.png
    3)https://i.ibb.co/V3kRdDY/Ntando-no-Bg.png
    4)https://i.ibb.co/frd5rx6/Onika-no-Bg.png
    5)https://i.ibb.co/xFSR2tQ/Seth-no-Bg.png
    6)https://i.ibb.co/L6M5L7R/Ty-noBg.png
   -->
