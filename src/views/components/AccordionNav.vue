<template>
  <nav role="navigation" class="w-full m-2 p-2 inline-block bg-primary">
    <div class="w-full lg:w-auto block lg:inline-block" v-for="item in navConfig.dropdowns" :key="item.title">

 
      <div class="lg:hidden">
          <div class="px-2 pt-2 pb-3 sm:px-3">
            <a
            v-for="row in item.rows"
            :key="row.title"
            :href="row.url"
            target="_blank"
            class="block bg-black px-3 py-2 my-2 rounded-md text-base font-medium text-white bg-blue-900 hover:bg-blue-500 focus:outline-none focus:text-white focus:bg-blue-700 transition duration-150 ease-in-out">
            {{row.title}}
          </a>
           </div>
        </div>






  </div>

</nav>
</template>


<script>

import Config from '../config/UpperNav.js'

export default {
  name: 'AccordionNav',
  props: [],
  data() {
    return {
      navConfig: null
    }
  },
  created(){

    this.navConfig = Config;
  },
  methods: {

  }
}
</script>
