import * as api from "../../api/api"

const defaultState = {
  profile: [],
  portfolio: []
};

const actions = {
  setProfile: (context, payload) => {
    api.getPorfile()
      .then((res) => {
        if (res.status === 200) {
          context.commit("profileUpdate", res.data);
        }
      })
  },

  setPortfolio: (context, payload) => {
    api.getPortfolio()
      .then((res) => {
        if (res.status === 200) {
          context.commit("portfolioUpdate", res.data);
        }
      })
  }
};

const mutations = {
  profileUpdate: (state, data) => {
    state.profile = data;
  },

  portfolioUpdate: (state, data) => {
    state.portfolio = data;
  },
};

const getters = {
  profile: state => state.profile,
  portfolio: state => state.portfolio
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};

