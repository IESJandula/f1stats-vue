import axios from 'axios';

const apiF1 = axios.create({
  baseURL: 'https://f1-api-bs37.onrender.com',
  withCredentials: false,
});

const circuits ={
    getCircuits : async () => {
        try {
            const response = await apiF1.get('/circuits');
            return response.data;
        } catch (error) {
            console.error('Error fetching races:', error);
            throw error
        }
    }
}

export default {circuits}