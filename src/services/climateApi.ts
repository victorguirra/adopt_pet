import axios from 'axios';

const climateApi  = axios.create({
    baseURL:'http://apiadvisor.climatempo.com.br/api/v1',
});

export default climateApi;