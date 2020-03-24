import { environment as ENV } from 'src/environments/environment';

export const UsersApi = {
  users: `${ENV.api}/api/users?page={page}`,
  image: 'https://media-exp1.licdn.com/dms/image/C4E03AQG3Xp1iVP2vnA/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=_EQSn30UQVJOYIbsZtSTS2CNEvvFHDkQRIIVLxPSVWc'
};
