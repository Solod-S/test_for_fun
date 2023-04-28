import { axiosInstance } from "./axios";

export const logIn = () => {
  return axiosInstance
    .get(`/users/`)
    .then(({ data }) => data.find((user) => user.id === "1"));
};
