<template>
  <div class="contact">
  <form action="https://formspree.io/f/mjvqlbaa"
    method="POST"
    >
    <div class="container">
      <h1>{{ Contact.heading }}</h1>
      <div class="contact-box">
        <div class="contact-left">
          <div class="input-row">
            <div class="input-group">
              <label>
              {{ Contact.name }}
              <input type="text" name="Name">
            </label>
            </div>
            <div class="input-group">
              <label>
              {{ Contact.surname }}
              <input type="text" name="Surname">
            </label>
            </div>
          </div>
          <div class="input-row">
            <div class="input-group">
              <label>
              {{ Contact.email }}
              <input type="text" name="email">
            </label>
            </div>
            <div class="input-group">
              <label>
              {{ Contact.phone }}
              <input type="text" name="Phone">
            </label>
            </div>
          </div>
          <label>
                  {{ Contact.message }}
                 <textarea rows="5" ></textarea>
                </label>

                <button type="submit">SEND</button>
        </div>
      </div>
    </div>
    </form>
    <form class="contact-right">
      <h3>{{ Contact.head }}</h3>

<table>
    <tr>
        <td>{{ Contact.email }}</td>
        <td class="email">{{ Contact.mail }}</td>
    </tr>
    <tr>
        <td>{{ Contact.phone }}</td>
        <td class="number">{{ Contact.number }}</td>
    </tr>
    <tr>
        <td>{{ Contact.address }}</td>
        <td class="add">{{ Contact.add }}</td>
    </tr>

</table>
    </form>
    <div class="image">
      <a href="https://maps.app.goo.gl/ZJR5Zom8tNmEp36EA">
        <img :src="Contact.image">
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'my-Portfolio',
  data(){
    return {
      Contact:[]
    }
  },
  mounted() {
      axios.get('http://localhost:3000/Contact')
          .then(res =>{
            console.log(res.data);
            this.Contact = res.data[0]
          })
          .catch(error => console.error('Error fetching data:', error));

    },

  }
  </script>

<style scoped>
body{
  height: 60vh;
}
.contact{
  height: 100vh;
}
h1{
  color: #008bf8;
}
.container{
    width: 80%;
    margin-left: 10%;
}

.contact-box{
    background-color: #fff;
    display: flex;
    margin-top: 0auto; 
    height: max-content;
}

.contact-left{
    flex-basis: 60%;
    padding: 100px 60px;
}

.contact-right{
    flex-basis: 40%;
    padding: 40px;
    width: 300px;
    height: 440px;
    background: linear-gradient(to right bottom, lightblue, grey);
    color: #fff;
    margin-top: -34.2%;
    margin-left: 65%;
}
h1{
    margin-bottom: 10px;
}
.input-row{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.input-row .input-group{
    flex-basis: 45%;
}
input{
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    padding-bottom: 5px;
}

textarea{
    width: 100%;
    border: 1px solid #ccc;
    padding: 10px;
    box-sizing: border-box;
}

label{
    margin-bottom: 6px;
    display: block;
    color: #1c00b5;
}

button{
    background: #1c00b5;
    width: 100px;
    border: none;
    outline: none;
    color: #fff;
    height: 35px;
    border-radius: 30px;
    margin-top: 20px;
    box-shadow: 0px 5px 15px 0px rgba(28, 0, 181,0.3);
}

.contact-left h3{
    color: #1c00b5;
    font-weight: 600;
    margin-bottom: 30px;
}

.contact-right h3{
    font-weight: 600;
    margin-bottom: 30px;
  }
  
tr td{
  padding-right: 10px;
}

tr td{
    padding-top: 30px;
  }
img{
  position: absolute;;
  width: 300px;
  height: 200px;
  margin-left: 18%;
  margin-top: -15%;
}
@media (max-width: 750px){
    .contact-right{
      margin-left: 10%;
      margin-top: 5%;
      width: 425px;
      height: 420px;
    }
    img{
      margin-left: -25%;
      margin-top: -35%;
    }
    .input-group{
      margin-left: 20%;
    }
    textarea{
      margin-left: 10%;
    }
    button{
      margin-left: 20%;
    }
  .contact{
  height: 220vh;
}
}
@media (max-width: 475px){
  .contact-box{
   height: max-content;
   margin-top: auto; 
}
.contact-right{
      margin-left: 10%;
      margin-top: 5%;
      width: 280px;
      height: 500px;
    }
    img{
      margin-left: -33%;
      margin-top: -60%;
    }
    .input-group{
      margin-left: 20%;
    }
    textarea{
      margin-left: 10%;
    }
    button{
      margin-left: 20%;
    }
  .contact{
    height: 220vh;
}
}
</style>