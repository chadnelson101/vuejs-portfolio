<template>
  <div class="projects"  v-for="Projects in Projects" :key="Projects">
    <h1>{{ Projects.heading }}</h1>
  <div class="col">
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
</div>


<div class="col1">
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
  height: 130vh;
}
 h1{
  color: #008bf8;
}
.col{
  display: flex;
  justify-content: center;
  gap: 200px;
  margin-top: 3%;
}
.col1{
  display: flex;
  justify-content: center;
  gap: 200px;
  margin-top: 5%;
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
 background-color: #008bf8;
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

.card:hover .card-button {
 transform: translate(-50%, 50%);
 opacity: 1;
}
@media (max-width: 750px){
  .projects{
    height: max-content; 
}
.projects .col{
  margin-left: -10%;
}
 h1{
  color: #008bf8;
}
.col{
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  margin-top: 3%;
}
.col1{
  flex-direction: column;
  justify-content: center;
  gap: 35px;
  margin-top: 5%;
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
 margin-left: 33%;
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
 background-color: #008bf8;
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
}

.card:hover {
 border-color: rgba(137, 5, 158, 0.2);
 box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card:hover .card-button {
 transform: translate(-50%, 50%);
 opacity: 1;
}
}

@media (min-width: 470px) {
h1{
  color: #008bf8;
}
 }
</style>