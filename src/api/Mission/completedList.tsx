import { api } from '../axios';

export const completedListApi = ({ accessToken }: { accessToken: string }) => {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  console.log('completedList', accessToken);
  return api.get('/missions/completed', { headers });
};
