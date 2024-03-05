<template>
  <nav class="navmenu">
    <ul>
      <router-link to="/" class="nav-link">Home</router-link>  
      <router-link to="/about" class="nav-link">About</router-link>  
      <router-link to="/Resume" class="nav-link">Resume</router-link>  
      <router-link to="/Projects" class="nav-link">Projects</router-link>  
      <router-link to="/testimonials" class="nav-link">Testimonial</router-link>  
      <router-link to="/contact" class="nav-link">Contact</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.navmenu ul {
  display: flex;
  justify-content: center;
  gap: 100px;
}
.navmenu {
  color: #fff;
  background: black;
  height: 100px;
  padding: 30px;
}
.nav-link {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease; /* Add transition effect */
}

.nav-link:hover {
  color: #0bb8f1e7; /* Change color on hover */
}

@media (max-width: 750px) {
  .nav a {
    font-size: 100px;
    text-align: center;
  }
}
</style>
