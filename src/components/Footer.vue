<template>
    <div class=" container-fluid footer shadow Body">
            <div class="text-center"> &copy; NaeemaOmar 2024 </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>

.footer{
    position: sticky;
    bottom: 0;
    background-color: #ffffff;
    width: 100%;
}
.shadow{
    color: #4A351D ;
    box-shadow: 0px 0px 30px 10px #4A351D ;
    }

      /* Animation (from the following open-source https://codepen.io/P1N2O/pen/pyBNzX) starts here  */
      .Body{
        background: linear-gradient(-45deg, #EDB5A2 , #F1CFBF);
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