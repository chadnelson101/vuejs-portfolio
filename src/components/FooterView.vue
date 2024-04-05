<template>
    <footer>
  <div class="footercontainer">
    <div class="socialicons">
      <a href=""><i class='bx bxl-linkedin-square'></i></a>
      <a href="https://github.com/chadnelson101" target="_blank"><i class='bx bxl-github' ></i></a>
    </div>  
    <div>
      <div class="footerbottom">
        <p>Copyright &copy;2024; designed by <span class="designer">Chad</span></p>
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
  }
  footer{
    background-color: #111;
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

/* @media (min-width: 1000px) and (max-width:1200px){
  footer{
    background-color: #111;
    width: 103%;
}
}
@media (min-width: 751px) and (max-width:1200px){
  footer{
    background-color: #111;
    width: 104%;
}
}

@media (min-width: 700px){
  footer{
    background-color: #111;
    width: 140%;
}
}

@media (min-width: 500px) and (max-width: 600px) {
  footer{
    background-color: #111;
    width: 121%;
  }
}
@media (min-width: 300px) and (max-width: 400px){
  footer{
    background-color: #111;
    width: 121%;
  }
  .footerbottom p {
    color: white;
    font-size: 12px;
}
.socialicons a {
    text-decoration: none;
    padding: 1px;
    background-color: white;
    margin: 10px;
    border-radius: 50%;
}
}

@media (max-width: 400px){
  footer{
    background-color: #111;
    width: 130%;
  }
}

@media (max-width: 300px){
  footer{
    background-color: #111;
    width: 135%;
  }
} */

/* @media (min-width: 700px){
  footer{
    background-color: #111;
    width: 107%;
}
} */

/* @media (min-width: 500px) and (max-width: 600px) {
  footer{
    background-color: #111;
    width: 108%;
  }
} */

/* @media (min-width: 500px) and (max-width: 600px) {
  footer{
    background-color: #111;
    width: 121%;
  }
} */

/* @media (max-width: 300px){
  footer{
    background-color: #111;
    width: 130%;
  }
} */

/* @media (max-width: 400px){
  footer{
    background-color: #111;
    width: 130%;
  }
} */
  </style>