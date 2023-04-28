import { axiosInstance } from "./axios";

export const fetchUsers = () => {
  return axiosInstance.get(`/users/`).then(({ data }) => data);
};
