// Vuex store
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    Portfolio: '',
    About: '',
    Contact: '',
    Testimonials: '',
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
    setTestimonials(state, Testimonials) {
      state.Testimonials = Testimonials;
    },
  },
  actions: {
    async fetchPortfolio({ commit }) {
      try {
        const portfolioResponse = await axios.get("http://localhost:3000/Portfolio");
        const aboutResponse = await axios.get("http://localhost:3000/About");
        const contactResponse = await axios.get("http://localhost:3000/Contact");
        const TestimonialsResponse = await axios.get("http://localhost:3000/Testimonials");

        commit('setPortfolio', portfolioResponse.data);
        commit('setAbout', aboutResponse.data);
        commit('setContact', contactResponse.data);
        commit('setTestimonials', TestimonialsResponse.data);
      } catch (error) {
        console.error('Error fetching portfolio data', error);
      }
    },
  },
  modules: {},
});
