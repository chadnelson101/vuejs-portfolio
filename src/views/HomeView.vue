<template>
  <div class="body" v-for="Portfolio in Portfolio" :key="Portfolio">
    <div id="home">
      <h2 class="head" id="head">{{ Portfolio.title}}</h2>
      <h3 class="head1" id="head1">{{ Portfolio.name }}</h3>
      <h4 class="head2" id="head2">{{ Portfolio.is }}</h4>
      <img class="img" id="img" :src="Portfolio.image" >
    </div>
  </div>
  <div id="btn">
    <a href="https://drive.google.com/file/d/15Y7dzuXFWqXgUVhp9B3UYvy1eziFW8TD/view?usp=sharing" target="_blank"><button class="btn" id="but">Download CV</button></a>
  </div>
  <svg class="svg-snowscene" xmlns="http://www.w3.org/2000/svg">
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
  <circle />
</svg>
</template>

<script>
import axios from 'axios';

export default {
  name: 'my-Portfolio',
  data() {
    return {
      Portfolio: []
    };
  },
  mounted() {
    axios.get('https://chadnelson101.github.io/DATA/')
      .then(res => {
        console.log(res.data);
        this.Portfolio = res.data.Portfolio;
      })
      .catch(error => console.error('Error fetching data:', error));

    const getRandom = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    const letItSnow = () => {
      const snowflakes = document.querySelectorAll('circle');
      snowflakes.forEach((snowflake) => {
        snowflake.setAttribute('cx', getRandom(1, 100) + '%');
        snowflake.setAttribute('cy', '-' + getRandom(1, 100));
        snowflake.setAttribute('r', getRandom(1, 3));
      });
    };

    letItSnow();
  }
}
</script>

<style scoped>
.svg-snowscene {
  width: 100%;
  height: 100%;
}
#home{
  min-height: 65vh;
  position: relative;
}
circle {
  fill: #fff; 
  animation-name: snowing;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
}

circle:nth-child(2n) {
  animation-delay: 1.5s;
}

circle:nth-child(3n) {
  animation-delay: 2.3s;
  animation-duration: 3.3s;
}

circle:nth-child(4n) {
  animation-delay: 0.8s;
  animation-duration: 3.2s;
}

circle:nth-child(5n) {
  animation-delay: 2.8s;
}

@keyframes snowing {
  100% { fill-opacity: 1o; }
  0% { 
    fill-opacity: 0;
    transform: translateY(100%);
  }
}

.head {
  font-size: 70px;
  color: #fff;
  margin-left: -63%;
  animation-name: animate__bounceInLeft;
  animation-duration: 2s;
}

.head1 {
  font-size: 70px;
  color: #fff;
  margin-left: -60%;
  animation-name: animate__bounceInLeft;
  animation-duration: 3s;
}

.head2 {
  font-size: 60px;
  color: #fff;
  margin-left: -35%;
  animation-name: animate__bounceInLeft;
  animation-duration: 4s;
}
@keyframes animate__bounceInLeft{
    0% {
        opacity: 0;
        -webkit-transform: translateX(-2000px);
       }
}
@keyframes animate__bounceInLeft{
    0% {
        opacity: 0;
        -webkit-transform: translateX(-2000px);
       }
}

@keyframes animate__bounceInLeft{
    0% {
        opacity: 0;
        -webkit-transform: translateX(-2000px);
       }
}
.img {
  width: 500px;
  margin-top: -100%;
  margin-left: 60%;
  border-radius: 50%;
  box-shadow: 0 5px 5px 5px rgba(82, 2, 94, 0.2);
  animation: animate 5s ease-in-out infinite;
  transition: all 1s ease-in-out;
}

@keyframes animate {
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
}
.btn {
  color: aqua;
  color: aqua;
  perspective: 1000px;
  padding: 1em 1em;
  background: linear-gradient(var(--color1), var(--color2));
  border: 4px solid rgb(53, 47, 47);
  outline: none;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #fff;
  text-shadow: 0 10px 10px #000;
  cursor: pointer;
  transform: rotateX(70deg) rotateZ(30deg);
  transform-style: preserve-3d;
  transition: transform 0.5s;
  margin-left: -4%;
}

.btn::before {
  content: "";
  width: 100%;
  height: 15px;
  background-color: var(--color2);
  position: absolute;
  bottom: 0;
  right: 0;
  transform: rotateX(90deg);
  transform-origin: bottom;
}

.btn::after {
  content: "";
  width: 15px;
  height: 100%;
  background-color: var(--color1);
  position: absolute;
  top: 0;
  right: 0;
  transform: rotateY(-90deg);
  transform-origin: right;
}

.btn:hover {
  transform: rotateX(30deg) rotateZ(0);
}

@media (min-width: 1200px) and (max-width: 1300px){
  .body{
    height: 85vh;
  }
  #btn{
    margin-top: 10%;
  }
  #head{
    font-size: 50px;
  }
  #head1{
    font-size: 50px;
  }
  #head2{
    font-size: 50px;
  }
#img{
  position: relative;
  margin-top: -30%;
  width: 350px;
  left: -5%;
}
}

@media (min-width: 1000px) and (max-width:1200px){
  #head{
    font-size: 40px;
  }
  #head1{
    font-size: 40px;
  }
  #head2{
    font-size: 40px;
  }
  #img{
    margin-top: -25%;
    width: 300px;
  }
  .body{
    width: 100%;
    height: 70vh;
  }
}

@media (min-width: 900px) and (max-width: 1000px){
  #head{
    font-size: 40px;
    position: relative;
    left: -3%;
    top: 32px;

  }
  #head1{
    font-size: 40px;
    position: relative;
    left: -3%;
    top: 39px;
  }
  #head2{
    font-size: 40px;
    left: -2%;
    position: relative;
    top: 30px;
  }
  #img{
    margin-top: -100%;
    width: 300px;
  }
  .body{
    height: 60vh;
  }
}

@media (min-width: 800px) and (max-width: 900px){
  #head{
    font-size: 35px;
    position: relative;
    left: -3%;
    top: 36px;
  }
  #head1{
    font-size: 35px;
    position: relative;
    left: -3%;
    top: 49px;

  }
  #head2{
    font-size: 35px;
    left: -3%;
    position: relative;
    top: 54px;
  }
  #img{
    width: 300px;
    position: relative;
    top: 35px;
  }
  .body{
    height: 60vh;
  }
}

@media (min-width: 700px) and (max-width: 800px){
  #head{
    font-size: 30px;
    position: relative;
    left: -3%;
    top: 23px;
  }
  #head1{
    font-size: 30px;
    position: relative;
    left: -3%;
    top: 40px;
  }
  #head2{
    font-size: 30px;
    left: -3%;
    position: relative;
    top: 60px;
  }
  #img{
    margin-top: -25%;
    width: 300px;
  }
  .body{
    height: 60vh;
  }
}

@media (min-width: 600px) and (max-width: 700px){
  #head{
    font-size: 27px;
    position: relative;
    left: -4%;
    top: 45px;
  }
  #head1{
    font-size: 27px;
    position: relative;
    left: -5%;
    top: 77px;
  }
  #head2{
    font-size: 27px;
    left: -4%;
    position: relative;
    top: 116px;
  }
  #img{
    width: 278px;
    position: relative;
    left: -82px;
    top: -11px;
  }
  .body{
    height: 60vh;
  }
}

@media (min-width: 500px) and (max-width: 600px){
  #head{
    font-size: 25px;
    position: relative;
    left: -3%;
    top: 55px;
  }
  #head1{
    font-size: 25px;
    position: relative;
    left: -3%;
    top: 87px;
  }
  #head2{
    font-size: 25px;
    position: relative;
    top: 114px;
    left: -9px;
  }
  #img{
    position: relative;
    width: 240px;
    left: -64px;
    top: 52px;

  }
  .body{
    height: 60vh;
  }
}

@media (max-width: 500px){
  #head{
    font-size: 21px;
    position: relative;
    margin-left: 4%;
    top: 218px;
  }
  #head1{
    font-size: 21px;
    position: relative;
    margin-left: 4%;
    top: 218px;
  }
  #head2{
    font-size: 21px;
    position: relative;
    top: 215px;
    margin-left: 4px;
  }
  #img{
    width: 171px;
    position: relative;
    top: 18px;
    left: -151px;
  }
  #but{
    margin-left: -1%;
  }
  .body{
    height: 60vh;
  }
}

@media (max-width: 400px){
  #head{
    font-size: 14px;
    position: relative;
    top: 195px;
    margin-left: -10px;
  }
  #head1{
    font-size: 14px;
    position: relative;
    top: 213px;
    margin-left: -11px;
  }
  #head2{
    font-size: 14px;
    position: relative;
    top: 228px;
    margin-left: -6px;
  }
  #img{
    position: relative;
    width: 123px;
    top: 38px;
    left: -118px;
  }
  .body{
    height: 60vh;
  }
  #but{
    margin-left: -1%;
    font-size: 16px;
  }
}

@media (max-width: 300px){
  #head{
    font-size: 14px;
    position: relative;
    top: 195px;
    margin-left: -10px;
  }
  #head1{
    font-size: 14px;
    position: relative;
    top: 213px;
    margin-left: -11px;
  }
  #head2{
    font-size: 14px;
    position: relative;
    top: 228px;
    margin-left: -6px;
  }
  #img{
    position: relative;
    width: 123px;
    top: 38px;
    left: -97px;
  }
  .body{
    height: 60vh;
  }
  #but{
    margin-left: -1%;
    font-size: 16px;
  }
}
</style>