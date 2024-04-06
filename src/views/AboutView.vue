<template>
  <div class="main" v-for="About in About" :key="About">
  <section id="about">
    <div class="abt-left" id="abt-left">
      <img :src="About.image">
    </div>
 <div class="about" id="abt">
  <h1>{{ About.heading }}</h1>
  <p>{{ About.info }}</p>
 </div>
</section>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'my-Portfolio',
  data(){
    return {
      About:[]
    }
  },
  mounted() {
      axios.get('https://chadnelson101.github.io/DATA/')
          .then(res =>{
            console.log(res.data);
            this.About = res.data.About
          })
          .catch(error => console.error('Error fetching data:', error));

    },

  }
  </script>

  <style scoped>
 .abt-left {
  position: relative;
  display: inline-block;
}

 img {
  height: auto;
  width: 420px;
  position: relative;
  cursor: pointer;
}

img::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-280deg);
  width: 160%;
  height: 130%;
  background-image: conic-gradient(#ff00bb 0deg, #ff00bb 90deg, transparent 130deg, transparent 180deg, #4530ff 180deg, #4530ff 270deg, transparent 310deg, transparent 360deg);
  transition: transform 2s;
}

img:hover::before {
  transform: translate(-50%, -50%) rotate(-100%);
}

img::after {
  content: '';
  color: #ddd;
  position: absolute;
  background-color: #000;
  display: flex;
  font-size: 17px;
  height: 242px;
  width: 192px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#about{
  align-items: center;
  padding: 80px 12%;
  display: flex;
  justify-content: space-between;
  height: auto;
}
.abt-left img{
  height: auto;
  transform: translateY(5opx);
  width: 420px;
  border-radius: 33px;
}
.about{
  width: 54%;
}
.about ul li{
  display: flex;
  align-items: center;
}
.about h1{
  color: black;
  font-size: 37px;
  margin-top: 1%;
}
.about p{
  color: #fff;
  line-height: 35px;
  font-size: 25px;
  margin-top: 10%;
}
.about .add{
  margin: 25px 0;
}
.about .add ul li{
  margin-bottom: 6px;
}
.add .icon{
  margin-right: 15px;
  color: #fff;
}
.add .chad{
  margin: 0 35px;
}

@media (min-width: 900px) and (max-width: 1000px){
#abt-left{
  position: relative;
  top: 50px;
  left: -46px;
}
#abt p{
    font-size: 16px;
    font-weight: bold;
}
}

@media (min-width: 800px) and (max-width: 900px){
  #abt-left{
    position: relative;
    top: 40px;
    left: -46px;
  }
  #abt p{
      font-size: 13px;
      font-weight: bold;
  }
}

@media (min-width: 700px) and (max-width: 800px){
  #abt-left{
    position: relative;
    top: 40px;
    left: -46px;
  }
  #abt-left img{
    width: 380px;
  }
  #abt p{
      font-size: 10px;
      font-weight: bold;
  }
}

@media (min-width: 600px) and (max-width: 700px){
  #abt-left{
    position: relative;
    top: 40px;
    left: -46px;
  }
  #abt-left img{
    width: 380px;
    position: relative;
    top: -44px;
    left: 119px;
  }
  #abt p{
    font-size: 13px;
    padding: 4px;
    width: 326%;
    position: relative;
    left: -371px;
    top: 309px;
  }
  #abt h1{
    font-size: 30px;
    position: relative;
    left: -194px;
    top: -110px;
  }
  .main{
    height: 120vh;
  }
}
@media (min-width: 500px) and (max-width: 600px){
  #abt-left{
    position: relative;
    top: 40px;
    left: -46px;
  }
  #abt-left img{
    width: 315px;
    position: relative;
    top: -44px;
    left: 116px;
  }
  #abt p{
    font-size: 12px;
    padding: 1px;
    width: 384%;
    position: relative;
    left: -356px;
    top: 309px;
  }
  #abt h1{
    font-size: 26px;
    position: relative;
    left: -154px;
    top: -93px;
  }
  .main{
    height: 120vh;
  }
}

@media (width: 500px){
  #abt-left{
    position: relative;
    top: 40px;
    left: -46px;
  }
  #abt-left img{
    width: 315px;
    position: relative;
    top: -44px;
    left: 75px;
  }
  #abt p{
    font-size: 12px;
    padding: 1px;
    width: 332%;
    position: relative;
    left: -313px;
    top: 309px;
  }
  #abt h1{
    font-size: 22px;
    position: relative;
    left: -183px;
    top: -49px;
    font-weight: bold;
  }
  .main{
    height: 120vh;
  }
}

@media (max-width: 400px){
  #abt-left{
    position: relative;
    top: 40px;
    left: -46px;
  }
  #abt-left img{
    width: 248px;
    position: relative;
    top: -73px;
    left: 76px;
  }
  #abt p{
    font-size: 12px;
    padding: 1px;
    width: 332%;
    position: relative;
    left: -286px;
    top: 285px;
  }
  #abt h1{
    font-size: 22px;
    position: relative;
    left: -153px;
    top: -49px;
    font-weight: bold;
  }
  .main{
    height: 120vh;
  }
}

@media (width: 300px){
  #abt-left{
    position: relative;
    top: 40px;
    left: -46px;
  }
  #abt-left img{
    width: 155px;
    position: relative;
    top: -216px;
    left: 82px;
  }
  #abt p{
    font-size: 12px;
    padding: 1px;
    width: 221%;
    position: relative;
    left: -167px;
    top: 159px;
  }
  #abt h1{
    font-size: 22px;
    position: relative;
    left: -98px;
    top: -49px;
    font-weight: bold;
  }
  .main{
    height: 130vh;
  }
}
  </style>