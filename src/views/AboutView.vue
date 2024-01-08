<template>
  <div class="container">
    <div class="left">
      <img :src="About.image" >
    </div>
    <div class="right">
      <h1>{{ About.heading }}</h1>
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

  <style>

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.left img {
  width: 500px;
  border-radius: 10px; 
}
.right p {
  max-width: 800px;
}
.right h1{
  margin-top: -33%;
  margin-left: -40%;
}
  </style>