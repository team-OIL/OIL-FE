import { api } from '../axios';

export const deleteTokenApi = (accessToken: string) => {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  return api.delete('/auth/push-token', { headers });
};
