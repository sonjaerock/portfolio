import axios from "axios/index";

const API_PATH = "https://localhost:5001";

export function getPortfolio (token, itemId, id) {
  return axios.get(`${API_PATH}/api/portfolio`)
}

export function getPorfile (token, formdata) {
  return axios.get(`${API_PATH}/api/profile`)
}
