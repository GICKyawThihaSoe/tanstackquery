import { axiosInstance } from '../axiosInstance';

export const fetchEvents = async () => {
  const response = await axiosInstance.get('/events/event');
  return response.data;
};
