<template>
  <div class="projects"  v-for="Projects in Projects" :key="Projects">
    <h1>{{ Projects.heading }}</h1>
    <div class="grid">
    <div class="card">
  <div class="card-details">
    <p class="text-title">{{ Projects.project1 }}</p>
    <img class="text-body" :src="Projects.image1" alt="">
  </div>
  <button class="card-button">
    <a href="https://github.com/chadnelson101/netflix.git" target="_blank"><i class='bx bxl-github' ></i></a>
    <a href="https://animated-sfogliatella-8a875a.netlify.app" target="_blank"><i class='bx bxl-netlify' ></i></a>
  </button>
</div>
  <div class="card">
  <div class="card-details">
    <p class="text-title">{{ Projects.project2 }}</p>
    <img class="text-body" :src="Projects.image2" alt="">
  </div>
  <button class="card-button">
    <a href="https://github.com/chadnelson101/e-commerce-website.git" target="_blank"><i class='bx bxl-github' ></i></a>
    <a href="https://rad-starlight-740218.netlify.app" target="_blank"><i class='bx bxl-netlify' ></i></a>
  </button>
</div>
  <div class="card">
  <div class="card-details">
    <p class="text-title">{{ Projects.project3 }}</p>
    <img class="text-body" :src="Projects.image3" alt="">
  </div>
  <button class="card-button">
    <a href="https://github.com/chadnelson101/sneak-peak.git" target="_blank"><i class='bx bxl-github' ></i></a>
    <a href="https://effortless-bunny-a20005.netlify.app" target="_blank"><i class='bx bxl-netlify' ></i></a>
  </button>
</div>


<div class="card">
  <div class="card-details">
    <p class="text-title">{{ Projects.project4 }}</p>
    <img class="text-body" :src="Projects.image4" alt="">
  </div>
  <button class="card-button">
    <a href="https://github.com/chadnelson101/calculator2.git" target="_blank"><i class='bx bxl-github' ></i></a>
    <a href="https://strong-syrniki-847cb8.netlify.app" target="_blank"><i class='bx bxl-netlify' ></i></a>
  </button>
</div>
  <div class="card">
  <div class="card-details">
    <p class="text-title">{{ Projects.project5 }}</p>
    <img class="text-body" :src="Projects.image5" alt="">
  </div>
  <button class="card-button">
    <a href="https://github.com/chadnelson101/ag-to-days.git" target="_blank"><i class='bx bxl-github' ></i></a>
    <a href="https://bright-dragon-e11a5e.netlify.app" target="_blank"><i class='bx bxl-netlify' ></i></a>
  </button>
</div>
  <div class="card">
  <div class="card-details">
    <p class="text-title">{{ Projects.project6 }}</p>
    <img class="text-body" :src="Projects.image6" alt="">
  </div>
  <button class="card-button">
    <a href="https://github.com/chadnelson101/week2project.git" target="_blank"><i class='bx bxl-github'></i></a>
    <a href="https://magnificent-starlight-48ff3b.netlify.app" target="blank"><i class='bx bxl-netlify' ></i></a>
  </button>
</div>
</div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'my-Portfolio',
  data(){
    return {
      Projects:[]
    }
  },
  mounted() {
      axios.get('https://chadnelson101.github.io/DATA/')
          .then(res =>{
            console.log(res.data);
            this.Projects = res.data.Projects
          })
          .catch(error => console.error('Error fetching data:', error));

    },
  }
  </script>

<style scoped>
.projects{
  height: 110vh;
}
 h1{
  color:black;
}
.grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-top: 5%;
  margin-left: 10%;
}
.card {
 width: 190px;
 height: 260px;
 border-radius: 20px;
 position: relative;
 padding: 1.8rem;
 border: 2px solid #c3c6ce;
 transition: 0.5s ease-out;
 overflow: visible;
 box-shadow: 0 5px 5px 5px rgba(137, 5, 158, 0.2);
}

.card-details {
 color: black;
 height: 100%;
 gap: .5em;
 display: grid;
 place-content: center;
}

.card-button {
 transform: translate(-50%, 125%);
 width: 60%;
 border-radius: 1rem;
 border: none;
 background-color: white;
 color: #fff;
 font-size: 2rem;
 padding: .5rem 1rem;
 position: absolute;
 left: 50%;
 bottom: 0;
 opacity: 0;
 transition: 0.3s ease-out;
 display: flex;
 justify-content: space-between;
}

.text-body {
 color: rgb(134, 134, 134);
 width: 190px;
 height: 140px;
}

.text-title {
 font-size: 1.5em;
 font-weight: bold;
 color: #fff;
}

.card:hover {
 border-color: rgba(137, 5, 158, 0.2);
 box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}
.bxl-github:before {
    color: black;
}
.bxl-netlify:before {
  color: black;
}
.card:hover .card-button {
 transform: translate(-50%, 50%);
 opacity: 1;
}

@media (max-width: 500px){
  .projects{
    height: 190vh;
  }
  .grid[data-v-6375b3f9][data-v-6375b3f9][data-v-6375b3f9][data-v-6375b3f9] {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    position: relative;
    left: 75px;
    gap: 59px;
}
  .chad[data-v-c1cfdf9a] {
    grid-template-columns: repeat(3, 1fr);
    position: relative;
    left: 0;
    place-items: center;
}
  .card {
    width: 178px;
    height: 226px;
    border-radius: 20px;
    position: relative;
    padding: 1.8rem;
    border: 2px solid #c3c6ce;
    transition: 0.5s ease-out;
    overflow: visible;
    box-shadow: 0 5px 5px 5px rgba(137, 5, 158, 0.2);
}
.col[data-v-6375b3f9] {
    display: flex;
    justify-content: center;
    gap: 128px;
    margin-top: 3%;
}
.col1[data-v-6375b3f9] {
    display: flex;
    justify-content: center;
    gap: 128px;
    margin-top: 5%;
}
.frontSide img[data-v-c1cfdf9a] {
    width: 183px;
    height: 300px;
    margin-top: -16%;
}
.frontSide[data-v-c1cfdf9a], .backSide[data-v-c1cfdf9a] {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 72%;
    height: 99%;
    backface-visibility: hidden;
    border-radius: 1rem;
    color: white;
    box-shadow: 0 0 0.3em rgba(255, 255, 255, 0.5);
    font-weight: 700;
    gap: 10px;
}
}

@media (min-width: 751px) and (max-width: 1000px) {
  .grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 5%;
    margin-left: 10%;
  }
  .projects{
    height: 175vh;
  }
}

@media (max-width: 900px){
  .grid[data-v-6375b3f9][data-v-6375b3f9] {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    position: relative;
    left: 0px;
    gap: 27px;
}
  .projects{
    height: 175vh;
  }
  h1 {
    left: 146px;
    color: black;
    position: relative;
    font-size: 46px;
    left: 16px;
}
}

/* @media (min-width: 700px) {
  .grid[data-v-6375b3f9][data-v-6375b3f9] {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    position: relative;
    left: 0px;
    gap: 27px;
}
  .projects{
    height: 175vh;
  }
  h1 {
    left: 146px;
    color: black;
    position: relative;
    font-size: 46px;
    left: 16px;
}
} */

@media (max-width: 600px){
  .projects{
    height: 180vh;
  }
  .grid[data-v-6375b3f9] {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
    position: relative;
    left: -22px;
}
}

@media (max-width: 500px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    margin-top: 5%;
    margin-left: 10%;
    position: relative;
    left: 74px;
}
  .projects{
    height: 328vh;
  }
  h1{
    position: relative;
    left: 1px;
  }
}

@media (max-width: 400px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    margin-top: 5%;
    margin-left: 10%;
    position: relative;
    left: 35px;
}
  .projects{
    height: 328vh;
  }
  h1 {
    position: relative;
    left: 2px;
}
h1[data-v-6375b3f9] {
    position: relative;
    left: 2px;
    font-size: 32px;
}
.grid[data-v-6375b3f9][data-v-6375b3f9][data-v-6375b3f9][data-v-6375b3f9][data-v-6375b3f9] {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    position: relative;
    left: 40px;
    gap: 59px;
}
}

@media (max-width: 300px) {
  .projects {
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
}
.card {
    width: 171px;
    height: 223px;
    position: relative;
    left: -100px;
}
  .projects{

  }
  h1{
    color: black;
    position: relative;
    left: 6px;
}
h1[data-v-6375b3f9] {
    color: black;
    position: relative;
    left: 6px;
    font-size: 29px;
}
.grid[data-v-6375b3f9][data-v-6375b3f9][data-v-6375b3f9][data-v-6375b3f9][data-v-6375b3f9] {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    position: relative;
    left: 103px;
    gap: 59px;
}
}
</style>