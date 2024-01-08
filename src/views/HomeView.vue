<template>
  <div>
      <h1 class="">{{ Portfolio.heading }}</h1>
      <h2 class="head">{{ Portfolio.title}}</h2>
      <h3 class="head1">{{ Portfolio.name }}</h3>
      <h4 class="head2">{{ Portfolio.is }}</h4>
      <img class="img" :src="Portfolio.image" >
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'my-Portfolio',
  data(){
    return {
      Portfolio:[]
    }
  },
  mounted() {
      axios.get('http://localhost:3000/Portfolio')
          .then(res =>{
            console.log(res.data);
            this.Portfolio = res.data[0]
          })
          .catch(error => console.error('Error fetching data:', error));

    },

  }
</script>

<style >
body{
  min-height: 100vh;
    background: linear-gradient(to right bottom, lightblue, grey);
}
.head{
  font-size: 70px;
  color: #fff;
  margin-left: -90%;
}
.head1{
  font-size: 70px;
  color: #fff;
  margin-left: -65%;
}
.head2{
  font-size: 70px;
  color: #fff;
  margin-left: -35%;
}
.img{
  width: 500px;
  margin-top: -100%;
  margin-left: 60%;
  border-radius: 50%;
  box-shadow: 0 5px 5px 5px rgba(82, 2, 94, 0.2);
  animation: animate 5s ease-in-out infinite;
  transition: all 1s ease-in-out;
}

@keyframes animate {
  0%, 100%{
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50%{
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
}

@media (max-width: 750px) {
  .head{
    font-size: 50px;
    margin-left: 0;
    margin-top: 8%;
  }
  .head1{
    font-size: 50px;
    margin-left: 0;
    margin-top: 8%;
  }
  .head2 {
    font-size: 50px;
    margin-left: 0;
    margin-top: 8%;
  }

  .img {
    width: 100%;
    margin-top: 15%;
    margin-left: -2%;
  }
}

</style>