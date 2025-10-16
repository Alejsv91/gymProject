// src/constants/endpoints.ts
const gyms = "gyms";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const ENDPOINTS = {
  gyms: `${API_BASE_URL}/${gyms}/`,
  gymCreate: `/${gyms}/create`,
  gymDetail: (id) => `${API_BASE_URL}/${gyms}/${id}/`,
  gymEdit: (id) => `/${gyms}/${id}/edit`,
  gymDelete: (id) => `${API_BASE_URL}/${gyms}/${id}`,
  gymGetByLegalId: (legal_id) =>
    `${API_BASE_URL}/${gyms}/by-legal-id/${legal_id}`,
};
