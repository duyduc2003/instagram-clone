import * as React from 'react';

import CreateModalPost from '~/components/Create-modal-post';
import {
  IconHeart,
  IconHeartFill,
  IconHouse,
  IconHouseFill,
  IconSend,
  IconSendFill,
} from '~/components/icon';
import Nortification from '~/components/Nortification';
import Search from '~/components/Search';
import { routePaths } from '~/utils/routes';

import NavItem from '../Nav/NavItem';
import { useSidebarStyled } from '../sidebar.style';

const Nav = () => {
  const classes = useSidebarStyled();
  return (
    <ul className={classes.nav}>
      <li>
        <NavItem
          title="Home"
          icon={<IconHouse />}
          iconActive={<IconHouseFill />}
          href={routePaths.home}
        />
      </li>
      <li>
        <Search />
      </li>
      <li>
        <NavItem
          title="Messages"
          icon={<IconSend />}
          iconActive={<IconSendFill />}
          href={routePaths.inbox}
          badge={890}
        />
      </li>
      <li>
        <Nortification />
      </li>
      <li>
        <CreateModalPost />
      </li>
      <li>
        <NavItem
          href={`/dutwne_`}
          title="Profile"
          content="Profile - dutwne_"
          avatar="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-1/330148501_947442159752336_6972825329844718793_n.jpg?stp=cp0_dst-jpg_s86x86&_nc_cat=106&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=TltQOb7oWuUAX87N0cf&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfDghAOVafiqt8zBwh8Mo4uehflEJqBXyy1B6qJkWgk2Qg&oe=63F4E779"
        />
      </li>
    </ul>
  );
};

export default React.memo(Nav);
