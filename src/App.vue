<template>
  <div class="nav">
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
  font-family: 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-x: hidden;
}
body {
  background: #434344;
  height: max-content;
}
.logo{
  width: 100px;
}
</style>
