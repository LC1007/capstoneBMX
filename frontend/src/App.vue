<template>
  <div>
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/NavbarComp.vue'
export default{
  components:{
    Navbar
  }
}

</script>

