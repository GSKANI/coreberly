import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests if available
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth endpoints
export const authApi = {
  register: (data) => apiClient.post('/auth/register', data),
  login: (data) => apiClient.post('/auth/login', data),
};

// Services endpoints
export const servicesApi = {
  getAll: () => apiClient.get('/services'),
  getById: (id) => apiClient.get(`/services/${id}`),
  create: (data) => apiClient.post('/services', data),
  update: (id, data) => apiClient.put(`/services/${id}`, data),
  delete: (id) => apiClient.delete(`/services/${id}`),
};

// Projects endpoints
export const projectsApi = {
  getAll: () => apiClient.get('/projects'),
  getById: (id) => apiClient.get(`/projects/${id}`),
  create: (data) => apiClient.post('/projects', data),
  update: (id, data) => apiClient.put(`/projects/${id}`, data),
  delete: (id) => apiClient.delete(`/projects/${id}`),
};

// Blog endpoints
export const blogApi = {
  getAll: () => apiClient.get('/blog'),
  getById: (id) => apiClient.get(`/blog/${id}`),
  create: (data) => apiClient.post('/blog', data),
  update: (id, data) => apiClient.put(`/blog/${id}`, data),
  delete: (id) => apiClient.delete(`/blog/${id}`),
};

// Contact endpoints
export const contactApi = {
  getAll: () => apiClient.get('/contact'),
  submit: (data) => apiClient.post('/contact', data),
  updateStatus: (id, status) => apiClient.put(`/contact/${id}`, { status }),
  delete: (id) => apiClient.delete(`/contact/${id}`),
};

// Team endpoints
export const teamApi = {
  getAll: () => apiClient.get('/team'),
  getById: (id) => apiClient.get(`/team/${id}`),
  create: (data) => apiClient.post('/team', data),
  update: (id, data) => apiClient.put(`/team/${id}`, data),
  delete: (id) => apiClient.delete(`/team/${id}`),
};

export default apiClient;
