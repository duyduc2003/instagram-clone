import * as React from 'react';
import AccountSearch from './AccountSearch';
import { useSearchStyle } from './search.style';

interface WrapAccountSearchProps {}

const WrapAccountSearch: React.FC<WrapAccountSearchProps> = (props) => {
  const {} = props;
  const classes = useSearchStyle();
  return (
    <div className={classes.wrapAccountSearch}>
      <AccountSearch
        avatar="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-1/330148501_947442159752336_6972825329844718793_n.jpg?stp=cp0_dst-jpg_s86x86&_nc_cat=106&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=TltQOb7oWuUAX87N0cf&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfDghAOVafiqt8zBwh8Mo4uehflEJqBXyy1B6qJkWgk2Qg&oe=63F4E779"
        fullname="Đặng Duy Đức"
        nickname="dutwne_1123123123"
        follow
        removeabe
      />
      <AccountSearch
        avatar="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-1/330148501_947442159752336_6972825329844718793_n.jpg?stp=cp0_dst-jpg_s86x86&_nc_cat=106&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=TltQOb7oWuUAX87N0cf&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfDghAOVafiqt8zBwh8Mo4uehflEJqBXyy1B6qJkWgk2Qg&oe=63F4E779"
        fullname="Đặng Duy Đức"
        nickname="dutwne_"
        removeabe
      />
      <AccountSearch
        avatar="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-1/330148501_947442159752336_6972825329844718793_n.jpg?stp=cp0_dst-jpg_s86x86&_nc_cat=106&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=TltQOb7oWuUAX87N0cf&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfDghAOVafiqt8zBwh8Mo4uehflEJqBXyy1B6qJkWgk2Qg&oe=63F4E779"
        fullname="Đặng Duy Đức"
        nickname="dutwne_"
        removeabe
      />
      <AccountSearch
        avatar="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-1/330148501_947442159752336_6972825329844718793_n.jpg?stp=cp0_dst-jpg_s86x86&_nc_cat=106&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=TltQOb7oWuUAX87N0cf&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfDghAOVafiqt8zBwh8Mo4uehflEJqBXyy1B6qJkWgk2Qg&oe=63F4E779"
        fullname="Đặng Duy Đức"
        nickname="dutwne_"
        removeabe
      />
      <AccountSearch
        avatar="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-1/330148501_947442159752336_6972825329844718793_n.jpg?stp=cp0_dst-jpg_s86x86&_nc_cat=106&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=TltQOb7oWuUAX87N0cf&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfDghAOVafiqt8zBwh8Mo4uehflEJqBXyy1B6qJkWgk2Qg&oe=63F4E779"
        fullname="Đặng Duy Đức"
        nickname="dutwne_"
        removeabe
      />
      <AccountSearch
        avatar="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-1/330148501_947442159752336_6972825329844718793_n.jpg?stp=cp0_dst-jpg_s86x86&_nc_cat=106&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=TltQOb7oWuUAX87N0cf&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfDghAOVafiqt8zBwh8Mo4uehflEJqBXyy1B6qJkWgk2Qg&oe=63F4E779"
        fullname="Đặng Duy Đức"
        nickname="dutwne_"
        removeabe
      />
    </div>
  );
};

export default React.memo(WrapAccountSearch);
