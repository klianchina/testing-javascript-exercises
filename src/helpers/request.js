import axios from 'axios';

export function get(url) {
  return axios.get(url);
}
