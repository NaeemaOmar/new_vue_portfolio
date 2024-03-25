<template>
    <div class="blackBg mx-3">
        <div class="golden-circle">
            <p>Golden circle</p>
        </div>
    </div>
</template>

<style>

.golden-circle {
  width: 100px; /* Adjust size as needed */
  height: 100px; /* Adjust size as needed */
  background: linear-gradient(45deg, #ffd700, #e5c100); /* Golden gradient */
  border-radius: 50%; /* Makes the element circular */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Adds a shadow for depth */
  transform: rotate(-45deg); /* Gives a metallic effect */
}

.blackBg{
    background-color: black;
}

.amberColor{
    color: #ffbf00;
}

.goldenColor{
    color: #f5bf03;
}

.silverColor{
    color: #d8d8d8;
}

</style>