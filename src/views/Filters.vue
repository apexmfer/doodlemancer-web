<template>

<div>

    

   <div class="section bg-primary border-b-4 border-black px-0 lg:px-1">
 
     <div class=" ">
        <Navbar         
       />
     </div>

 



     <div class="container margin-center bg-gray-100" style="">
       <div class="hero-text w-row relative" style="min-height:300px;" >

         
          <img src="@/assets/images/blob1.png" class="absolute" style="top:-36px;left:-8px;z-index:0"></img>
           <img src="@/assets/images/blob2.png" class="absolute" style="top:-36px;right:-20px;z-index:0"></img>

             <img src="@/assets/images/prettybad_wen.gif" class="absolute" style="width:140px;top:-26px;right:70px;z-index:1"></img>

           <img src="@/assets/images/gm_mfers2.gif" class="absolute" style="width:140px;top:86px;right:20px;z-index:0"></img>
         
       </div>
     


       



     </div>
   </div>
 

    <div class="section bg-primary border-b-4 border-black px-0 lg:px-1 py-2">
       <div class="container margin-center bg-black pt-8" style="">
         
         <div class=" grid grid-flow-col px-8 md:px-24">
         <div class="  p-4">
           
         </div>
         <div class=" ">

           <div>


               <img src="@/assets/images/custom_filter_text.png" />

           </div>
           <div class="py-8">
             <a href="/filters" >
                  <img src="@/assets/images/btn_coming_soon.png" class="margin-center" />
             </a>

           </div>
          ...
         </div>
       </div>
     </div>
   </div>


  


   

  <Footer/>

</div>
</template>


<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'Filters',
  props: [],
  components: {Navbar,Footer},
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
