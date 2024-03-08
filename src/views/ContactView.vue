<template >
<div>
    
    <h2 class="welcome mt-5">Want to chat?</h2>
        <div class="d-flex justify-content-center">
        <div class="row container mt-5 d-flex justify-content-center">
          <div class="col-6 mx-auto mt-3">
            <p>Get in touch with me by completing the form below</p>
            <form action="https://formspree.io/f/xaygazkl" method="POST">
              <div>
                <label class="my-3">
                Your name:
                </label>
              </div>
              <div>
                <input type="name" name="name" class="inputWidth">
              </div>
              
              <div>
                <label class="my-3">
                  Your email:
                </label>
              </div>
              <div>
                  <input type="email" name="email" class="inputWidth">
              </div>
              <div>
                <label class="my-3">
                  Your message:
                </label>
              </div>
              <div>
                <textarea class="inputWidth" name="message"></textarea>
              </div>
              <button class=" btnRounding noBorder iconStyling btnHeight mt-3" type="submit">Send</button>
            </form>
          </div>
          <div class="col-6 productBorder fixColumnWidth mt-3">
            <p class="boldText">Alternatively, click any of the icons below to go to our social media pages</p>
            <div class="row iconSpacing bottomRowMargin">
              <div class="col-6 ">
                <a href="https://github.com/NaeemaOmar">
                  <i class="fa-brands fa-square-github fa-2xl iconStyling"></i>
                </a>
                </div>
              <div class="col-6">
                <a href="https://www.linkedin.com/feed/">
                  <i class="fa-brands fa-linkedin fa-2xl iconStyling"></i>
                </a>
              </div>
            </div>
            <div class="row bottomRowMargin mb-5">
              <div class="col-6">
                <a href="https://www.whatsapp.com/">
                  <i class="fa-brands fa-square-whatsapp fa-2xl iconStyling"></i>
                </a>
                
              </div>
              <div class="col-6">
                <a href="https://www.facebook.com/login/?next=%2Fmarketplace%2F">
                  <i class="fa-brands fa-square-facebook fa-2xl iconStyling"></i>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div class="lastDiv"></div>
    </div>
  </template>
  
  <style>
    
    .lastDiv{
      height: 50px;
    }
    .bottomRowMargin{
        margin-bottom: 100px;
        margin-top: 50px;
        margin-inline-start: 20%;

    }
    .inputWidth{
        width: 100%;
        background-color: #F1CFBF;
        border: 3px solid #4A351D;
        border-radius: 8px;
    }
    .iconSpacing{
        margin-top: 100px;
        margin-inline-start: 20%;
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
    /* Animation (from the following open-source https://codepen.io/P1N2O/pen/pyBNzX) starts here  */
    /* .Body{
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
    } */
    /* Animation (from the following open-source https://codepen.io/P1N2O/pen/pyBNzX) ends here  */

  </style>



      