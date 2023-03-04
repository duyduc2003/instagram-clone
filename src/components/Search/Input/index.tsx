import * as React from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconLoading, IconSearchSmall } from '~/components/icon';
import { useInputStyle } from './input.style';
import { Box } from '@mui/material';
import classNames from 'classnames';

interface ClassesInput {
  input?: string;
}

interface InputProps {
  value?: string;
  loading?: boolean;
  className?: string;
  classes?: ClassesInput;
  cleanText?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
}

const Input: React.FC<InputProps> = (props) => {
  const {
    className,
    value,
    loading,
    classes: _classes,
    onChange,
    cleanText,
    onFocus,
    onBlur,
  } = props;

  const classes = useInputStyle();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClickClean = () => {
    inputRef.current?.focus();
    cleanText?.();
  };

  return (
    <div className={classNames(classes.wrapInput, className)}>
      {!value && (
        <div className="icon-search">
          <IconSearchSmall />
        </div>
      )}
      <Box flex={1}>
        <input
          ref={inputRef}
          className={classNames(_classes?.input)}
          type="text"
          placeholder="Search"
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </Box>
      {cleanText && value !== null && value !== undefined && value.length > 0 && (
        <div className="icon-close" onClick={handleClickClean}>
          <HighlightOffIcon fontSize="small" />
        </div>
      )}
      {loading && (
        <Box width={18} height={18} display="flex" alignItems="center">
          <IconLoading />
        </Box>
      )}
    </div>
  );
};

export default React.memo(Input);
