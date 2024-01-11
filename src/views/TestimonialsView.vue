<template>

  <div class="name">
  <div class="myCard">
        <div class="innerCard">
            <div class="frontSide">
              <p class="title"></p>
              <img :src="Testimonial.image1" alt="">
              <p class="img-name">{{ Testimonial.joel }}</p>
            </div>
            <div class="backSide">
                <p class="title"></p>
                <p>{{ Testimonial.para1 }}</p>
            </div>
        </div>
    </div>
  <div class="myCard">
        <div class="innerCard">
            <div class="frontSide">
                <p class="title"></p>
                <img :src="Testimonial.image2" alt="">
                <p class="img-name">{{ Testimonial.jodi }}</p>
            </div>
            <div class="backSide">
                <p class="title"></p>
                <p>{{ Testimonial.para2 }}</p>
            </div>
        </div>
    </div>
  <div class="myCard">
        <div class="innerCard">
            <div class="frontSide">
                <p class="title"></p>
                <img :src="Testimonial.image3" alt="">
                <p class="img-name">{{ Testimonial.jodie }}</p>
            </div>
            <div class="backSide">
                <p class="title"></p>
                <p>{{ Testimonial.para3 }}</p>
            </div>
        </div>
    </div>

</div>

<div class="name1">
  <div class="myCard">
        <div class="innerCard">
            <div class="frontSide">
                <p class="title"></p>
                <img :src="Testimonial.image4" alt="">
                <p class="img-name">{{ Testimonial.niyaaz }}</p>
            </div>
            <div class="backSide">
                <p class="title"></p>
                <p>{{ Testimonial.para4 }}</p>
            </div>
        </div>
    </div>
  <div class="myCard">
        <div class="innerCard">
            <div class="frontSide">
                <p class="title"></p>
                <img :src="Testimonial.image5" alt="">
                <p class="img-name">{{ Testimonial.zubair }}</p>
            </div>
            <div class="backSide">
                <p class="title"></p>
                <p>{{ Testimonial.para5 }}</p>
            </div>
        </div>
    </div>
  <div class="myCard">
        <div class="innerCard">
            <div class="frontSide">
                <p class="title"></p>
                <img :src="Testimonial.image6" alt="">
                <p class="img-name">{{ Testimonial.matthew }}</p>
            </div>
            <div class="backSide">
                <p class="title"></p>
                <p>{{ Testimonial.para6 }}</p>
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
      Testimonial:[]
    }
  },
  mounted() {
      axios.get('http://localhost:3000/Testimonials')
          .then(res =>{
            console.log(res.data);
            this.Testimonial = res.data[0]
          })
          .catch(error => console.error('Error fetching data:', error));

    },
  }
  </script>

<style scoped>
.name{
  display: flex;
  justify-content: center;
  gap: 90px;
  margin-top: 5%;
}
.name1{
  display: flex;
  justify-content: center;
  gap: 90px;
  margin-top: 5%;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-content: space-around;
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

.myCard:hover .innerCard {
  transform: rotateY(180deg);
}
.frontSide img{
  width: 250px;
  height: 300px;
  margin-top: -16%;
}
.frontSide,
.backSide {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  /* border: 1px solid rgba(255, 255, 255, 0.8); */
  border-radius: 1rem;
  color: white;
  box-shadow: 0 0 0.3em rgba(255, 255, 255, 0.5);
  font-weight: 700;
}

.frontSide,
.frontSide::before {
  background: lightblue;
}

.backSide,
.backSide::before {
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
}

.backSide {
  transform: rotateY(180deg);
}
.backSide p{
  line-height: 30px;
}
.frontSide::before,
.backSide::before {
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
  margin-top: 100%;
  margin-left: -30%;
}

@keyframes animate {
  0% {
    opacity: 0.3;
  }

  80% {
    opacity: 1;
  }

  100% {
    opacity: 0.3;
  }
}
@media (max-width: 700px){
  .name{
  display: flex;
  justify-content: center;
  gap: 90px;
  margin-top: 5%;
}
.name1{
  display: flex;
  justify-content: center;
  gap: 90px;
  margin-top: 5%;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-content: space-around;
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

.myCard:hover .innerCard {
  transform: rotateY(180deg);
}
.frontSide img{
  width: 250px;
  height: 300px;
  margin-top: -16%;
}
.frontSide,
.backSide {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  /* border: 1px solid rgba(255, 255, 255, 0.8); */
  border-radius: 1rem;
  color: white;
  box-shadow: 0 0 0.3em rgba(255, 255, 255, 0.5);
  font-weight: 700;
}

.frontSide,
.frontSide::before {
  background: lightblue;
}

.backSide,
.backSide::before {
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
}

.backSide {
  transform: rotateY(180deg);
}
.backSide p{
  line-height: 30px;
}
.frontSide::before,
.backSide::before {
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
  margin-top: 100%;
  margin-left: -30%;
}

@keyframes animate {
  0% {
    opacity: 0.3;
  }

  80% {
    opacity: 1;
  }

  100% {
    opacity: 0.3;
  }
}
}
</style>
