<template>
  <div>
    <div>
      <h1>Character witnesses</h1>
    </div>
    <!-- Use cards that flip when clicked and make the pic have color when hovered instead of a carousel -->
  </div>
  <!-- 
    Testimonial images: links - MUST use brons pics instead
    1)https://i.ibb.co/qnYVPmZ/Asi-NoBg.png
    2)https://i.ibb.co/1L1YbSy/Matthew-no-Bg.png
    3)https://i.ibb.co/V3kRdDY/Ntando-no-Bg.png
    4)https://i.ibb.co/frd5rx6/Onika-no-Bg.png
    5)https://i.ibb.co/xFSR2tQ/Seth-no-Bg.png
    6)https://i.ibb.co/L6M5L7R/Ty-noBg.png
   -->

  </template>

    <div class="mt-4">
      <h1 class="welcome mt-5">Character witnesses</h1>
    </div>
    Bootstrap carousel starts here
      <div
        class="carousel slide mt-4"
        id="testimonialsCarousel"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          Asi: carousel item opens
          <div class="carousel-item">
            <div class="d-flex justify-content-center">
              <img
                src="https://i.ibb.co/qnYVPmZ/Asi-NoBg.png"
                class="d-block carouselImg"
                alt=""
              />
            </div>
            <div>
              <h3 id="aboutPgBorder" class="balthazar text-center">
                {{ this.$store.state.name4 }}
              </h3>
              <p id="aboutPgBorder" class="balthazar">
                {{ this.$store.state.desc4 }}
                "Naeema's combination of
                unwavering diligence and hard work combined with her remarkable level of
                intelligence make her a standout professional. Her articulate
                communication skills further elevate her abilities."
              </p>
            </div>
            carousel caption closes
          </div>
          Asi carousel item closes

          <div class="carousel-item">
            <div class="d-flex justify-content-center">
              <img
                src="https://i.ibb.co/L6M5L7R/Ty-noBg.png"
                class="d-block carouselImg"
                alt=""
              />
            </div>
            <div>
              <h3 id="aboutPgBorder" class="balthazar text-center">
                {{ this.$store.state.name5 }}
              </h3>
              <p id="aboutPgBorder" class="balthazar">
                {{ this.$store.state.desc5 }}
              </p>
            </div>
            carousel caption closes
          </div>
          carousel item closes

          <div class="carousel-item active">
            <div class="d-flex justify-content-center">
              <img
                src="https://i.ibb.co/1L1YbSy/Matthew-no-Bg.png"
                class="d-block carouselImg"
                alt=""
              />
            </div>
            <div>
              <h3 id="aboutPgBorder" class="balthazar text-center">
                {{this.$store.state.name1}}
              </h3>
              <p id="aboutPgBorder" class="balthazar">
                {{ this.$store.state.desc1 }}
              </p>
            </div>
            carousel caption closes
          </div>
          carousel item closes
          <div class="carousel-item">
            <div class="d-flex justify-content-center">
              <img
                src="https://i.ibb.co/V3kRdDY/Ntando-no-Bg.png"
                class="d-block carouselImg"
                alt=""
              />
            </div>
            <div>
              <h3 id="aboutPgBorder" class="balthazar text-center">
                {{ this.$store.state.name2 }}
              </h3>
              <p id="aboutPgBorder" class="balthazar">
                {{ this.$store.state.desc2 }}
              </p>
            </div>
            carousel caption closes
          </div>
          carousel item closes
          Onika: carousel item opens
          <div class="carousel-item">
            <div class="d-flex justify-content-center">
              <img
                src="https://i.ibb.co/frd5rx6/Onika-no-Bg.png"
                class="d-block carouselImg"
                alt=""
              />
            </div>
            <div>
              <h3 id="aboutPgBorder" class="balthazar text-center">
                {{ this.$store.state.name3 }}
              </h3>
              <p id="aboutPgBorder" class="balthazar">
                {{ this.$store.state.desc3 }}
              </p>
            </div>
            carousel caption closes
          </div>
          Onika carousel item closes
        </div>
        carousel wrapper closes
        <button
          class="carousel-control-prev arrowBtns "
          type="button"
          data-bs-target="#testimonialsCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon brownTxt" aria-hidden="true"></span>
          <span class="visually-hidden brownTxt ">Previous</span>
        </button>
        <button
          class="carousel-control-next arrowBtns"
          type="button"
          data-bs-target="#testimonialsCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden brownTxt">Next</span>
        </button>
      </div>    
    Bootstrap carousel ends here


  </template>

  <style>
   .aboutPgImg{
    min-width: 195px;
    max-width: 290px;
    max-height: 300px;
    background-color: #2c3e50;
    padding: 5px;
    box-shadow: 0px 0px 30px 10px #2c3e50;
    border-radius: 20px;
  }
  .img1{
    max-height: 200px;
    max-width: 100px;
    align-content: center;
    display: flex;
    justify-content: center;
    margin: auto;
  }

  #testimonialsCarousel{
    max-width: 400px;
    margin: 0 auto;
  }

  .carouselImg {
      max-height: 300px;
      align-items: center;
  }
  .arrowBtns{
    max-height: 100px;
    box-shadow: 0px 0px 30px 10px #2c3e50;
    margin-top: 25%;
    width: 100px;
    background-color: #F5E9DB;
    border: 5px solid #2c3e50;
    border-radius: 20px;
  }
  .brownTxt{
    color: #4A351D;
  }
  </style>

  
    Testimonial images: links
    1)https://i.ibb.co/qnYVPmZ/Asi-NoBg.png
    2)https://i.ibb.co/1L1YbSy/Matthew-no-Bg.png
    3)https://i.ibb.co/V3kRdDY/Ntando-no-Bg.png
    4)https://i.ibb.co/frd5rx6/Onika-no-Bg.png
    5)https://i.ibb.co/xFSR2tQ/Seth-no-Bg.png
    6)https://i.ibb.co/L6M5L7R/Ty-noBg.png
   -->