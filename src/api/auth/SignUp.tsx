import { api } from '../axios';

export const signUp = ({
  email,
  password,
  userName,
  missionTime,
  isAlarmEnabled,
}: {
  email: string;
  password: string;
  userName: string;
  missionTime: string;
  isAlarmEnabled: boolean;
}) => {
  const data = {
    email,
    password,
    userName,
    missionTime,
    isAlarmEnabled,
  };
  return api.post('/auth/sign-up', data);
};
