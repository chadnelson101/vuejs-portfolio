<template>
  <section id="about">
    <div class="abt-left">
      <img :src="About.image">
    </div>
 <div class="about">
  <h1>{{ About.heading }}</h1>
  <p>{{ About.info }}</p>
 </div>
</section>
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
      axios.get('http://localhost:3000/About')
          .then(res =>{
            console.log(res.data);
            this.About = res.data[0]
          })
          .catch(error => console.error('Error fetching data:', error));

    },

  }
  </script>

  <style scoped>
  
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
}
.about{
  width: 54%;
}
.about ul li{
  display: flex;
  align-items: center;
}
.about h1{
  color: #008bf8;
  font-size: 37px;
  margin-top: 1%;
  text-decoration: underline;
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

@media (max-width: 750px) {
  body{
    width: 100%;
    height: 100vh;
  }
  .abt-left img{
    margin-top: -500px;
    position: absolute;
    margin-left: 10%;
    width: 350px;
  }
  .about{
    margin-left: -95%; 
    margin-top: 20%;
  }
  #about p{
    font-size: 20px;
    margin-left: -55%;
  }
  #about h1{
    margin-top: 130%;
    margin-left: -55%;
  }
}
@media (max-width: 470px) {
  body{
    width: 100%;
    height: 100vh;
  }
  .abt-left img{
    margin-top: -80%;
    margin-left: 10%;
    width: 250px;
  }
  .about{
    margin-left: -95%; 
    margin-top: 50%;
  }
  #about p{
    font-size: 10px;
    margin-left: -75%;
    width: 300px;
  }
  #about h1{
    margin-top: 130%;
    margin-left: -76%;
  }
}
  </style>