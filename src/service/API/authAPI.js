import { axiosInstance } from "./axios";

// export const logIn = () => {
//   return axiosInstance
//     .get(`/users/`)
//     .then(({ data }) => data.find((user) => user.id === "12"));
// };

export const logIn = () => {
  return axiosInstance.get(`/users/12`).then(({ data }) => data);
};
