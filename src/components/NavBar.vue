<template>
    <div class="nav">
   <nav class="navmenu">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>|
        <router-link to="/Resume">Resume</router-link>|
        <router-link to="/Projects">Projects</router-link>|
        <router-link to="/testimonials">Testimonial</router-link>|
        <router-link to="/contact">Contact</router-link>|
    </nav>
</div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
.nav a {
    margin-top: 10%;
}
.navmenu{
    color: #fff;
    background: black;
    height: 100px;
}
nav a {
  font-weight: bold;
  color: #fff;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>