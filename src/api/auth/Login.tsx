import { api } from '../axios';

export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const data = {
    email,
    password,
  };
  return api.post('/auth/login', data);
};
