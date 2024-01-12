<template>
  <div class="firstDiv">
    <div class="firstDivsChild">
          <h1 class="welcome mt-5">Welcome to my online abode</h1>
    </div>
  </div>
  <div class="row mt-5 mx-5 d-flex justify-content-between  rowWidth">
    <!-- The d-flex... in the line above is keeping things centered in the 1000px page width -->

    <!-- Image column starts here -->
    <div class="col-12 col-sm-3 mt-5 ">
      <img class="homePgImg" src="https://i.ibb.co/vcMtW2P/Screenshot-2023-11-03-114920.png" alt="">
    </div>
    <!-- Image column ends here -->

    <div class="col-12 col-sm-5">
      <div class="txtMaxWidth mt-5">
        <h3>I am <span class="blueTxt bold">Naeema Omar,</span></h3>
        <h3>an aspiring</h3>
        <h3>Full-stack developer</h3>
      </div>
      <!-- Buttons row starts here -->
      <div class="row mt-5">
        <div class="col-6">
          <a href="/src/views/AboutView.vue">
            <button class="btnStyling"><router-link to="/about"> <span class="brownTxt">About</span></router-link></button>
          </a>
        </div>
        <div class="col-6">
          <a href="/src/views/AboutView.vue">
            <button class="btnStyling"><router-link to="/contact"> <span class="brownTxt">Contact</span></router-link></button>
          </a>
        </div>
      </div>
       <!-- Buttons row ends here -->
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  
}
</script>

<style>
  .welcome{
    background-color: #F5E9DB;
    width: fit-content;
    margin-inline: auto;
    border-radius:20px ;
    padding: 3px;
    box-shadow: 0px 0px 30px 10px #2c3e50;
  }
  /* .mainSquares{
    display: flex;
    justify-content: center;
  } */
  .homePgImg{
    min-width: 195px;
    max-width: 290px;
    background-color: #2c3e50;
    padding: 5px;
    box-shadow: 0px 0px 30px 10px #2c3e50;
    border-radius: 20px;
  }
  .blueTxt{
    color: #2c3e50;
  }
  .bold{
    font-weight: 700;
  }
  .txtMaxWidth{
    border: 5px solid #2c3e50;
    box-shadow: 0px 0px 30px 10px #2c3e50;
    border-radius: 45px;
    background-color: #F5E9DB;
  }
  .brownTxt{
    color: #4A351D;
    
    font-weight: 700;
  }
  
  .btnStyling{ 
    background-color: #F5E9DB;
    border: 5px solid #2c3e50;
    border-radius: 20px;
    box-shadow: 0px 0px 30px 8px #2c3e50;
    height: 50px;
    width: 100px;
  }
  .rowWidth{
    max-width: 100%;
  }
  .firstDiv{
    display: flex;
    justify-content: center;
  }
  
</style>

<!-- 
  Home pg image link:
  1)https://i.ibb.co/YRBhdkQ/My-Home-Pg-Pic-Bg-Rectangle-Ver-no-Bg.png
  2)https://i.ibb.co/3fwNCwS/My-Home-Pg-Pic-Bg-Square-Ver-no-Bg.png
 -->