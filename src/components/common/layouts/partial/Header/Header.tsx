import { useInput } from 'hooks-react-custom';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { IconHeart, IconHeartFill, IconInstagramText } from '~/components/icon';
import { Input, SearchHeader } from '~/components/Search';
import { routePaths } from '~/utils/routes';

import { NavMobileItem } from '../Nav';
import { useHeaderStyle } from './header.style';

const Header = () => {
  const classes = useHeaderStyle();

  return (
    <header className={classes.wrapHeader}>
      <div className={classes.headerInner}>
        <Link to={routePaths.home} className={classes.iconInstagram}>
          <IconInstagramText />
        </Link>
        <div className={classes.headerRight}>
          <div className="input-search">
            <SearchHeader />
          </div>
          <div>
            <NavMobileItem
              icon={<IconHeart />}
              iconActive={<IconHeartFill />}
              link={routePaths.notifications}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
