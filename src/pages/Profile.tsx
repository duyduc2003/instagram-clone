import { useParams } from 'react-router-dom';
import { HeaderProfileLayout } from '~/components/common/layouts';
import { IPage } from '~/interfaces/common';

const Profile: IPage = () => {
  const { nickname } = useParams();
  return <h1>--------------------------Profile - {nickname}</h1>;
};

Profile.options = {
  route: '/:nickname',
  layout: HeaderProfileLayout,
};

export default Profile;
