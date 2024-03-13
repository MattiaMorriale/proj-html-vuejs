<script>

export default {
    name: 'SecondSection',

    props: {
        item: Object,
    }
}

</script>

<template>

<div class="row m-0 p-0 my-services position-relative d-flex flex-column align-items-center ">
    <div class="col-12 d-flex flex-column justify-content-start align-items-center my-3  ">
        <strong>Mens Grooming</strong>
        <h2>Services</h2>
    </div>
    <div class="row my-services-2 d-flex justify-content-center align-items-center mt-5">
        <div class="col-4 d-flex flex-column align-items-center justify-content-center" v-for="currentItem in item">
            <img class="img-fluid" :src="currentItem.img" alt="@">
            <h4 class="my-5">{{ currentItem.name }}</h4>
            <p class="text-center">{{ currentItem.description }}</p>
        </div>
    </div>
    <div class="col-3 d-flex justify-content-center align-items-center ">
        <div class="mt-5   my-btn">
            <strong class="text-center ">READ ABOUT OUR SERVICES</strong>
        </div>
    </div>

    <img class="img-fluid position-absolute my-triangle-black p-0 "  src="../../public/triangle.svg" alt="@">
</div>

</template>

<style>

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

</style>