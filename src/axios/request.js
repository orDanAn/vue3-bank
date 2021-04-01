import axios from 'axios'

const requestAxios = axios.create({
  baseURL: 'https://vue3-bank-c3aca-default-rtdb.firebaseio.com/',
});

export default requestAxios;
