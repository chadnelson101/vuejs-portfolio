<template>
  <section class="edu-heading" id="education">
            <h1 class="sub-heading">{{ Resume.subheading }}</h1>

            <div class="edu-row">
              <div class="row-1">
              <div class="my-edu">
              <H2>{{ Resume.heading }}</H2>
              <h3>{{ Resume.heading1 }}</h3>
              <p>{{ Resume.primaryschool }}</p>
              <span class="sp-box">{{ Resume.year }}</span>
            </div>
            
            <div class="my-edu">
            <h3>{{ Resume.heading2 }}</h3>
            <p>{{ Resume.Highschool}}</p>
            <span class="sp-box">{{ Resume.year1 }}</span>
            </div>
              </div>

              <div class="row-2">

            <div class="exp">
              <h2>{{ Resume.heading3 }}</h2>
              <h3>{{ Resume.subheading1 }}</h3>
              <p>{{ Resume.job }}</p>
              <span class="sp-box">{{ Resume.year2}}</span>

              <ul>
                <li>{{ Resume.jobdescription }}</li>
            </ul>
            </div>

            <div class="exp">
              <h3>{{ Resume.heading4 }}</h3>
              <p>{{ Resume.subheading2 }}</p>
              <span class="sp-box">{{ Resume.year3 }}</span>

              <ul>
                <li>{{ Resume.jobdescription1 }}</li>
            </ul>
            </div>

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
      Resume:[]
    }
  },
  mounted() {
      axios.get('http://localhost:3000/Resume')
          .then(res =>{
            console.log(res.data);
            this.Resume = res.data[0]
          })
          .catch(error => console.error('Error fetching data:', error));

    },
  }
  </script>

<style>
#education {
    /* padding: 70px 30px; */
    width: 100%;
    height: 100vh;
  }
  .education h1{
    position: absolute;
    margin-top: -30px;
  }
 
  #education .edu-row{
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 35px;
    margin-left: 20px;
  }
  #education .edu-row .my-exp{
    justify-content: space-between;
    gap: 20px;
    margin-top: 35px;
  }
  #education .edu-row-1 .exp .my-edu{
    flex-basis: 50%;
  }
  #education .edu-row  h2{
    font-weight: 600;
    font-size: 25px;
    margin: 15px 0;
    color: #fff;
    text-decoration: underline;
  }
  #education .edu-row h3{
    font-size: 17px;
    font-weight: 600;
    text-transform: uppercase;
  }
  #education .edu-row .my-edu{
    padding: 0 20px 0 20px;
    border-left: 2px solid aqua;
    position: relative;
  }
  #education .edu-row .my-edu::before{
    content: '';
    position: absolute;
    top: 0px;
    left: -10px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: white;
  }
  
  #education .edu-row .exp{
    padding: 0 20px 0 20px;
    border-left: 2px solid aqua;
    position: relative;
  }
  #education .edu-row .exp::before{
    content: '';
    position: absolute;
    top: 0px;
    left: -10px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid var(--main-color);
    background-color: white;
  }
  #education .edu-row .sp-box{
    padding: 4px 22px;
    background-color: #fff;
    border-radius: 30px;
    font-size: 14px;
    font-family: 400;
    margin: 15px 0;
    display: inline-block;
  }
  #education .edu-row p{
    font-size: 20px;
  }
  #education .edu-row .exp{
    padding: 0 20px  10px;
    position: relative;
  }
  #education .edu-row .exp ul li{
    margin: 30px 0;
    margin-left: 20px;
    font-size: 15px;
    font-weight: 500;
  }
  #education .edu-row .my-edu{
    margin: 20px 0;
  }
  #education .edu-row .my-edu h3{
    margin: 20px;
    color: #fff;
  }
  #education .edu-row .exp h3{
    margin: 20px 0;
    color: #fff;
  }
  .exp li{
    color: #fff;
  }
  .exp p{
    color: lightblue;
  }
  .my-edu p{
    color: #fff;
  }
.edu-heading h1{
  color: #008bf8;
  text-decoration: underline;
}
</style>