<template>
    <nav class="navbar navbar-expand-lg navbar-light Body">
        <!-- NOTE: navbar-light is the burger icon -->
    <a class="navbar-brand" href="/">
        <img class="img-fluid" src="https://i.ibb.co/BnLhxLd/Screenshot-2024-01-10-094142.png" 
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
              <router-link to="/newHome">Gold-Home</router-link> 
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
  

  
<!-- 
    NavBar image link
    1)https://i.ibb.co/BnLhxLd/Screenshot-2024-01-10-094142.png
 -->
