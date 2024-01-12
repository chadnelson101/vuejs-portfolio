// Vuex store
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    Portfolio: null,
    About: null,
    Contact: null,
    Testimonials: null,
    Projects: null,
    Resume: null,
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
    setProjects(state, Projects) {
      state.Projects = Projects;
    },
    setResume(state, Resume) {
      state.Resume = Resume;
    },
  },
  actions: {
    async fetchPortfolio({ commit }) {
      try {
        const portfolioResponse = axios.get(" https://chadnelson101.github.io/DATA/");
        const aboutResponse = axios.get(" https://chadnelson101.github.io/DATA/");
        const contactResponse = axios.get(" https://chadnelson101.github.io/DATA/");
        const TestimonialsResponse = axios.get(" https://chadnelson101.github.io/DATA/");
        const ProjectsResponse = axios.get(" https://chadnelson101.github.io/DATA/");
        const ResumeResponse = axios.get(" https://chadnelson101.github.io/DATA/");

        commit('setPortfolio', portfolioResponse.data);
        commit('setAbout', aboutResponse.data);
        commit('setContact', contactResponse.data);
        commit('setTestimonials', TestimonialsResponse.data);
        commit('setProjects', ProjectsResponse.data);
        commit('setResume', ResumeResponse.data);
      } catch (error) {
        console.error('Error fetching portfolio data', error);
      }
    },
  },
  modules: {},
});
