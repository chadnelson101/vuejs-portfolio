<template>
  <div class="container">
    <div class="left">
      <img :src="About.image" >
    </div>
    <div class="img-container">
    <img :src="About.image1" >
  </div>
  <div class="heading1">
  <h1>{{ About.heading }}</h1>
</div>
    <div class="right">
      <p>{{ About.info }}</p>
    </div>
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
      axios.get('http://localhost:3000/about')
          .then(res =>{
            console.log(res.data);
            this.About = res.data[0]
          })
          .catch(error => console.error('Error fetching data:', error));

    },

  }
  </script>

  <style scoped>
.left img {
  width: 500px;
  border-radius: 10px; 
  margin-left: -60%;
}
.right p {
  line-height: 2.5rem;
  max-width: 800px;
  margin-left: 47%;
  margin-top: 3%;
  display: flex;
  justify-content: flex-end;
  width: 50%;
  font-size: 25px;
  margin-right: 20px;
}
h1{
  margin-top: -35%;
  margin-left: 40%;
}
@media (max-width: 750px) {
  .left img{
    justify-content: center;
    align-items: center;
  }
  .right h1{
    margin-top: -10%;
    margin-left: 3%;
  }
 .right p{
    margin-top: 5%;
    position: relative;
  }
}
  </style>