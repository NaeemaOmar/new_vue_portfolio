<template>
  <div class="firstDiv">
    <div class="firstDivsChild">
          <h1 class="welcome mt-5">Hi, I am <span class="blueTxt bold">Naeema Omar</span></h1>
    </div>
  </div>
  <div class="row mt-5 mx-5 d-flex justify-content-between  rowWidth">
    <!-- The d-flex... in the line above is keeping things centered in the 1000px page width -->
    <!-- NOTE: the row div above holds the entire above pg break down -->

    
    <!-- Column holding img + basic info starts here -->
          <!-- Row holding img starts here -->
              <!-- THIS WILL BE A COL-12 -->
          <!-- Row holding img ends here -->
          <!-- Row holding basic info starts here -->
                <!-- THIS WILL BE 2 COL-6 @1000px and 2 COL-12 @700px and 300px -->
          <!-- Row holding basic info ends here -->
    <!-- Column holding img + basic info ends here -->



    <!-- Column holding About Me starts here -->


      <!-- Row holding intro paragraph starts here -->
            <!-- THIS WILL BE A COL-12 -->
      <!-- Row holding intro paragraph ends here -->
      <!-- Row holding more about me + fun info starts here -->
          <!-- Column holding more about me starts here -->
          <!-- Column holding more about me ends here -->
          <!-- Column holding fun info starts here -->
          <!-- Column holding fun info ends here -->
      <!-- Row holding more about me + fun info ends here -->


    <!-- Column holding About Me starts here -->




    <!-- About Pg row starts here -->
    <!-- Image row starts here -->
      <!-- Image row ends here -->
      <!-- Basic info row starts here -->
      <!-- Basic info row ends here -->
      <!-- Lil info block row starts here -->
       <!-- Lil info block row ends here -->

  
    <!-- <div class="row border">
      
      <div class="row">
        <div class="col-12">
          <img class="homePgImg" src="https://drive.google.com/uc?id=17PvyABE2PL9a_t0_vxwlEdr10Hvu6x1N" alt="">
        </div>
      </div>
      
      <div class="row">
        <div class="col-6">
          <h6>Basic info</h6>
          <h6>D.O.B: 02/04/1999 (25yrs)</h6>
          <h6>City:Cape Town</h6>
          <h6>Language: English</h6>
        </div>
      </div>
      
    </div>
    


    <div class="col-12 col-sm-5">
      <div class="txtMaxWidth mt-5">
        <h5 class="my-3">I am a 25 year old from Cape Town who recently became interested in pursuing a career as a full-stack developer</h5>
      </div>
      
      <div class="row mt-5">
        <div class="col-6 txtMaxWidth">
          <h6>Basic info</h6>
          <h6>D.O.B: 02/04/1999 (25yrs)</h6>
          <h6>City:Cape Town</h6>
          <h6>Language: English</h6>
        </div>
        <div class="col-6 txtMaxWidth">
          <h6>More about me:</h6>
          <h6>I enjoy hiking an am currently on a mission to cover all the trails at the Tygerberg Nature Reserve</h6>
          <h6>City:Cape Town</h6>
          <h6>Language: English</h6>
        </div>
      </div>
      
      
    </div> -->
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