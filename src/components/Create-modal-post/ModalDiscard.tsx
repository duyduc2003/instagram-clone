import { Box, Dialog, DialogTitle } from '@mui/material';
import * as React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  croppedImageStore,
  dialogDiscardStore,
  fileImagePostStore,
  modalCaptionIsOpen,
  modalPreviewImageIsOpen,
  modalSelectImageIsOpen,
} from '~/store/modalCreatePostAtom';
import { useCreateStyle } from './modal.style';

const ModalDiscard = () => {
  const classes = useCreateStyle();
  const [dialogOpen, setDialog] = useRecoilState(dialogDiscardStore);
  const setFileImagePostStore = useSetRecoilState(fileImagePostStore);
  const setCroppedImageStore = useSetRecoilState(croppedImageStore);
  const setModalSelectImage = useSetRecoilState(modalSelectImageIsOpen);
  const setModalPreviewImage = useSetRecoilState(modalPreviewImageIsOpen);
  const setModalCaption = useSetRecoilState(modalCaptionIsOpen);

  const handleDialogClose = React.useCallback(() => {
    setDialog((p) => ({ ...p, open: false }));
  }, []);

  const handleClickDiscard = () => {
    setModalSelectImage(dialogOpen.openSelectModal);
    setDialog((p) => ({ ...p, open: false }));
    setFileImagePostStore(undefined);
    setCroppedImageStore(undefined);
    setModalPreviewImage(false);
    setModalCaption(false);
  };

  return (
    <Dialog
      onClose={handleDialogClose}
      open={dialogOpen.open}
      classes={{
        paper: classes.dialogWrapper,
      }}
      sx={{
        zIndex: 100000,
      }}
    >
      <div className={classes.modalDialogContainer}>
        <div className={classes.dialogHeader}>
          <h1>Discard post?</h1>
          <p>If you leave, your edits won't be saved.</p>
        </div>
        <Box component="div" display="flex" flexDirection="column">
          <button onClick={handleClickDiscard}>Discard</button>
          <button onClick={handleDialogClose}>Cancel</button>
        </Box>
      </div>
    </Dialog>
  );
};

export default ModalDiscard;
