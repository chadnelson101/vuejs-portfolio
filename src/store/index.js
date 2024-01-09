// Vuex store
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    Portfolio: '',
    About: '',
    Contact: '',
  },
  getters: {},
  mutations: {
    setPortfolio(state, Portfolio) {
      state.Portfolio = Portfolio;
    },
    setAbout(state, About) {
      state.About = About;
    },
    setContact(state, Contact) {
      state.Contact = Contact;
    },
  },
  actions: {
    async fetchPortfolio({ commit }) {
      try {
        const portfolioResponse = await axios.get("http://localhost:3000/Portfolio");
        const aboutResponse = await axios.get("http://localhost:3000/About");
        const contactResponse = await axios.get("http://localhost:3000/Contact");

        commit('setPortfolio', portfolioResponse.data);
        commit('setAbout', aboutResponse.data);
        commit('setContact', contactResponse.data);
      } catch (error) {
        console.error('Error fetching portfolio data', error);
      }
    },
  },
  modules: {},
});
