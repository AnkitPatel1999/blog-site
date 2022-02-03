import { API } from "../../backend";
import axios from "axios";

export const signUp = (user) => {
  return axios.post(`/${API}/signup`, user).then((response) => {
    console.log(response);
    return response.json();
  });
};
