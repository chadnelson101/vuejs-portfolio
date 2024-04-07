<template>
<div class="chad" v-for="Testimonial in Testimonials" :key="Testimonial">
  <div class="myCard">
        <div class="innerCard">
            <div class="frontSide">
              <p class="title"></p>
              <img :src="Testimonial.image1" alt="">
              <p class="img-name">{{ Testimonial.para1 }}</p>
            </div>
            <div class="backSide">
                <p class="title"></p>
            </div>
       </div>
  </div>
  <div class="myCard">
    <div class="innerCard">
            <div class="frontSide">
                <p class="title"></p>
                <img :src="Testimonial.image2" alt="">
                <p class="img-name">{{ Testimonial.para2 }}</p>
            </div>
            <div class="backSide">
                <p class="title"></p>
              </div>
            </div>
          </div>
          
          <div class="myCard">
            <div class="innerCard">
          <div class="frontSide">
              <p class="title"></p>
              <img :src="Testimonial.image3" alt="">
              <p class="img-name">{{ Testimonial.para3 }}</p>
            </div>
          <div class="backSide">
              <p class="title"></p>
          </div>
      </div>
  </div>

            <div class="myCard">
        <div class="innerCard">
          <div class="frontSide">
                <p class="title"></p>
                <img :src="Testimonial.image4" alt="">
                <p class="img-name">{{ Testimonial.para4 }}</p>
            </div>
            <div class="backSide">
                <p class="title"></p>
            </div>
        </div>
        </div>
        <div class="myCard">
    <div class="innerCard">
            <div class="frontSide">
                <p class="title"></p>
                <img :src="Testimonial.image5" alt="">
                <p class="img-name">{{ Testimonial.para5 }}</p>
            </div>
            <div class="backSide">
                <p class="title"></p>
            </div>
        </div>
    </div>
    <div class="myCard">
        <div class="innerCard">
            <div class="frontSide">
                <p class="title"></p>
                <img :src="Testimonial.image6" alt="">
                <p class="img-name">{{ Testimonial.para6 }}</p>
            </div>
            <div class="backSide">
                <p class="title"></p>
            </div>
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
      Testimonials:[]
    }
  },
  mounted() {
      axios.get('https://chadnelson101.github.io/DATA/')
          .then(res =>{
            console.log(res.data);
            this.Testimonials = res.data.Testimonials
          })
          .catch(error => alert('Error fetching data:', error));

    },
  }
  </script>

<style scoped>

.chad{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.chad{
    height: 135vh;
    position: relative;
    left: 41px;
    top: 41px;
}
.name{
  display: flex;
  justify-content: center;
  gap: 90px;
  margin-top: 5%;
}
.name1{
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 5%;
}

.myCard {
  background-color: transparent;
  width: 300px;
  height: 350px;
  perspective: 1000px;
  margin-right: 10px;
  margin-bottom: 10px;
}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.innerCard {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.frontSide img{
  width: 250px;
  height: 300px;
  margin-top: -16%;
}
.frontSide {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 120%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 1rem;
  color: white;
  box-shadow: 0 0 0.3em rgba(255, 255, 255, 0.5);
  font-weight: 700;
}
.backSide p{
  line-height: 30px;
}
.frontSide::before{
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: '';
  width: 110%;
  height: 110%;
  position: absolute;
  z-index: -1;
  border-radius: 1em;
  filter: blur(20px);
  animation: animate 5s linear infinite;
}
.img-name{
  margin-top: 57%;
  margin-left: -30%;
  
}

.frontSide img[data-v-c1cfdf9a][data-v-c1cfdf9a] {
    width: 130px;
    height: 130px;
    border-radius: 150px;
    position: relative;
    left: 90px;
    top: -98px;
}
@media (max-width: 750px){
  .name{
  flex-direction: column;
  margin-left: 25%;
  gap: 90px;
  margin-top: 5%;
}
.name1{
  flex-direction: column;
  margin-left: 25%;
  gap: 90px;
  margin-top: 5%;
}
}

@media (min-width: 1000px) and (max-width:1200px){
  .chad{
    grid-template-columns: repeat(3, 1fr);
    position: relative;
    left: 178px;
  }
  .frontSide, .backSide{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 106%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 1rem;
    color: white;
    box-shadow: 0 0 0.3em rgba(255, 255, 255, 0.5);
    font-weight: 700;
    gap: 10px;
}
}

@media (max-width: 900px){
  .chad[data-v-c1cfdf9a] {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-left: 37px;
    height: 200vh;
}
}


@media (max-width: 800px){
  .chad[data-v-c1cfdf9a] {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-left: 8px;
    height: 200vh;
}
}


@media (max-width: 700px){
  .chad[data-v-c1cfdf9a] {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-left: -24px;
    height: 200vh;
}
.frontSide[data-v-c1cfdf9a], .backSide[data-v-c1cfdf9a] {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 96%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 1rem;
    color: white;
    box-shadow: 0 0 0.3em rgba(255, 255, 255, 0.5);
    font-weight: 700;
}
.img-name[data-v-c1cfdf9a][data-v-c1cfdf9a] {
    margin-top: 57%;
    margin-left: -36%;
    font-size: 12px;
    padding: 39px;
}
.frontSide img[data-v-c1cfdf9a][data-v-c1cfdf9a][data-v-c1cfdf9a] {
    width: 130px;
    height: 130px;
    border-radius: 150px;
    position: relative;
    left: 90px;
    top: -83px;
}
}

@media (max-width: 600px){
  .chad[data-v-c1cfdf9a] {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    margin-left: 136px;
    height: 380vh;
}
.frontSide[data-v-c1cfdf9a][data-v-c1cfdf9a], .backSide[data-v-c1cfdf9a][data-v-c1cfdf9a] {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 79%;
    height: 92%;
    backface-visibility: hidden;
    border-radius: 1rem;
    color: white;
    box-shadow: 0 0 0.3em rgba(255, 255, 255, 0.5);
    font-weight: 700;
}
.img-name[data-v-c1cfdf9a][data-v-c1cfdf9a][data-v-c1cfdf9a] {
    margin-top: 57%;
    margin-left: -42%;
    font-size: 12px;
    padding: 26px;
}
.frontSide[data-v-c1cfdf9a][data-v-c1cfdf9a][data-v-c1cfdf9a], .backSide[data-v-c1cfdf9a][data-v-c1cfdf9a][data-v-c1cfdf9a] {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 85%;
    height: 92%;
    backface-visibility: hidden;
    border-radius: 1rem;
    color: white;
    box-shadow: 0 0 0.3em rgba(255, 255, 255, 0.5);
    font-weight: 700;
}
.frontSide img[data-v-c1cfdf9a][data-v-c1cfdf9a][data-v-c1cfdf9a][data-v-c1cfdf9a] {
    width: 130px;
    height: 130px;
    border-radius: 150px;
    position: relative;
    left: 79px;
    top: -75px;
}
}

@media (max-width: 500px){
  .chad[data-v-c1cfdf9a] {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    margin-left: 94px;
    height: 380vh;
}
.frontSide[data-v-c1cfdf9a][data-v-c1cfdf9a], .backSide[data-v-c1cfdf9a][data-v-c1cfdf9a] {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 79%;
    height: 92%;
    backface-visibility: hidden;
    border-radius: 1rem;
    color: white;
    box-shadow: 0 0 0.3em rgba(255, 255, 255, 0.5);
    font-weight: 700;
}
.backSide p[data-v-c1cfdf9a] {
    line-height: 26px;
    font-size: 14px;
}
}

@media (max-width: 350px){
  .chad[data-v-c1cfdf9a][data-v-c1cfdf9a] {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    margin-left: -5px;
    height: 380vh;
}
.frontSide[data-v-c1cfdf9a][data-v-c1cfdf9a], .backSide[data-v-c1cfdf9a][data-v-c1cfdf9a] {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 79%;
    height: 92%;
    backface-visibility: hidden;
    border-radius: 1rem;
    color: white;
    box-shadow: 0 0 0.3em rgba(255, 255, 255, 0.5);
    font-weight: 700;
}
.backSide p[data-v-c1cfdf9a] {
    line-height: 26px;
    font-size: 14px;
}
}

@media (max-width: 300px){
  .chad[data-v-c1cfdf9a][data-v-c1cfdf9a] {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    margin-left: -5px;
    height: 380vh;
}
.frontSide[data-v-c1cfdf9a][data-v-c1cfdf9a], .backSide[data-v-c1cfdf9a][data-v-c1cfdf9a] {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 79%;
    height: 92%;
    backface-visibility: hidden;
    border-radius: 1rem;
    color: white;
    box-shadow: 0 0 0.3em rgba(255, 255, 255, 0.5);
    font-weight: 700;
}
.backSide p[data-v-c1cfdf9a] {
    line-height: 26px;
    font-size: 14px;
}
}

@media (width: 400px){
  .chad{
    isplay: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    margin-left: 27px;
    margin-top: 2px;
    height: 380vh;
  }

  .frontSide img {
    width: auto;
    height: 274px;
    
}
.frontSide[data-v-c1cfdf9a], .backSide[data-v-c1cfdf9a] {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 84%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 1rem;
    color: white;
    box-shadow: 0 0 0.3em rgba(255, 255, 255, 0.5);
    font-weight: 700;
    margin-left: -5%;
}
}
</style>