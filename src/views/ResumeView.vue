<template>
  <div  v-for="Resume in Resume" :key="Resume">
  <section class="edu-heading" id="education">
            <h1 class="sub-heading">{{ Resume.subheading }}</h1>

            <div class="chad">
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
            </div>

            <div class="chad1">
              <div class="edu-row">
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
            </div>
          </div>
        </section>

        <div class="chad2">
          <div class="skills-section">
        <div class="skills-head">
            <h2>SKILLS</h2>
        </div>

        <div class="skills-main">
          <div class="skills">
            <p>HTML</p>
            <img src="https://i.ibb.co/SdKH0ZQ/html5-logo-2-removebg-preview.png" alt="">  
          </div>
          <div class="skills">
            <p>BOOTSTRAP</p>
            <img src="https://i.ibb.co/4s0c1N5/bootstrap-logo-shadow-removebg-preview.png" alt="">
          </div>
          <div class="skills">
            <p>jAVASCRIPT</p>
            <img src="https://i.ibb.co/ZKMk5YM/png-clipart-javascript-logo-computer-icons-vue-js-angle-text-removebg-preview.png" alt="">
          </div>
          <div class="skills">
            <p>NODE JS</p>
            <img src="https://i.ibb.co/8g7cjhh/node-js-logo-removebg-preview.png" alt="">
          </div>
          <div class="skills">
            <p>VUE JS</p>
            <img src="https://i.ibb.co/MRQSbdj/Vue-js-logo.png" alt="">
          </div>
          <div class="skills">
            <p>MYSQL</p>
            <img src="https://i.ibb.co/nM8FdR8/database-mysql-removebg-preview.png" alt="">
          </div>

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
      Resume:[]
    }
  },
  mounted() {
      axios.get('https://chadnelson101.github.io/DATA/')
      .then(res =>{
        console.log(res.data);
        this.Resume = res.data.Resume
          })
          .catch(error => console.error('Error fetching data:', error));
          
        },
      }
      </script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Rancho&family=Water+Brush&display=swap');
#education {
    padding: 70px 30px;
    width: 100%;
    height: 100vh;
  }
  .education h1{
    position: absolute;
    margin-top: -30px;
  }
  .chad{
    display: flex;
    justify-content: center;
    gap: 90px;
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
  color: black;
  margin-top: 5%;
  
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace;
}

.skills-section{
    width: 100%;
    height: 100vh;
    padding: 0px 13%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 5%;
}
.skills-head{
    width: 100%;
    margin-bottom: 100px;
    display: grid;
    place-items: center;
    text-align: center;
}
.skills-head H2{
    font-size: 30px;
    margin-bottom: -5px;
    color:black;
}
.skills-main{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 100px;
    grid-column-gap: 100px;
}
.skills-main .skill-bar .info{
  align-items: center;
  padding:  0 10px;
    display: flex;
    justify-content: space-between;
}
.skill-bar .info p:nth-child(2){
    font-weight: 500;
}


.skill-bar p{
  color: #fff;
}
@media (max-width: 751px) {
  #education {
    padding: 70px 30px;
    /* width: 100%;
    height: 100vh; */
    margin-left: 0%;
  }
  .education h1{
    position: absolute;
    margin-top: -10px;
  }
.skills-section{
    width: 100%;
    height: 100vh;
    padding: 0px 13%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 90%;
}
.chad{
   flex-direction: column;
  justify-content: center;
  gap: 90px;
  }
}
.skills img{
  width: 100px;
}
.skills p{
  color: #fff;
}
.skills {
    border: 2px solid #fff;
    border-radius: 90px;
    width: 250px;
}
@media (max-width: 475px) {
  #education {
    padding: 70px 30px;
    margin-left: 0%;
  }
  .education h1{
    position: absolute;
    margin-top: -10px;
  }
.skills-section{
    width: 100%;
    height: 100vh;
    padding: 0px 13%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 120%;
}
.chad{
   flex-direction: column;
  justify-content: center;
  gap: 90px;
  }
}
</style>