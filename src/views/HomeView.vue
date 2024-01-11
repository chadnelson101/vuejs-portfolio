<template>
  <div id="home">
      <h2 class="head">{{ Portfolio.title}}</h2>
      <h3 class="head1">{{ Portfolio.name }}</h3>
      <h4 class="head2">{{ Portfolio.is }}</h4>
      <img class="img" :src="Portfolio.image" >
  </div>
  <div id="btn">
    <a href="https://drive.google.com/file/d/15Y7dzuXFWqXgUVhp9B3UYvy1eziFW8TD/view?usp=sharing"><button class="btn">Download CV</button></a>
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
    axios.get('http://localhost:3000/Portfolio')
      .then(res => {
        console.log(res.data);
        this.Portfolio = res.data[0];
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
  min-height: 100vh;
  position: relative;
}
circle {
  fill: #fff; 
  animation-name: snowing;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
}

/* Target specific circles with nth-child */
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
  margin-left: -75%;
}

.head1 {
  font-size: 70px;
  color: #fff;
  margin-left: -65%;
}

.head2 {
  font-size: 70px;
  color: #fff;
  margin-left: -30%;
}
.head{
    animation-name: animate__bounceInLeft;
    animation-duration: 2s;
    
}
@keyframes animate__bounceInLeft{
    0% {
        opacity: 0;
        -webkit-transform: translateX(-2000px);
       }
}
.head1{
    animation-name: animate__bounceInLeft;
    animation-duration: 3s;
    
}
@keyframes animate__bounceInLeft{
    0% {
        opacity: 0;
        -webkit-transform: translateX(-2000px);
       }
}
.head2{
    animation-name: animate__bounceInLeft;
    animation-duration: 4s;
    
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
  margin-left: -50%;
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

@media (max-width: 751px) {
  .head {
    font-size: 30px;
    margin-left: 10%;
    margin-top: 20%;
  }

  .head1 {
    font-size: 30px;
    margin-left: 8%;
    margin-top: 18%;
  }

  .head2 {
    font-size: 30px;
    margin-left: 10%;
    margin-top: 20%;
  }

  .img {
    width: 250px;
    margin-left: -20%;
    margin-top: 20%;
    position: absolute;
  }
  .btn{
    margin-left: 7%;
    margin-top: 10%;
  }
}
</style>