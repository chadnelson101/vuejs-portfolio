<template>
  <nav class="navmenu" id="navmenu">
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


@media (min-width: 1000px) and (max-width: 1200px) {
  #navmenu ul {
    justify-content: center;
    gap: 80px;
  }
}

@media (min-width: 900px) and (max-width: 1000px) {
  .navmenu{
    font-size: 15px;
  }
  #navmenu ul {
  justify-content: center;
  gap: 70px;
}
}

@media (min-width: 800px) and (max-width: 900px) {
  .navmenu{
    font-size: 15px;
  }
  #navmenu ul {
  justify-content: center;
  gap: 60px;
}
}

@media (min-width: 700px) and (max-width: 800px) {
  .navmenu{
    font-size: 14px;
  }
  #navmenu ul {
  justify-content: center;
  gap: 50px;
}
}

@media (min-width: 600px) and (max-width: 700px) {
  .navmenu{
    font-size: 14px;
  }
  #navmenu ul {
  justify-content: center;
  gap: 40px;
}
}

@media (min-width: 500px) and (max-width: 600px) {
  .navmenu{
    font-size: 14px;
  }
  #navmenu ul {
  justify-content: center;
  gap: 20px;
}
}

@media (min-width: 400px) and (max-width: 500px) {
  .navmenu{
    font-size: 10px;
  }
  #navmenu ul {
  justify-content: center;
  gap: 20px;
}
}

@media (min-width: 300px) and (max-width: 400px) {
  .navmenu{
    font-size: 8px;
    height: 0px;
  }
  #navmenu ul {
  justify-content: center;
  gap: 14px;
  margin-left: -33px;
}
}
</style>
