// Vuex store
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    Portfolio: '',
    About: '',
  },
  getters: {},
  mutations: {
    setPortfolio(state, Portfolio) {
      state.Portfolio = Portfolio;
    },
    setAbout(state, About) {
      state.About = About;
    },
  },
  actions: {
    async fetchPortfolio({ commit }) {
      try {
        const portfolioResponse = await axios.get("http://localhost:3000/Portfolio");
        const aboutResponse = await axios.get("http://localhost:3000/about");

        commit('setPortfolio', portfolioResponse.data);
        commit('setAbout', aboutResponse.data);
      } catch (error) {
        console.error('Error fetching portfolio data', error);
      }
    },
  },
  modules: {},
});
