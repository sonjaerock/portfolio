import Vue from 'vue';
import Vuex from 'vuex';
import Data from './modules/data';

Vue.use(Vuex);
export const store = new Vuex.Store({
  modules: {
    Data: Data
  }
});
