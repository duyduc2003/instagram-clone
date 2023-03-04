import { Box } from '@mui/material';
import * as React from 'react';
import {
  IconHouse,
  IconHouseFill,
  IconPlusSquare,
  IconPlusSquareFill,
  IconSend,
  IconSendFill,
} from '~/components/icon';
import { routePaths } from '~/utils/routes';
import CreatePost from './CreatePost';
import { useNavStyle } from './nav.style';
import NavMobileItem from './NavMobileItem';

interface NavMobileProps {}

const NavMobile: React.FC<NavMobileProps> = (props) => {
  const {} = props;

  const classes = useNavStyle();

  return (
    <Box component="div" className={classes.wrapNav}>
      <div className={classes.navInner}>
        <NavMobileItem icon={<IconHouse />} iconActive={<IconHouseFill />} link={routePaths.home} />
        <CreatePost />
        <NavMobileItem icon={<IconSend />} iconActive={<IconSendFill />} link={routePaths.inbox} />
        <NavMobileItem
          link={`/dutwne_`}
          avatar="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-1/330148501_947442159752336_6972825329844718793_n.jpg?stp=cp0_dst-jpg_s86x86&_nc_cat=106&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=TltQOb7oWuUAX87N0cf&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfDghAOVafiqt8zBwh8Mo4uehflEJqBXyy1B6qJkWgk2Qg&oe=63F4E779"
        />
      </div>
    </Box>
  );
};

export default NavMobile;
