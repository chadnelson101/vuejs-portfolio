<template>
    <div v-if="loading" class="loader">
       
   <div class="container">
  <div class="dash first"></div>
  <div class="dash seconde"></div>
  <div class="dash third"></div>
  <div class="dash fourth"></div>
</div>

</div>
</template>

<script>
export default {
   data() {
      return {
        loading: true,
      };
    },
    methods: {
        fetchData() {
            this.loading = true;

            setTimeout(() => {
                this.loading = false
            },)
        }
    },
    mounted() {
      // Fetch data from the provided URL
      fetch('https://chadnelson101.github.io/DATA/')
        .then(response => response.json())
        .then(data => {
          this.data = data;
          this.loading = false;
        })  
        .catch(error => {
          console.error('Error fetching data:', error);
          this.loading = false;
        });
    },
}
</script>


#loader {
  width: 80px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -20px -40px;
  z-index: 1000;
}
<style scoped>
.loader{
    min-height: 100vh;
    background-color: black;
    z-index: 1;
}
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  z-index: 1000;
}

.dash {
  margin: 0 15px;
  width: 35px;
  height: 15px;
  border-radius: 8px;
  background: rgb(82, 159, 246);
  box-shadow: rgb(82, 159, 246) 0 0 15px 0;
}

.first {
  margin-right: -18px;
  transform-origin: center left;
  animation: spin 3s linear infinite;
}

.seconde {
  transform-origin: center right;
  animation: spin2 3s linear infinite;
  animation-delay: .2s;
}

.third {
  transform-origin: center right;
  animation: spin3 3s linear infinite;
  animation-delay: .3s;
}

.fourth {
  transform-origin: center right;
  animation: spin4 3s linear infinite;
  animation-delay: .4s;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(360deg);
  }

  30% {
    transform: rotate(370deg);
  }

  35% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes spin2 {
  0% {
    transform: rotate(0deg);
  }

  20% {
    transform: rotate(0deg);
  }

  30% {
    transform: rotate(-180deg);
  }

  35% {
    transform: rotate(-190deg);
  }

  40% {
    transform: rotate(-180deg);
  }

  78% {
    transform: rotate(-180deg);
  }

  95% {
    transform: rotate(-360deg);
  }

  98% {
    transform: rotate(-370deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}

@keyframes spin3 {
  0% {
    transform: rotate(0deg);
  }

  27% {
    transform: rotate(0deg);
  }

  40% {
    transform: rotate(180deg);
  }

  45% {
    transform: rotate(190deg);
  }

  50% {
    transform: rotate(180deg);
  }

  62% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(360deg);
  }

  80% {
    transform: rotate(370deg);
  }

  85% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes spin4 {
  0% {
    transform: rotate(0deg);
  }

  38% {
    transform: rotate(0deg);
  }

  60% {
    transform: rotate(-360deg);
  }

  65% {
    transform: rotate(-370deg);
  }

  75% {
    transform: rotate(-360deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}
</style>