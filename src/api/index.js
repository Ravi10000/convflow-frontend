import axios from 'axios';

export const sendForm = async (data) =>
  axios.post('http://localhost:8080/api/contact', data, {
    headers: { 'Content-Type': 'application/json' }
  });
