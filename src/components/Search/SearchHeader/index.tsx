import { Box } from '@mui/material';
import Tippy from '@tippyjs/react/headless';
import { useInput } from 'hooks-react-custom';
import * as React from 'react';
import Input from '../Input';
import { useSearchStyle } from '../search.style';
import WrapAccountSearch from '../WrapAccountSearch';

const SearchHeader = () => {
  const { eventBind, clear, hasValue } = useInput('');
  const classes = useSearchStyle();
  const [openModalSearch, setOpenModalSearch] = React.useState(false);

  const handleFocusInput = () => {
    setOpenModalSearch(true);
  };

  const handleBlurInput = () => {
    setOpenModalSearch(false);
  };

  const render = (attr: any) => (
    <Box
      width={375}
      height={362}
      bgcolor="background.default"
      color="text.primary"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      borderRadius={1.5}
      overflow={'scroll'}
      {...attr}
    >
      <div className={classes.bodySearch}>
        {!hasValue && (
          <div className={classes.headBodySearch}>
            <div>Recent</div>
            <button>Clear all</button>
          </div>
        )}
        <WrapAccountSearch />
      </div>
    </Box>
  );

  return (
    <Tippy visible={openModalSearch} interactive render={render} placement="bottom">
      <div>
        <Input
          cleanText={clear}
          {...eventBind}
          onFocus={handleFocusInput}
          onBlur={handleBlurInput}
        />
      </div>
    </Tippy>
  );
};

export default SearchHeader;
