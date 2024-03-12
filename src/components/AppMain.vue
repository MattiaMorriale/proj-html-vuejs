<script>

export default {

    name: 'AppMain'

}

</script>

<template>

    <div class="container-fluid p-0 ">

<!--   __ _          _                   _   _              
 / _(_)        | |                 | | (_)             
| |_ _ _ __ ___| |_   ___  ___  ___| |_ _  ___  _ __   
|  _| | '__/ __| __| / __|/ _ \/ __| __| |/ _ \| '_ \  
| | | | |  \__ \ |_  \__ \  __/ (__| |_| | (_) | | | | 
|_| |_|_|  |___/\__| |___/\___|\___|\__|_|\___/|_| |_| 
                                                       
                                                        -->

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

<!--                               _                 _   _             
                             | |               | | (_)            
 ___  ___  ___ ___  _ __   __| |  ___  ___  ___| |_ _  ___  _ __  
/ __|/ _ \/ __/ _ \| '_ \ / _` | / __|/ _ \/ __| __| |/ _ \| '_ \ 
\__ \  __/ (_| (_) | | | | (_| | \__ \  __/ (__| |_| | (_) | | | |
|___/\___|\___\___/|_| |_|\__,_| |___/\___|\___|\__|_|\___/|_| |_|
                                                                  
                                                                   -->

        <div class="row m-0 p-0 my-services position-relative d-flex flex-column align-items-center ">
            <div class="col-12 d-flex flex-column justify-content-start align-items-center my-3  ">
                <strong>Mens Grooming</strong>
                <h2>Services</h2>
            </div>
            <div class="row my-services-2 d-flex justify-content-center align-items-center mt-5">
                <div class="col-4 d-flex flex-column align-items-center justify-content-center ">
                    <img class="img-fluid" src="../../public/avadabarbers-trimcut-icon-before.png" alt="@">
                    <h4 class="my-5">Trim & Cut</h4>
                    <p class="text-center">Avada Barbers are experts in the lickety split trim and hair cut. Quick but careful and ridiculously good looking.</p>
                </div>
                <div class="col-4 d-flex flex-column align-items-center justify-content-center ">
                    <img class="img-fluid" src="../../public/avadabarbers-washndry-icon.png" alt="@">
                    <h4 class="my-5">Wash & Dry</h4>
                    <p class="text-center">Take a scat in our fine leather chairs, lean back and let us lather you a fresh head in a luxurious fashion.</p>
                </div>
                <div class="col-4 d-flex flex-column align-items-center justify-content-center ">
                    <img class="img-fluid" src="../../public/avadabarbers-beardtrim-icon.png" alt="@">
                    <h4 class="my-5">Beard Tidy</h4>
                    <p class="text-center">Tame the tangles and untidy facial hairs like a gentleman with our Beard Tidy services from Avada Barbers.</p>
                </div>
            </div>
            <div class="col-3 d-flex justify-content-center align-items-center ">
                <div class="mt-5   my-btn">
                    <strong class="text-center ">READ ABOUT OUR SERVICES</strong>
                </div>
            </div>

            <img class="img-fluid position-absolute my-triangle-black p-0 "  src="../../public/triangle.svg" alt="@">
        </div>

<!--  _   _     _         _                 _   _             
| | | |   (_)       | |               | | (_)            
| |_| |__  _ _ __ __| |  ___  ___  ___| |_ _  ___  _ __  
| __| '_ \| | '__/ _` | / __|/ _ \/ __| __| |/ _ \| '_ \ 
| |_| | | | | | | (_| | \__ \  __/ (__| |_| | (_) | | | |
 \__|_| |_|_|_|  \__,_| |___/\___|\___|\__|_|\___/|_| |_|
                                                         
                                                          -->
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

<!--   __                 _   _                     _   _             
 / _|               | | | |                   | | (_)            
| |_ ___  _   _ _ __| |_| |__    ___  ___  ___| |_ _  ___  _ __  
|  _/ _ \| | | | '__| __| '_ \  / __|/ _ \/ __| __| |/ _ \| '_ \ 
| || (_) | |_| | |  | |_| | | | \__ \  __/ (__| |_| | (_) | | | |
|_| \___/ \__,_|_|   \__|_| |_| |___/\___|\___|\__|_|\___/|_| |_|
                                                                 
                                                                  -->

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

<!--   __ _  __ _   _                     _   _             
 / _(_)/ _| | | |                   | | (_)            
| |_ _| |_| |_| |__    ___  ___  ___| |_ _  ___  _ __  
|  _| |  _| __| '_ \  / __|/ _ \/ __| __| |/ _ \| '_ \ 
| | | | | | |_| | | | \__ \  __/ (__| |_| | (_) | | | |
|_| |_|_|  \__|_| |_| |___/\___|\___|\__|_|\___/|_| |_|
                                                       
                                                        -->
        <div class="row m-0 p-0 my-blog d-flex flex-column align-items-center ">
            <div class="col-12 d-flex flex-column justify-content-start align-items-center my-title ">
                <strong>TALES FROM THE BARBER SHOP</strong>
                <h2>Recent Blog Posts</h2>
            </div>
            <div class="row my-blog-2 d-flex justify-content-center align-items-center mt-5">
                <div class="col-4 d-flex flex-column align-items-center justify-content-center ">
                    <img class="img-fluid" src="../../public/avadabarbers-second-blog-700x441.jpg" alt="@">
                    <h4 class="mt-5 mb-4">Avada Barbers Now Open</h4>
                    <p class="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, facilis.</p>
                </div>
                <div class="col-4 d-flex flex-column align-items-center justify-content-center ">
                    <img class="img-fluid" src="../../public/avadabarbers-choosing-blog-700x441.jpg" alt="@">
                    <h4 class="mt-5 mb-4">Choosing The Right Barber</h4>
                    <p class="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, facilis.</p>
                </div>
                <div class="col-4 d-flex flex-column align-items-center justify-content-center ">
                    <img class="img-fluid" src="../../public/avadabarbers-ourservice-blog-700x441.jpg" alt="@">
                    <h4 class="mt-5 mb-4">Quick Service Guide</h4>
                    <p class="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, facilis.</p>
                </div>
            </div>
            <div class="col-3 d-flex justify-content-center align-items-center ">
                <div class="mt-5   my-btn">
                    <strong class="text-center ">READ MORE FROM OUR BLOG</strong>
                </div>
            </div>
        </div>

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

/* --------------------------------------------------------------------------- */

.my-services{

    height: 920px;

    background-color: white;

    strong{
        color: #be9359;
    }

    h2{
        font-size: 65px;
        font-family: "Abril Fatface" , serif;
        color: #b1b1b1;
    }


    .my-triangle-black{
        filter: invert(96%) sepia(3%) saturate(1669%) hue-rotate(169deg) brightness(99%) contrast(92%);

        bottom: 0;
        left: 0;
        right: 0;
    }

}

.my-services-2{
    width: 65%;


    img{
        height: 110px;
    }

    h4{
        font-family: "Abril Fatface" , serif;
        color: #be9359;
        font-size: 30px;
    }

    p{
        color: #161718;
        width: 200px;
    }

    
}

/* --------------------------------------------------------------------------- */

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

/* --------------------------------------------------------------------------- */

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


/* --------------------------------------------------------------------------- */

.my-blog{

height: 1080px;

background-color: #f5f5f5;

.my-title{
    margin-top: 250px;
}

strong{
    color: #be9359;
}

h2{
    font-size: 65px;
    font-family: "Abril Fatface" , serif;
    color: #b1b1b1;
}

}

.my-blog-2{
width: 65%;


img{
    height: 220px;
}

h4{
    font-family: "Abril Fatface" , serif;
    color: #be9359;
    font-size: 25px;

    height: 50px;
}

p{
    color: #161718;
    width: 200px;
}


}


/* --------------------------------------------------------------------------- */

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

        color: white;

    }
    
}

.my-btn-dark{
    border: 2px solid #be9359;

    color: #be9359;

    padding: 15px 40px; 
    cursor: pointer;

    transition: ease .4s;
}

.my-btn-dark:hover{
    background-color: #be9359;
    
    strong{

        color: #161718;

    }
    
}

</style>