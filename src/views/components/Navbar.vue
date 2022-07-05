<template>
  <div data-collapse="small" data-animation="default" data-duration="400" class="navbar w-nav">
    <div class="bg-primary ">
    
    <div class="container margin-center  bg-black ">
        
      <div class="w-full flex flex-row pb-8">
        <div class="brand">
        
        </div>
        <router-link to="/" class='brand w-nav-brand w--current flex-grow inline text-xl text-gray-200 font-bold no-underline relative ' style="min-height:120px">
           <img src="@/assets/images/doodlemancer_logo_stroke.svg" style="max-height:80px;z-index:10" class="mt-8 absolute px-6" />
        </router-link>

 
 
       <div class="hidden lg:inline-block text-black  " >
          
         <UpperNav
          v-bind:web3Plug="web3Plug"
          />

         
       </div>


       <div class="inline-block lg:hidden  pull-right p-4"  >

         <button @click="showResponsiveMenu=!showResponsiveMenu" class="flex items-right px-3 py-2 border text-black border-white hover:text-white hover:border-white">
         
          <img src="@/assets/images/menu_bars.png" style="height:40px" />
          <i class="fas fa-caret-down "></i>
        </button>

        <div v-if="showResponsiveMenu" class="w-full absolute left-0 block flex-grow lg:flex lg:items-center lg:w-auto bg-gray-200" style="z-index: 10;">
          <div class="text-sm lg:flex-grow">
             <AccordionNav 
             v-bind:web3Plug="web3Plug"
             />

          </div>

        </div>

       </div>

      </div>

    </div>
    </div>
  </div>
</template>


<script>
import UpperNav from './UpperNav.vue';
import AccordionNav from './AccordionNav.vue';

import FrontendHelper from '../../js/frontend-helper.js';

export default {
  name: 'Navbar',
  props: ['web3Plug'],
  components: {UpperNav,AccordionNav},
  data() {
    return {
      showResponsiveMenu: false,
    }
  },
  mounted(){



  },
  methods: {
 


  }
}
</script>