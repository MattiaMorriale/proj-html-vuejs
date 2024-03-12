<script>

export default {
    name: 'FirstSection'
}

</script>

<template>

    <div class="row my-pro d-flex justify-content-center p-0 m-0 position-relative">
        <div class="col d-flex flex-column justify-content-start align-items-center mt-5 pt-5 ">
            <strong>AWARD WINNING</strong>
            <h2 class="mt-2">Pro Barbers</h2>
            <div class="mt-4   my-btn">
                <strong class="text-center ">MEET YOUR NEW BARBERS</strong>
            </div>
        </div>
        <img class="img-fluid position-absolute my-triangle p-0 "  src="../../public/triangle.svg" alt="@">
    </div>

</template>

<style>

.my-pro{

background-image: url(../../public/avadabarbers-about-introbackground.jpg);
background-size: cover;

height: 550px;

strong{
    color: #be9359;
}

h2{
    font-family: "Abril Fatface" , serif;
    font-size: 65px;
}

.my-btn{
    border: 2px solid #be9359;

    color: #be9359;

    padding: 15px 40px; 
    cursor: pointer;

    transition: ease .4s;
}

.my-btn:hover{
    background-color: #be9359;
    
    strong{

        color:#161718;

    }
    
}

.my-triangle{
    width: 100%;

    bottom: 0;
    left: 0;
    right: 0;
}
}

</style>