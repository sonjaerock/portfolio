import * as api from "../../api/api"

const defaultState = {
  profile: [],
  portfolio: [],
  specificPortfolio: {
    title: "",
    screenshots: []
  }
};

const actions = {
  setProfile: (context, payload) => {
    return new Promise(
      (resolve, reject) => {
        api.getPorfile()
          .then((res) => {
            if (res.status === 200) {
              context.commit("profileUpdate", res.data);
              resolve(res.data);
            }
          })
      }
    )
  },

  setPortfolio: (context, payload) => {
    return new Promise(
      (resolve, reject) => {
        api.getPortfolio()
          .then((res) => {
            if (res.status === 200) {
              context.commit("portfolioUpdate", res.data);
              resolve(res.data);
            }
          })
      }
    )
  },

  setSpecificPortfolio: (context, payload) => {
    api.getSpecificPortfolio(payload.id)
      .then((res) => {
        if (res.status === 200) {
          context.commit("specificPortfolioUpdate", res.data);
        }
      })
  },
};

const mutations = {
  profileUpdate: (state, data) => {
    state.profile = data;
  },

  portfolioUpdate: (state, data) => {
    state.portfolio = data;
  },

  specificPortfolioUpdate: (state, data) => {
    state.specificPortfolio = data;
  },
};

const getters = {
  profile: state => state.profile,
  portfolio: state => state.portfolio,
  specificPortfolio: state => state.specificPortfolio
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};

