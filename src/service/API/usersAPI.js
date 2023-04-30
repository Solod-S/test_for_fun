import { axiosInstance } from "./axios";

export const fetchUsers = () => {
  return axiosInstance.get(`/users`).then(({ data }) => data);
};

export const fetchUserById = async (id) => {
  const response = await axiosInstance.get(`/users/${id}`);
  return response;
};

export const updateFollower = async (user) => {
  const { id } = user;
  const response = await axiosInstance.put(`/users/${id}`, user);
  return response.data;
};
