import axios from 'axios';

const apiF1 = axios.create({
  baseURL: 'https://api-formula-1.p.rapidapi.com',
  params: {season: '2023'},
  withCredentials: false,
  headers: {
    'X-RapidAPI-Key': '56f9dd9624msh2e1a4a6a24767a5p1d0081jsnfbb7cfd4dcbc',
    'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
  }
});

const ranking = {
    getRanking : async () => {
        try {
            const response = await apiF1.get('/rankings/drivers');
            return response.data;
        } catch (error) {
            console.error('Error fetching races:', error);
            throw error;
        }
    },
    /* getPiloto : async () => {
        try {
            const response = await apiF1.get('/pilot');
            return response.data;
        } catch (error) {
            console.error('Error fetching races:', error);
            throw error;
        }
    }, */
}

const teams ={
    getTeams : async () => {
        try {
            const response = await apiF1.get('/rankings/teams');
            return response.data;
        } catch (error) {
            console.error('Error fetching races:', error);
            throw error
        }
    },
    /* getPiloto : async () => {
        try {
            const response = await apiF1.get('/team');
            return response.data;
        } catch (error) {
            console.error('Error fetching races:', error);
            throw error;
        }
    }, */
}

const circuits ={
    getCircuits : async () => {
        try {
            const response = await apiF1.get('/races');
            return response.data;
        } catch (error) {
            console.error('Error fetching races:', error);
            throw error
        }
    },
    /* getCircuit : async () => {
        try {
            const response = await apiF1.get('/circuit');
            return response.data;
        } catch (error) {
            console.error('Error fetching races:', error);
            throw error;
        }
    }, */
}

export default {
    ranking,teams,circuits
}

