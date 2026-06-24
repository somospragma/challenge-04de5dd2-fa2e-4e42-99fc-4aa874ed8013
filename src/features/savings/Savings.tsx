import axios from 'axios';

export const api = {
  async fetchData() {
    try {
      const response = await axios.get('https://api.example.com/data');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};