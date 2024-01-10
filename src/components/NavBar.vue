<template>
    <nav class="navbar navbar-expand-lg navbar-light Body">
    <a class="navbar-brand" href="/">
        <img class="img-fluid rounded-circle logoImg" src="https://drive.google.com/uc?id=1v5baE4JiUolnN7DjkKaIOG2zaY6zZgZ7" 
        alt="logoImage">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ">
          <li class="nav-item ">
              <router-link to="/">Home</router-link> 
          </li>
          <li class="nav-item ">
              <router-link to="/about">About</router-link> 
          </li>
          <li class="nav-item ">
              <router-link to="/resume">Resume</router-link>
          </li>
          <li class="nav-item ">
              <router-link to="/projects">Projects</router-link> 
          </li>
          <li class="nav-item ">
              <router-link to="/testimonials">Testimonials</router-link> 
          </li>
          <li class="nav-item ">
              <router-link to="/contact">Contact</router-link> 
          </li>
      </div>
    </div>
  </nav>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
    .nav-item{
        margin-top: 0.5%;
    }

    .navbar-nav{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    .logoImg{
        max-height: 40px;
    }

      /* Animation (from the following open-source https://codepen.io/P1N2O/pen/pyBNzX) starts here  */
      .Body{
        background: linear-gradient(45deg, #EDB5A2 , #F1CFBF);
        background-size: 4000% 400%;
        animation: gradient 15s ease 1;
        height: fit-content;
    }
    @keyframes gradient{
        0%{
            background-position: 0% 50%;
        }
        50%{
            background-position: 100% 50%;
        }
        100%{
            background-position: 0% 50%;
        }
    }
    /* Animation (from the following open-source https://codepen.io/P1N2O/pen/pyBNzX) ends here  */

  </style>
