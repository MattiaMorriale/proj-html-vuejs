<script>
export default {
    name: 'ThirdSection'
}
</script>

<template>

<div class="row m-0 p-0 my-products d-flex flex-column align-items-center  gap-5 pt-5">
    <div class="first-cont d-flex flex-column justify-content-center align-items-center my-3  ">
        <strong class="mb-3">WE HAVE YOU COVERED</strong>
        <h2>Avada Grooming Products</h2>
    </div>
    <div class="my-products-2 d-flex justify-content-center align-items-center px-5 ">
        <div class="d-flex flex-column align-items-center justify-content-center ">
            <img class="img-fluid" src="../../public/brush_dark.png" alt="@">
            <h4 class="mt-5">Brush</h4>
            <p class="text-center">$15.00</p>
        </div>
        <div class="d-flex flex-column align-items-center justify-content-center ">
            <img class="img-fluid" src="../../public/scissors.png" alt="@">
            <h4 class="mt-5">Scissors</h4>
            <p class="text-center">$85.00</p>
        </div>
        <div class="d-flex flex-column align-items-center justify-content-center ">
            <img class="img-fluid" src="../../public/hot_oil_dark.png" alt="@">
            <h4 class="mt-5">Hot Oil</h4>
            <p class="text-center">$15.00</p>
        </div>
        <div class="d-flex flex-column align-items-center justify-content-center ">
            <img class="img-fluid" src="../../public/straight_razor_dark.png" alt="@">
            <h4 class="mt-5">Straight Razor</h4>
            <p class="text-center">$30.00</p>
        </div>
    </div>
    <div class="col-3 d-flex justify-content-center align-items-center ">
        <div class="mt-3 my-btn-dark">
            <strong class="text-center ">READ ABOUT OUR SERVICES</strong>
        </div>
    </div>
</div>

</template>

<style>

.my-products{
    
    height: 1000px;

    background-image: url(../../public/avadabarbers-reviewsbackground.jpg);
    background-size: cover;

    .first-cont {
        height: 100px;

        strong{
            color: #be9359;
        }

        h2{
            color: #b1b1b1;
            font-size: 50px;

            font-family: "Abril Fatface" , serif;
        }
    }

    .my-products-2{

    img{
        height: 325px;
    }

    h4{
        font-family: "Abril Fatface" , serif;
        color: #be9359;
        font-size: 30px;
    }

    p{
        color: #be925997;
        width: 200px;
    }

    }

}

</style>