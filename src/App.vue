<template>
  <div>
   <NavBar/>
   <SpinnerView/>
   <router-view/>
   <FooterViewVue/>
  </div>
</template>

<script>
// import footer from component
import FooterViewVue from './components/FooterView.vue';
// Import the NavBar component
import NavBar from './components/NavBar.vue';

import SpinnerView from './components/SpinnerView.vue';

export default {
  components: {
    // Register the NavBar component in the components object
    NavBar,
    FooterViewVue,
    SpinnerView
  }
};

</script>

<style>
@import '~boxicons/css/boxicons.min.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
body {
  /* height: max-content !important; */
  /* min-height: 100vh; */
  background: #434344;
  /* height: 100%; */
  height: max-content;
}
.logo{
  width: 100px;
}
</style>
