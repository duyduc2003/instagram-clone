import { Box } from '@mui/material';
import * as React from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.bubble.css';
import { useTextEditorStyle } from './textEdittor.style';

interface TextEditorProps {
  value?: string | null;
  onChange?: (
    value: string,
    delta: any,
    source: any,
    editor: ReactQuill.UnprivilegedEditor
  ) => void;
}

const TextEditor: React.FC<TextEditorProps> = (props) => {
  const { value = '', onChange } = props;
  const classes = useTextEditorStyle();
  const handleEditorChange = React.useCallback(
    (value: string, delta: any, source: any, editor: ReactQuill.UnprivilegedEditor) => {
      onChange?.(value, delta, source, editor);
    },
    []
  );

  return (
    <ReactQuill
      className={classes.reactQuill}
      theme="bubble"
      value={value || ''}
      onChange={handleEditorChange}
      placeholder="Write a caption..."
    />
  );
};

export default TextEditor;
