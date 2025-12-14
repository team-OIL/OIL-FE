import { api } from '../axios';

interface MissionDetail {
  accessToken: string;
  userMissionId: number;
}

export const missionDetailApi = ({
  accessToken,
  userMissionId,
}: MissionDetail) => {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  console.log('missionDetail', accessToken);
  return api.get(`/missions/${userMissionId}`, { headers });
};
