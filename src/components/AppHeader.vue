<script>

export default {

    name: 'AppHeader'

}

</script>

<template>

    <div class="container-fluid p-0  " >
        <div class="col-12 bg-img d-flex align-items-center flex-column ">

            <div class="row d-flex justify-content-between pt-4 w-75 my-nav">
                <div class="col-3">
                    <img src="../../public/avadabarbers-logo-x1.png" alt="@">
                </div>
                <div class="col-1 d-flex align-items-center justify-content-center gap-3 fs-5 ">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>

            <div class="row d-flex justify-content-between w-75 my-hero">
                <div class="col-6 d-flex flex-column justify-content-center p-0 ">
                    <h1>Barber Shop</h1>
                    <hr>
                    <p class="my-3 ">The Pinnacle of Male Grooming</p>
                    <div class="pt-5 ">
                        <strong class="my-btn">LEARN MORE</strong>
                    </div>
                </div>
                <div class="col-6 p-0 ">
                    <img class="img-fluid " src="../../public/avadabarbers_hero_focalmirror.png" alt="@">
                </div>
            </div>

        </div>
    </div>

</template>

<style>

.bg-img{
    height: 800px;
    background-image: url(../../public/avadabarbers-homepage-hero-bg.jpg);
    background-size: cover;

    .my-nav{
        height: 80px;

        img{
            height: 50px;
        }

        i{
            cursor: pointer;
        }

        i:hover{
            color: #be9359;
        }

    }

    .my-hero{

        h1{
            font-family: "Abril Fatface" , serif;
            font-size: 85px;
        }

        hr{
            width: 250px;
            border: 2px solid #be9359;

            opacity: 1;
        }

        p{
            opacity: .5;

            font-family: "Encode Sans Expanded", sans-serif;
            letter-spacing: 3px;
            font-size: 13px;
        }
        
        img{
            height: 680px;
        }

        .my-btn{
            border: 2px solid #be9359;

            color: #be9359;

            padding: 15px 40px; 
        }
        
    }

}

</style>