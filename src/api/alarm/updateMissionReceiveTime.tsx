import { api } from '../axios';

interface UpdateMissionReceiveTimeParams {
  accessToken: string;
  MissionTime: string;
}

export const updateMissionReceiveTime = ({
  accessToken,
  MissionTime,
}: UpdateMissionReceiveTimeParams) => {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const body = {
    MissionTime,
  };
  console.log('updateMissionReceiveTime', body);
  return api.patch('/users/settings/mission-time', body, { headers });
};
