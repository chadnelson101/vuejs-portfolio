<template>
  <div v-for="Contact in Contact" :key="Contact" class="contact">
  <form action="https://formspree.io/f/mjvqlbaa"
    method="POST"
    target="_blank"
    >
    <div class="container">
      <h1>{{ Contact.heading }}</h1>
      <div class="contact-box">
        <div class="contact-left">
          <div class="input-row">
            <div class="input-group">
              <label>
              <h4>{{ Contact.name }}</h4>
              <input type="text" name="Name">
            </label>
            </div>
            <div class="input-group">
              <label>
              <h4>{{ Contact.surname }}</h4>
              <input type="text" name="Surname">
            </label>
            </div>
          </div>
          <div class="input-row">
            <div class="input-group">
              <label>
              <h4>{{ Contact.email }}</h4>
              <input type="text" name="email">
            </label>
            </div>
            <div class="input-group">
              <label>
              <h4>{{ Contact.phone }}</h4>
              <input type="text" name="Phone">
            </label>
            </div>
          </div>
          <label>
                  <h2>{{ Contact.message }}</h2>
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
        <td>{{ Contact.email }}:</td>
        <td class="email">{{ Contact.mail }}</td>
    </tr>
    <tr>
        <td>{{ Contact.phone }}:</td>
        <td class="number">{{ Contact.number }}</td>
    </tr>
    <tr>
        <td>{{ Contact.address }}:</td>
        <td class="add">{{ Contact.add }}</td>
    </tr>
    <tr>
        <td> City:</td>
        <td class="add">CAPE TOWN</td>
    </tr>

</table>
    </form>
    <div class="image">
      <a href="https://maps.app.goo.gl/ZJR5Zom8tNmEp36EA" target="_blank">
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
      axios.get('https://chadnelson101.github.io/DATA/')
          .then(res =>{
            console.log(res.data);
            this.Contact = res.data.Contact
          })
          .catch(error => console.error('Error fetching data:', error));

    },

  }
  </script>

<style scoped>
h1{
  color: black;
  font-weight: bold;
}
h4{
  position: relative;
  left: 10px;
}
h3{
  color: black;
  position: relative;
  left: 170px;
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
    width: 1100px;
    height: 441px;
    background:black;
    color: #fff;
    position: relative;
    left: 145px;
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
    position: relative;
    left: 168px;
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
    position: relative;
    left: 170px;
}

label{
    margin-bottom: 6px;
    display: block;
    color: black;
}

button{
    background: black;
    width: 100px;
    border: none;
    outline: none;
    color: #fff;
    height: 35px;
    border-radius: 30px;
    margin-top: 20px;
    box-shadow: 0px 5px 15px 0px rgba(28, 0, 181,0.3);
    position: relative;
    left: 190px;
}

.contact-left h3{
    font-weight: 600;
    margin-bottom: 30px;
}

.contact-right h2{
  color: #fff;
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
  position: relative;
  width: 400px;
  height: 400px;
  left: 20.4%;
  top: -430px;
}

@media (width: 900px){
  .input-row{
    display: flex;
    justify-content: space-between;
    margin-bottom: -1px;
    display: flex;
}
h3[data-v-13b6e01b] {
    color: white;
    position: relative;
    left: 8px;
}
input[data-v-13b6e01b] {
  width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    padding-bottom: 5px;
    position: relative;
    left: -29px;
}
img[data-v-13b6e01b][data-v-13b6e01b][data-v-13b6e01b] {
  position: relative;
    width: 274px;
    height: 240px;
    left: 18.4%;
    top: -310px;
}
.contact-right[data-v-13b6e01b][data-v-13b6e01b] {
    flex-basis: 40%;
    padding: 40px;
    width: 724px;
    height: 343px;
    background: black;
    color: #fff;
    position: relative;
    left: 35px;
}
tr td[data-v-13b6e01b] {
  padding-top: 30px;
    font-size: 15px;
    position: relative;
    left: -3px;
}
h2{
  position: relative;
    left: 143px;
}
textarea[data-v-13b6e01b] {
  width: 141%;
    border: 1px solid #ccc;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    left: 48px;
}
.contact-left[data-v-13b6e01b] {
    flex-basis: 60%;
    padding: 100px 5px;
}
.contact-box[data-v-13b6e01b] {
    background-color: #fff;
    display: flex;
    margin-top: 0auto;
    height: -moz-max-content;
    height: max-content;
    width: 111.5%;
    position: relative;
    left: -53px;
}
button[data-v-13b6e01b] {
    background: black;
    width: 100px;
    border: none;
    outline: none;
    color: #fff;
    height: 35px;
    border-radius: 30px;
    margin-top: 20px;
    box-shadow: 0px 5px 15px 0px rgba(28, 0, 181,0.3);
    position: relative;
    left: 139px;
}
h4[data-v-13b6e01b][data-v-13b6e01b] {
    position: relative;
    left: -28px;
}
.contact-left h3[data-v-13b6e01b] {
    color: black;
    font-weight: 600;
    margin-bottom: 30px;
    position: relative;
    left: 54px;
}
}


@media (width: 800px){
  .input-row{
    display: flex;
    justify-content: space-between;
    margin-bottom: -1px;
    display: flex;
    flex-direction: column;
}
h3[data-v-13b6e01b] {
    color: white;
    position: relative;
    left: 8px;
}
input[data-v-13b6e01b] {
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    padding-bottom: 5px;
    position: relative;
    left: -82px;
}
img[data-v-13b6e01b][data-v-13b6e01b][data-v-13b6e01b] {
    position: relative;
    width: 274px;
    height: 240px;
    left: 1.4%;
    top: -258px;
}
.contact-right[data-v-13b6e01b][data-v-13b6e01b] {
    flex-basis: 40%;
    padding: 40px;
    width: 635px;
    height: 521px;
    background: black;
    color: #fff;
    position: relative;
    left: 35px;
}
tr td[data-v-13b6e01b] {
  padding-top: 30px;
    font-size: 15px;
    position: relative;
    left: 179px;
}
h2{
  position: relative;
    left: 143px;
}
textarea[data-v-13b6e01b] {
  width: 141%;
    border: 1px solid #ccc;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    left: 48px;
}
.contact-left[data-v-13b6e01b] {
    flex-basis: 60%;
    padding: 100px 5px;
}
.contact-box[data-v-13b6e01b] {
    background-color: #fff;
    display: flex;
    margin-top: 0auto;
    height: -moz-max-content;
    height: max-content;
    width: 111.5%;
    position: relative;
    left: -43px;
}
button[data-v-13b6e01b] {
    background: black;
    width: 100px;
    border: none;
    outline: none;
    color: #fff;
    height: 35px;
    border-radius: 30px;
    margin-top: 20px;
    box-shadow: 0px 5px 15px 0px rgba(28, 0, 181,0.3);
    position: relative;
    left: 139px;
}
h4[data-v-13b6e01b][data-v-13b6e01b] {
    position: relative;
    left: -28px;
}
.contact-left h3[data-v-13b6e01b] {
    color: black;
    font-weight: 600;
    margin-bottom: 30px;
    position: relative;
    left: 54px;
}
}


@media (width: 700px){
  .input-row{
    display: flex;
    justify-content: space-between;
    margin-bottom: -1px;
    display: flex;
    flex-direction: column;
}
h3[data-v-13b6e01b] {
    color: white;
    position: relative;
    left: -3px;
}
input[data-v-13b6e01b] {
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    padding-bottom: 5px;
    position: relative;
    left: -82px;
}
img[data-v-13b6e01b][data-v-13b6e01b][data-v-13b6e01b] {
    position: relative;
    width: 274px;
    height: 240px;
    left: 0.6%;
    top: -258px;
}
.contact-right[data-v-13b6e01b][data-v-13b6e01b] {
    flex-basis: 40%;
    padding: 40px;
    width: 547px;
    height: 521px;
    background: black;
    color: #fff;
    position: relative;
    left: 35px;
}
tr td[data-v-13b6e01b] {
  padding-top: 30px;
    font-size: 15px;
    position: relative;
    left: 124px;
}
h2{
  position: relative;
    left: 108px;
}
textarea[data-v-13b6e01b] {
  width: 141%;
    border: 1px solid #ccc;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    left: 29px;
}
.contact-left[data-v-13b6e01b] {
    flex-basis: 60%;
    padding: 100px 5px;
}
.contact-box[data-v-13b6e01b] {
    background-color: #fff;
    display: flex;
    margin-top: 0auto;
    height: -moz-max-content;
    height: max-content;
    width: 111.5%;
    position: relative;
    left: -33px;
}
button[data-v-13b6e01b] {
    background: black;
    width: 100px;
    border: none;
    outline: none;
    color: #fff;
    height: 35px;
    border-radius: 30px;
    margin-top: 20px;
    box-shadow: 0px 5px 15px 0px rgba(28, 0, 181,0.3);
    position: relative;
    left: 106px;
}
h4[data-v-13b6e01b][data-v-13b6e01b] {
    position: relative;
    left: -59px;
}
.contact-left h3[data-v-13b6e01b] {
    color: black;
    font-weight: 600;
    margin-bottom: 30px;
    position: relative;
    left: 54px;
}
}

@media (width: 600px){
  .input-row{
    display: flex;
    justify-content: space-between;
    margin-bottom: -1px;
    display: flex;
    flex-direction: column;
}
h3[data-v-13b6e01b] {
    color: white;
    position: relative;
    left: -3px;
}
input[data-v-13b6e01b] {
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    padding-bottom: 5px;
    position: relative;
    left: -82px;
}
img[data-v-13b6e01b][data-v-13b6e01b][data-v-13b6e01b] {
    position: relative;
    width: 274px;
    height: 240px;
    left: 1.4%;
    top: -258px;
}
.contact-right[data-v-13b6e01b][data-v-13b6e01b] {
    flex-basis: 40%;
    padding: 40px;
    width: 456px;
    height: 521px;
    background: black;
    color: #fff;
    position: relative;
    left: 35px;
}
tr td[data-v-13b6e01b] {
  padding-top: 30px;
    font-size: 15px;
    position: relative;
    left: 85px;
}
h2{
  position: relative;
    left: 98px;
}
textarea[data-v-13b6e01b] {
  width: 141%;
    border: 1px solid #ccc;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    left: 29px;
}
.contact-left[data-v-13b6e01b] {
    flex-basis: 60%;
    padding: 100px 5px;
}
.contact-box[data-v-13b6e01b] {
    background-color: #fff;
    display: flex;
    margin-top: 0auto;
    height: -moz-max-content;
    height: max-content;
    width: 111.5%;
    position: relative;
    left: -23px;
}
button[data-v-13b6e01b] {
    background: black;
    width: 100px;
    border: none;
    outline: none;
    color: #fff;
    height: 35px;
    border-radius: 30px;
    margin-top: 20px;
    box-shadow: 0px 5px 15px 0px rgba(28, 0, 181,0.3);
    position: relative;
    left: 96px;
}
h4[data-v-13b6e01b][data-v-13b6e01b] {
    position: relative;
    left: -69px;
}
.contact-left h3[data-v-13b6e01b] {
    color: black;
    font-weight: 600;
    margin-bottom: 30px;
    position: relative;
    left: 54px;
}
}


@media (width: 500px){
  .input-row{
    display: flex;
    justify-content: space-between;
    margin-bottom: -1px;
    display: flex;
    flex-direction: column;
}
h3[data-v-13b6e01b] {
    color: white;
    position: relative;
    left: -3px;
}
input[data-v-13b6e01b] {
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    padding-bottom: 5px;
    position: relative;
    left: -82px;
}
img[data-v-13b6e01b][data-v-13b6e01b][data-v-13b6e01b] {
    position: relative;
    width: 274px;
    height: 240px;
    left: 1.4%;
    top: -258px;
}
.contact-right[data-v-13b6e01b][data-v-13b6e01b] {
    flex-basis: 40%;
    padding: 40px;
    width: 367px;
    height: 521px;
    background: black;
    color: #fff;
    position: relative;
    left: 35px;
}
tr td[data-v-13b6e01b] {
    padding-top: 30px;
    font-size: 14px;
    position: relative;
    left: 14px;
}
h2{
  position: relative;
    left: 79px;
}
textarea[data-v-13b6e01b] {
  width: 141%;
    border: 1px solid #ccc;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    left: 29px;
}
.contact-left[data-v-13b6e01b] {
    flex-basis: 60%;
    padding: 100px 5px;
}
.contact-box[data-v-13b6e01b] {
    background-color: #fff;
    display: flex;
    margin-top: 0auto;
    height: -moz-max-content;
    height: max-content;
    width: 111.5%;
    position: relative;
    left: -14px;
}
button[data-v-13b6e01b] {
    background: black;
    width: 100px;
    border: none;
    outline: none;
    color: #fff;
    height: 35px;
    border-radius: 30px;
    margin-top: 20px;
    box-shadow: 0px 5px 15px 0px rgba(28, 0, 181,0.3);
    position: relative;
    left: 68px;
}
h4[data-v-13b6e01b][data-v-13b6e01b] {
    position: relative;
    left: -88px;
}
.contact-left h3[data-v-13b6e01b] {
    color: black;
    font-weight: 600;
    margin-bottom: 30px;
    position: relative;
    left: 54px;
}
}


@media (width: 400px){
  .input-row{
    display: flex;
    justify-content: space-between;
    margin-bottom: -1px;
    display: flex;
    flex-direction: column;
}
h3[data-v-13b6e01b] {
    color: white;
    position: relative;
    left: -3px;
}
input[data-v-13b6e01b] {
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    padding-bottom: 5px;
    position: relative;
    left: -116px;
}
img[data-v-13b6e01b][data-v-13b6e01b][data-v-13b6e01b] {
    position: relative;
    width: 274px;
    height: 240px;
    left: 1.4%;
    top: -258px;
}
.contact-right[data-v-13b6e01b][data-v-13b6e01b] {
    flex-basis: 40%;
    padding: 40px;
    width: 278px;
    height: 521px;
    background: black;
    color: #fff;
    position: relative;
    left: 25px;
}
tr td[data-v-13b6e01b] {
    padding-top: 30px;
    font-size: 14px;
    position: relative;
    left: 14px;
}
h2{
  position: relative;
    left: 57px;
}
textarea[data-v-13b6e01b] {
  width: 141%;
    border: 1px solid #ccc;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    left: 12px;
}
.contact-left[data-v-13b6e01b] {
    flex-basis: 60%;
    padding: 100px 5px;
}
.contact-box[data-v-13b6e01b] {
    background-color: #fff;
    display: flex;
    margin-top: 0auto;
    height: -moz-max-content;
    height: max-content;
    width: 111.5%;
    position: relative;
    left: -14px;
}
button[data-v-13b6e01b] {
    background: black;
    width: 100px;
    border: none;
    outline: none;
    color: #fff;
    height: 35px;
    border-radius: 30px;
    margin-top: 20px;
    box-shadow: 0px 5px 15px 0px rgba(28, 0, 181,0.3);
    position: relative;
    left: 68px;
}
h4[data-v-13b6e01b][data-v-13b6e01b] {
    position: relative;
    left: -112px;
}
.contact-left h3[data-v-13b6e01b] {
    color: black;
    font-weight: 600;
    margin-bottom: 30px;
    position: relative;
    left: 54px;
}
}


@media (width: 300px){
  .input-row{
    display: flex;
    justify-content: space-between;
    margin-bottom: -1px;
    display: flex;
    flex-direction: column;
}
input[data-v-13b6e01b] {
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    padding-bottom: 5px;
    position: relative;
    left: -125px;
}
img[data-v-13b6e01b][data-v-13b6e01b] {
    position: relative;
    width: 200px;
    height: 240px;
    left: -1.6%;
    top: -258px;
}
.contact-right[data-v-13b6e01b] {
    flex-basis: 40%;
    padding: 40px;
    width: 189px;
    height: 521px;
    background: black;
    color: #fff;
    position: relative;
    left: 15px;
}
tr td[data-v-13b6e01b] {
    padding-top: 30px;
    font-size: 14px;
    position: relative;
    left: -33px;
}
textarea[data-v-13b6e01b] {
  width: 141%;
    border: 1px solid #ccc;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    left: 12px;
}
.contact-left[data-v-13b6e01b] {
    flex-basis: 60%;
    padding: 100px 5px;
}
.contact-box[data-v-13b6e01b] {
    background-color: #fff;
    display: flex;
    margin-top: 0auto;
    height: -moz-max-content;
    height: max-content;
    width: 111.5%;
    position: relative;
    left: -14px;
}
button[data-v-13b6e01b] {
    background: black;
    width: 100px;
    border: none;
    outline: none;
    color: #fff;
    height: 35px;
    border-radius: 30px;
    margin-top: 20px;
    box-shadow: 0px 5px 15px 0px rgba(28, 0, 181,0.3);
    position: relative;
    left: 59px;
}
h4[data-v-13b6e01b][data-v-13b6e01b] {
    position: relative;
    left: -117px;
}
.contact-left h3[data-v-13b6e01b] {
    color: black;
    font-weight: 600;
    margin-bottom: 30px;
    position: relative;
    left: 54px;
}
}
</style>

