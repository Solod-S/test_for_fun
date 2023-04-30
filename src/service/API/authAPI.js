import { axiosInstance } from "./axios";

export const logIn = () => {
  return axiosInstance.get(`/users/12`).then(({ data }) => data);
};
