<script>

export default {
    name: 'FourthSection'
}

</script>

<template>

<div class="row m-0 p-0 my-reviews position-relative d-flex flex-column align-items-center position-relative">
    <div class="col my-reviews-2 min position-absolute  d-flex justify-content-center align-items-center p-0 ">
        <div class="col-5 d-flex flex-column align-items-center justify-content-center bg-product h-100">
            <img class="img-fluid " src="../../public/shaving_butter.png" alt="@">
        </div>
        <div class="col-7 d-flex flex-column justify-content-start align-items-start text-min h-100 px-5">
            <strong class="mt-5 mb-3" >THIS MONTHS FEATURED PRODUCT</strong>
            <h2>Shaving Butter</h2>
            <p class="my-4 text-start w-100">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi veniam ab corrupti nobis alias accusantium! Ad itaque, eaque consequatur commodi.</p>
            <div class="my-btn-dark">
                <strong class="text-center ">BUY NOW</strong>
            </div>
        </div>
    </div>
    <div class="col-12 d-flex flex-column justify-content-start align-items-center  title-reviews ">
        <strong>WHAT POPLE SAY</strong>
        <h2>Reviews</h2>
    </div>
    <div class="row my-reviews-2 d-flex justify-content-center align-items-center mt-5 ">
        <div class="col-4 d-flex flex-column align-items-center justify-content-center p-0">
            <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit nostrum amet laborum itaque voluptate excepturi culpa soluta aut.</p>
            <img class="img-fluid" src="../../public/avadabarbers-trimcut-gallery6.jpg" alt="@">
            <strong class="my-5">John Doe</strong>
        </div>
        <div class="col-4 d-flex flex-column align-items-center justify-content-center p-0">
            <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit nostrum amet laborum itaque voluptate excepturi culpa soluta aut.</p>
            <img class="img-fluid" src="../../public/avadabarbers-trimcut-gallery7.jpg" alt="@">
            <strong class="my-5">Pete Jones</strong>
        </div>
        <div class="col-4 d-flex flex-column align-items-center justify-content-center p-0">
            <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit nostrum amet laborum itaque voluptate excepturi culpa soluta aut.</p>
            <img class="img-fluid" src="../../public/avadabarbers-trimcut-gallery3.jpg" alt="@">
            <strong class="my-5">Mark Wilson</strong>
        </div>
    </div>
    <img class="img-fluid position-absolute my-triangle p-0 "  src="../../public/triangle.svg" alt="@">
</div>

</template>

<style>

.my-reviews{

height: 1100px;

background-color: white;

.title-reviews{
    margin-top: 500px;
}

strong{
    color: #be9359;
}

h2{
    font-size: 65px;
    font-family: "Abril Fatface" , serif;
    color: #b1b1b1;
}


.my-triangle{
    transform: rotate(180deg);

    bottom: -150px;
    left: 0;
    right: 0;
}

}

.my-reviews-2{
width: 65%;

img{
    height: 110px;

    border-radius: 50%;
}

h4{
    font-family: "Abril Fatface" , serif;
    color: #be9359;
    font-size: 30px;
}

p{
    color: #161718a8;
    width: 200px;
}


}

.min{
    height: 460px;

    border-top: 5px solid #be9359;

    top: -55px;


    .bg-product{

        background-image: url(../../public/avadabarbers-cta-background.jpg);
        background-size: cover;

        object-fit: contain;

        img{
            height: 100%;
        }


    }

    .text-min{
        background-color: #161718;

        p{
            color: rgba(255, 255, 255, 0.264);
        }

    }

}

</style>