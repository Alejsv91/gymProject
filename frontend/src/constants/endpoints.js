// src/constants/endpoints.ts
const gyms = "gym";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const ENDPOINTS = {
  gyms: `${API_BASE_URL}/${gyms}s/`,
  gymCreate: `/${gyms}/create`,
  gymDetail: (id) => `${API_BASE_URL}/${gyms}/${id}/`,
  gymEdit: (id) => `/${gyms}/${id}/edit`,
  gymDelete: (id) => `${API_BASE_URL}/${gyms}/${id}/delete`,
};
