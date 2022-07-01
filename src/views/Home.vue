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

           <img src="@/assets/images/prettybad_wen.gif" class="absolute hidden lg:block" style="width:140px;top:-26px;right:70px;z-index:1"></img>

           <img src="@/assets/images/gm_mfers2.gif" class="absolute hidden lg:block" style="width:140px;top:86px;right:20px;z-index:0"></img>
         
          <img src="@/assets/images/prettybad_wen.gif" class="absolute lg:hidden" style="width:100px;top:-26px;right:70px;z-index:1"></img>

           <img src="@/assets/images/gm_mfers2.gif" class="absolute lg:hidden" style="width:100px;top:66px;right:20px;z-index:0"></img>
         


       </div>
       <div class="pb-2">

         <div class=" grid grid-cols-2 px-8 md:px-24">

           <div>
              <img src="@/assets/images/tech_focused.png" />
            </div>


            <div>
              <img src="@/assets/images/learn_text.png" />
            </div>


        </div>

       </div>



        <div class="pb-16">

            <div class=" grid grid-flow-col px-8 md:px-24">

              <div>
                
                </div>


                <div>
                  <a href="https://www.youtube.com/channel/UCcvgl7v6iO6aK2K1ohJwrEw" target="_blank">
                  <img src="@/assets/images/btn_youtube.png" />
                  </a>
                </div>


            </div>

          </div>



     </div>
   </div>

      <div class="section bg-primary border-b-4 border-black ">


     <div class="container margin-center">
        <div class=" grid grid-cols-2 px-8 md:px-24  py-8 lg:py-2">

          <div class=" hidden lg:block ">
                 <img src="@/assets/images/find_more_alpha.png"  class="margin-center"/>
         </div>
       
         <div class="">

              <div class=" margin-center block " style="width:300px">
           <a href="https://discord.apexmfer.com" target="_blank">
            <div class="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded block lg:mt-24" >
               <img src="@/assets/images/discord-icon.svg" width="40" height="40" class="inline " alt=""> 
               <div class="text-md text-white inline pl-8">Join the Discord</div>
               
               </div>
          </a>
          </div>

         </div>
       </div>
     </div>



   </div>


    <div class="section bg-primary border-b-4 border-black px-0 lg:px-1 py-2">
       <div class="container margin-center bg-black pt-8" style="">
         
         <div class=" grid grid-cols-2 px-8 md:px-24">
         <div class="  p-4">
             <img src="@/assets/images/punk1164_gif_filter.gif" />
         </div>
         <div class=" ">

           <div>


               <img src="@/assets/images/custom_filter_text.png" />

           </div>
           <div class="py-8">
             <router-link to="filters" >
                  <img src="@/assets/images/btn_coming_soon.png" class="margin-center" />
             </router-link>

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
  name: 'Home',
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
