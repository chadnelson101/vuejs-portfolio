<template>
   <nav class="navmenu">
     <router-link to="/">Home</router-link>  |
     <router-link to="/about">About</router-link>  |
     <router-link to="/Resume">Resume</router-link>  |
     <router-link to="/Projects">Projects</router-link>  |
     <router-link to="/testimonials">Testimonial</router-link>  |
     <router-link to="/contact">Contact</router-link>
    </nav>
</template>

<script>
export default {
   
}
</script>

<style scoped>
.navmenu a {
    margin-top: 20%;
    gap: 20px;
    justify-content: space-between;
}
.navmenu{
    color: #fff;
    background: black;
    height: 100px;
    padding: 30px;
}
nav a {
  font-weight: bold;
  color: #fff;
}

nav a.router-link-exact-active {
  color: #42b983;
}
@media (max-width: 750){
  .nav a{
    font-size: 100px;
    text-align: center;
  }
}
</style>