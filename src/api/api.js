import axios from "axios/index";

const API_PATH = "https://localhost:5001";

export function getPorfile () {
  return axios.get(`${API_PATH}/api/profile`)
}

export function getPortfolio () {
  return axios.get(`${API_PATH}/api/portfolio`)
}

export function getSpecificPortfolio (id) {
  return axios.get(`${API_PATH}/api/portfolio/`+id)
}
