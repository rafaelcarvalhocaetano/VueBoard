import axios from 'axios';
import env from '../env/env';

const instance = axios.create({});
instance.defaults.baseURL = env.endpoint;

// instance.interceptors.request.use(x => {
//   x.data = {
//     ...x.data,
//     dash: 'dev-user'
//   }
//   x.headers.common.Authorization = `${window.localStorage.data}`;
//   x.headers.put['token'] = 'rcc-vue-dsh';
//   return x;
// }, e => alert(`Erro Axios ${ e.message }`));

export default instance;