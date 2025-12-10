import { api } from '../axios';

export const setTokenApi = (accessToken: string, pushToken: string) => {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const data = {
    pushToken,
  };
  return api.post('/auth/setToken', data, { headers });
};
