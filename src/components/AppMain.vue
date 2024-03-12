<script>

import FirstSection from '../components/FirstSection.vue'

import SecondSection from '../components/SecondSection.vue'

import ThirdSection from '../components/ThirdSection.vue'

import FourthSection from '../components/FourthSection.vue'

import FifthSection from '../components/FifthSection.vue'

export default {

    name: 'AppMain',

    components: {

        FirstSection,
        SecondSection,
        ThirdSection,
        FourthSection,
        FifthSection,

    }

}

</script>

<template>

    <div class="container-fluid p-0 ">

        <FirstSection></FirstSection>

        <SecondSection></SecondSection>
        
        <ThirdSection></ThirdSection>

        <FourthSection></FourthSection>

        <FifthSection></FifthSection>

    </div>

</template>

<style lang="scss">

@use '../../src/style/sass' as *;

.my-btn{
    border: 2px solid $primarycolor;

    color: $primarycolor;

    padding: 15px 40px; 
    cursor: pointer;

    transition: ease .4s;
}

.my-btn:hover{
    background-color: $primarycolor;
    
    strong{

        color: white;

    }
    
}

.my-btn-dark{
    border: 2px solid $primarycolor;

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