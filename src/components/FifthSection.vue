<script>

export default {

    name: 'FifthSection',

    props: {
        item: Object,
    },

}

</script>

<template>

<div class="row p-0 my-blog d-flex flex-column align-items-center ">
    <div class="col-12 d-flex flex-column justify-content-start align-items-center my-title ">
        <strong>TALES FROM THE BARBER SHOP</strong>
        <h2>Recent Blog Posts</h2>
    </div>
    <div class="row my-blog-2 d-flex justify-content-center align-items-center mt-5">
        <div class="col-4 d-flex flex-column align-items-center justify-content-center" v-for="currentBlog in item">
            <img class="img-fluid" :src="currentBlog.img" alt="@">
            <h4 class="mt-5 mb-4">{{ currentBlog.name }}</h4>
            <p class="text-center">{{ currentBlog.description }}</p>
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
    text-align: center;

    height: 50px;
}

p{
    color: #161718;
    width: 200px;
}


}

</style>