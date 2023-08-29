<template>
  <div>
    <Navbar/>
    <router-view/>
    <Login/>
  </div>
</template>

<script>
import Login from '@/components/LoginComp.vue'
import Navbar from '@/components/NavbarComp.vue'
export default{
  components:{
    Login,
    Navbar
  }
}

</script>

