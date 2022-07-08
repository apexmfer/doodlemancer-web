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

           <img src="@/assets/images/doodlecrown.svg" class="absolute lg:block" style="width:140px;top:-26px;right:70px;z-index:1"></img>

           <img src="@/assets/images/doodleteeth.svg" class="absolute lg:block" style="width:140px;top:86px;right:20px;z-index:0"></img>
         

       </div>
       <div class="pb-2">

         <div class=" grid grid-cols-2 px-8 md:px-24">

           <div class="mb-8"> 
              

              <a href="https://www.etsy.com/shop/DoodlemancerArt?" target="_blank">
                  <img src="@/assets/images/btn_shopmerch.png" />
              </a>

            </div>
 
            

                <div class="text-center">
                  <a href="https://www.etsy.com/shop/DoodlemancerArt?" target="_blank">
                     <img src="@/assets/images/toadzsheet1.png" style="max-width:200px; margin:0 auto;" />
                  </a>
                     
                </div>

 

        </div>

       </div>


 


     </div>
   </div>

      <div class="section bg-primary border-b-4 border-black " style="min-height:460px">


        <div class="container margin-center">
            <div class=" grid grid-cols-2 px-8 md:px-16  py-8 lg:py-2">

              <div class="  ">
                    <img src="@/assets/images/FreeWallpaperArtArrow.png"  class="margin-center"/>
            </div>
          
            <div class="">

                 <a class="m-4" href="/downloads/wallpaper1.png" target="_blank">
                    <img class="my-8" src="@/assets/images/wallpapersample.jpg" />
                  </a>   
                  

                  <a class="m-4" href="/downloads/wallpaper1.png" target="_blank">
                
                      <img class="absolute  hidden lg:block"  src="@/assets/images/download_btn.png" style="max-width:400px" />
    
                  </a>   
    

            </div>
          </div>
        </div>



   </div>


    <div class="section hidden  bg-primary border-b-4 border-black px-0 lg:px-1 py-2">
       <div class="container margin-center bg-black pt-8" style="">
         
         <div class=" grid grid-cols-2 px-8 md:px-24">
         <div class="  p-4">
            
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
