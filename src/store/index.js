import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    name1: "",
    desc1: "",
    name2: "",
    desc2: "",
    name3: "",
    desc3: "",
    name4: "",
    desc4: "",
    name5: "",
    desc5: ""
  },
  getters: {
  },
  mutations: {
    setPerson1(state, name1){
      state.name1 = name1;
    },
    setTestimonial1(state, desc1){
      state.desc1 = desc1;
    },
    setPerson2(state, name2){
      state.name2 = name2;
    },
    setTestimonial2(state, desc2){
      state.desc2 = desc2;
    },
    setPerson3(state, name3){
      state.name3 = name3;
    },
    setTestimonial3(state, desc3){
      state.desc3 = desc3;
    },
    setPerson4(state, name4){
      state.name4 = name4;
    },
    setTestimonial4(state, desc4){
      state.desc4 = desc4;
    },
    setPerson5(state, name5){
      state.name5 = name5;
    },
    setTestimonial5(state, desc5){
      state.desc5 = desc5;
    }
  },
  actions: {
    getInfo({commit}){
      axios('https://naeemaomar.github.io/FinalVueEompData/')
       .then(testimonialsData =>{ 
          // const testimonialsData = testimonialsData.data.Testimonials;
          console.log(testimonialsData.data.Testimonials[1].name2);
          const name1 = testimonialsData.data.Testimonials[0].name1;
          const description1 = testimonialsData.data.Testimonials[0].testimonial1;
          const name2 = testimonialsData.data.Testimonials[1].name2;
          const description2 = testimonialsData.data.Testimonials[1].testimonial2;
          const name3 = testimonialsData.data.Testimonials[2].name3;
          const description3 = testimonialsData.data.Testimonials[2].testimonial3;
          const name4 = testimonialsData.data.Testimonials[3].name4;
          const description4 = testimonialsData.data.Testimonials[3].testimonial4;
          const name5 = testimonialsData.data.Testimonials[4].name5;
          const description5 = testimonialsData.data.Testimonials[4].testimonial5;
          commit('setPerson1', name1);
          commit('setTestimonial1', description1);
          commit('setPerson2', name2);
          commit('setTestimonial2', description2)
          commit('setPerson3', name3);
          commit('setTestimonial3', description3);
          commit('setPerson4', name4);
          commit('setTestimonial4', description4);
          commit('setPerson5', name5);
          commit('setTestimonial5', description5)
        })
    }
  },
  modules: {
  }
})
