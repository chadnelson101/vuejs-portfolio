<template>
    <footer>
  <div class="footercontainer">
    <div class="socialicons">
      <a href="https://www.instagram.com/chaddo_stevens?igsh=MWFraG05Mmt3MDhzNg=="><i class='bx bxl-instagram'></i></a>
      <a href="https://www.facebook.com/profile.php?id=100086536845398"><i class='bx bxl-facebook' ></i></a>
      <a href="https://x.com/chadnelson279?t=JnPtS7D9So5EWUUvHkfuSQ&s=09"><i class='bx bxl-twitter' ></i></a>
      <a href=""><i class='bx bxl-youtube' ></i></a>
    </div>  
    <div>
      <div class="footerbottom">
        <p>Copyright &copy;2023; designed by <span class="designer">Chad</span></p>
      </div>
    </div>
  </div>
  
  </footer>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
  }
  footer{
    background-color: #111;
    width: 100%;
}
.footercontainer{
  width: 100%;
  padding: 0;
}
.socialicons{
  display: flex;
  justify-content: center;
}
.socialicons a{
  text-decoration: none;
  padding: 10px;
  background-color: white;
  margin: 10px;
  border-radius: 50%;
}
.socialicons a i{
  font-size: 2rem;
  color: black;
  opacity: 0.9;
}
.socialicons a:hover{
  background-color: #111;
  transition: 0.5s;
}
.socialicons a:hover i{
  color: white;
  transition: 0.5s;
}
.footerbottom{
  background-color: #000;
  padding: 20px;
  text-align: center;
}
.footerbottom p{
  color: white;
}
.designer{
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
  margin: 0px 5px;
} 
@media (max-width: 700px){
  footer{
  /* position: fixed;
  bottom: -0%; */
  }
}
  </style>