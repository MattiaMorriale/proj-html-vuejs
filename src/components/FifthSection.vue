<script>

export default {
    name: 'FifthSection'
}

</script>

<template>

<div class="row p-0 my-blog d-flex flex-column align-items-center ">
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

</template>

<style>

.my-blog{

height: 1080px;

background-color: #f5f5f5;

margin: 0 0 580px 0;

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

</style>