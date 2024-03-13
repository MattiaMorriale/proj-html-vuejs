<script>

import {store} from '../store.js'

export default {

    name: 'AppHeader',

    data() {
        return{
            store,

            hover: '',
        }
    },

}

</script>

<template>

    <div class="container-fluid p-0">
        <div class="col-12 bg-img d-flex align-items-center flex-column ">

            <div class="row d-flex justify-content-between pt-4 my-nav m-0 ">
                <div class="col-3 d-flex align-items-center justify-content-start p-0 ">
                    <img src="../../public/avadabarbers-logo-x2.png" alt="@">
                </div>
                <div class="col-1 d-flex align-items-center justify-content-center gap-4 fs-5 ">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-bars burger-input" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></i>
                    <div :style="{'background-image': 'url('+ hover +')'}"  class="offcanvas offcanvas-end w-100 my-offcanvas bg-black" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header d-flex justify-content-end ">
                            <div class="close-hov" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-xmark"></i></div>
                        </div>
                        <div class="offcanvas-body d-flex flex-column align-items-center justify-content-center ">
                            <ul class="list-unstyled text-center" >
                                <li class="py-4 fs-3" v-for="currentLinks in store.burgerLinks" v-on:mouseover="hover = currentLinks.bgImg" v-on:mouseout="hover = 0">{{ currentLinks.type }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row d-flex justify-content-between my-hero m-0 ">
                <div class="col-6 d-flex flex-column justify-content-center p-0 ">
                    <h1>Barber Shop</h1>
                    <hr>
                    <p class="my-3 ">The Pinnacle of Male Grooming</p>
                    <div class="my-btn">
                        <strong>LEARN MORE</strong>
                    </div>
                </div>
                <div class="col-6 d-flex justify-content-end  p-0 ">
                    <img class="img-fluid " src="../../public/avadabarbers_hero_focalmirror.png" alt="@">
                </div>
            </div>

        </div>
    </div>

</template>

<style>

.bg-img{
    height: 920px;
    background-image: url(../../public/avadabarbers-homepage-hero-bg.jpg);
    background-size: cover;

    .my-nav{
        height: 100px;

        width: 65%;

        img{
            height: 60px;
            object-fit: contain;
        }

        .burger-input{
            color: #be9359;
        }

        i{
            cursor: pointer;
            font-size: 25px;

            &:hover{
                color: #be9359;
            }
        }

        .my-offcanvas{
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;

            .burger-input{
                color: #be9359;
            }
    
            ul{
    
                width: 100%;
    
                li:nth-of-type(1) {
                    color: #be9359;

                }
    
                li{
                    cursor: pointer;
    
                    &:hover{
                        color: #be9359;
                    }
                }
            }
        }



        .close-hov{
            transition: linear .1s;

            i{
                font-size: 30px;
            }
            
            &:hover{
                color: #be9359;
            }
        }


    }

    .my-hero{

        width: 65%;

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
            opacity: .3;

            font-family: "Encode Sans Expanded", sans-serif;
            letter-spacing: 3px;
            font-size: 13px;
        }
        
        img{
            height: 750px;
        }

        .my-btn{
            border: 2px solid #be9359;

            color: #be9359;

            width: 190px;

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

}

</style>