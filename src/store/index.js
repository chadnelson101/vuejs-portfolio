// Vuex store
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    Portfolio: '',
    About: '',
    Contact: '',
    Testimonials: '',
    Projects: '',
    Resume: '',
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
        const portfolioResponse = await axios.get("http://localhost:3000/Portfolio");
        const aboutResponse = await axios.get("http://localhost:3000/About");
        const contactResponse = await axios.get("http://localhost:3000/Contact");
        const TestimonialsResponse = await axios.get("http://localhost:3000/Testimonials");
        const ProjectsResponse = await axios.get("http://localhost:3000/Projects");
        const ResumeResponse = await axios.get("http://localhost:3000/Resume");

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
