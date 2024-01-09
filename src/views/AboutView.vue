<template>
  <section id="about">
    <div class="abt-left">
      <img :src="About.image">
    </div>
 <div class="about">
  <h1>{{ About.heading }}</h1>
  <p>{{ About.info }}</p>
  <div class="add">
    <ul>
      <li>
        <span class="icon">
          <i class='bx bxs-edit-location'></i>
        </span>
        <p>Address</p>
        <span class="chad">:</span>
        <p>{{ About.address }}</p>
      </li>
      <li>
        <span class="icon">
          <i class='bx bxs-phone' ></i>
        </span>
        <p>Phone NO</p>
        <span class="chad">:</span>
        <p>{{ About.number }}</p>
      </li>
      <li>
        <span class="icon">
        <i class='bx bx-envelope-open' ></i>
      </span>
      <p>Email</p>
      <span class="chad">:</span>
      <p>{{ About.email }}</p>
      </li>
    </ul>
  </div>
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
  color: #fff;
  font-size: 37px;
  margin-bottom: 5px;
}
.about p{
  color: #fff;
  line-height: 26px;
  font-size: 15px;
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
  .about{
    width: 100%;
  }
  #about img{
    margin-left: 10%;
    margin-top: -50%;
  }
  h1{
    margin-left: -190%;
    margin-top: 0%;
  }

}
  </style>