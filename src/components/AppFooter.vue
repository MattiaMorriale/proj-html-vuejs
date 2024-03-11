<script>

export default {

    name: 'AppFooter'

}

</script>

<template>

    <div class="container-fluid  p-0">
        <div class="row my-footer justify-content-center m-0 p-0 ">
            <div class="w-75 d-flex ">
                <div class="col-4 p-0 d-flex flex-column align-items-center justify-content-center ">
                    <img class="img-fluid " src="../../public/avadabarbers_footer_shop_image.png" alt="@">
                    <div class="mt-1  my-btn">
                        <strong class="text-center ">SHOP OUR RANGE NOW</strong>
                    </div>
                </div>
                <div class="col-4 p-0 d-flex flex-column align-items-center justify-content-center ">
                    <img class="img-fluid my-logo" src="../../public/avadabarbers-logo-x1.png" alt="@">
                    <p class="text-center m-0 my-5 ">Avada Barbers<br>123 New York Street<br>New York City<br>info@yourwebsite.com<br>+1(555) 555-1212</p>
                    <strong class="mb-5 mt-2 " >FOLLOW US</strong>

                    <ul class="d-flex list-unstyled gap-3 " > 
                        <li>
                            <i class="fa-brands fa-facebook-f"></i>
                        </li>
                        <li>
                            <i class="fa-brands fa-twitter"></i>
                        </li>
                        <li>
                            <i class="fa-brands fa-youtube"></i>
                        </li>
                        <li>
                            <i class="fa-brands fa-instagram"></i>
                        </li>
                    </ul>
    
                </div>
                <div class="col-4 p-0 d-flex flex-column align-items-center justify-content-center ">
                    <img class="img-fluid " src="../../public/avadabarbers_footer_appointment_image.png" alt="@">
                    <div class="mt-1  my-btn">
                        <strong class="text-center ">BOOK YOUR APPOINTMENT</strong>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-copyrigth p-0 m-0 justify-content-center align-items-center ">
            <p class="m-0 p-0 text-center  ">&copy; Copyright 2012 - 2020 | Avada Theme by Themefusion | All Rights Reserved | Powered by Mattia Morriale</p>
        </div>
    </div>

</template>

<style>

.my-footer{
    height: 500px;

    background-color: #121314;

    img{
        height: 300px;
    }

    .my-logo{
        height: 65px;
    }

    p{
        opacity: .5;
    }

    strong{
        color: #be9359;
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
}

.my-copyrigth{
    height: 80px;

    background-color: #161718;

    p{

        font-family: "Encode Sans Expanded", sans-serif;
        opacity: .3;

        font-size: 13px;
    }
}


</style>