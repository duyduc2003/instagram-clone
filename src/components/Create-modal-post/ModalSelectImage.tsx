import { Box, Button, Modal, ModalProps, Typography } from '@mui/material';
import * as React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { IconClose, IconMedia } from '~/components/icon';
import {
  fileImagePostStore,
  modalPreviewImageIsOpen,
  modalSelectImageIsOpen,
} from '~/store/modalCreatePostAtom';
import { useCreateStyle } from './modal.style';

const ModalSelectImage = () => {
  const setInputFile = useSetRecoilState(fileImagePostStore);

  const [openModal, setOpenModal] = useRecoilState(modalSelectImageIsOpen);
  const setOpenModalPreview = useSetRecoilState(modalPreviewImageIsOpen);

  const classes = useCreateStyle();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClickSelect = () => {
    inputRef.current?.click();
  };

  const handleCloseModal = () => setOpenModal(false);

  const handleInputFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setInputFile(undefined);
      return;
    }
    setInputFile(e.target.files[0]);
    setOpenModalPreview(true);
    setOpenModal(false);
  };

  return (
    <Modal
      onClose={handleCloseModal}
      open={openModal}
      sx={{
        zIndex: 100000,
      }}
    >
      <div>
        <Box component="div" className={classes.root}>
          <Typography className={classes.header}>Create new post</Typography>
          <div className={classes.bodySelectImage}>
            <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
              <IconMedia />
              <Typography fontSize={20}>Drag photos and videos here</Typography>
              <Box
                className="selectImage"
                marginY={1}
                component={Button}
                textTransform="none"
                paddingX={2}
                paddingY={0.88}
                bgcolor="rgb(0,149,246)"
                color="white"
                borderRadius={2}
                lineHeight={1.3}
                onClick={handleClickSelect}
              >
                Select from computer
              </Box>
              <input
                type="file"
                ref={inputRef}
                hidden
                accept="image/*"
                onChange={handleInputFileChange}
              />
            </Box>
          </div>
        </Box>
        <Box
          component="button"
          bgcolor="transparent"
          position="absolute"
          border="none"
          top={20}
          right={20}
          color="white"
          onClick={handleCloseModal}
        >
          <IconClose />
        </Box>
      </div>
    </Modal>
  );
};

export default ModalSelectImage;
