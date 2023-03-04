import { Avatar } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { IconCloseSm, IconLoading } from '../icon';
import { useSearchStyle } from './search.style';

interface AccountSearchProps {
  avatar: string;
  nickname: string;
  fullname: string;
  follow?: boolean;
  removeabe?: boolean;
}

const AccountSearch: React.FC<AccountSearchProps> = (props) => {
  const { avatar, follow, fullname, nickname, removeabe = false } = props;
  const classes = useSearchStyle();

  return (
    <Link to={`/${nickname}`} className={classes.accountSearch}>
      <div className="avatar">
        <Avatar sx={{ width: 44, height: 44 }} src={avatar} />
      </div>
      <div className="body">
        <p className="nickname">{nickname}</p>
        <p className="name">
          {fullname} {follow && '• Following'}
        </p>
      </div>
      {removeabe && (
        <div>
          <IconCloseSm />
        </div>
      )}
    </Link>
  );
};

export default AccountSearch;
