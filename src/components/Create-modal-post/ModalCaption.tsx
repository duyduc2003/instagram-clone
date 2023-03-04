import { Avatar, Box, Modal, Typography } from '@mui/material';
import { useEffectOnce, useMediaQuery, useScrollToElement } from 'hooks-react-custom';
import * as React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  croppedImageStore,
  dialogDiscardStore,
  modalCaptionIsOpen,
  modalPreviewImageIsOpen,
} from '~/store/modalCreatePostAtom';
import { IconArrowLeft, IconClose } from '../icon';
import TextEditor from '../TextEditor';
import { useCreateStyle } from './modal.style';

interface ModalCaptionProps {}

const ModalCaption: React.FC<ModalCaptionProps> = (props) => {
  const {} = props;
  const classes = useCreateStyle();
  const [modalCaptionOpen, setModalCaptionOpen] = useRecoilState(modalCaptionIsOpen);
  const setModalPreviewImage = useSetRecoilState(modalPreviewImageIsOpen);
  const setDialogOpen = useSetRecoilState(dialogDiscardStore);
  const croppedImage = useRecoilValue(croppedImageStore);
  const [refElement, scroll] = useScrollToElement<HTMLDivElement>();
  const matchQuery = useMediaQuery('min-width', '876px');

  const handleClickArrowLeft = () => {
    setModalCaptionOpen(false);
    setModalPreviewImage(true);
  };

  const handleCloseModal = React.useCallback(() => {
    setDialogOpen({
      open: true,
      openSelectModal: false,
    });
  }, []);

  useEffectOnce(() => {
    scroll({
      behavior: 'smooth',
    });
  });

  return (
    <Modal
      open={modalCaptionOpen}
      onClose={handleCloseModal}
      sx={{
        zIndex: 100000,
      }}
    >
      <div>
        <Box component="div" className={classes.rootModalCaption}>
          <div className={classes.header}>
            <button className={classes.arrowLeft} onClick={handleClickArrowLeft}>
              <IconArrowLeft />
            </button>
            <p className={classes.titleHeader}>Create new post</p>
            <button className={classes.btnNext}>Share</button>
          </div>
          <div className={classes.bodyModalCaption}>
            <Box component="div" className={classes.bodyModalCaptionInner}>
              <Box maxHeight={500} height="500px">
                <img src={croppedImage} alt="" width="500px" />
              </Box>
              <Box width={matchQuery ? 300 : '100%'}>
                <Box mt={2.3} mb={1.8} mx={2} display="flex" alignItems="center">
                  <div ref={refElement}></div>
                  <Avatar
                    sx={{ width: 28, height: 28, mr: 1.6 }}
                    src="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-1/330148501_947442159752336_6972825329844718793_n.jpg?stp=cp0_dst-jpg_s86x86&_nc_cat=106&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=TltQOb7oWuUAX87N0cf&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfDghAOVafiqt8zBwh8Mo4uehflEJqBXyy1B6qJkWgk2Qg&oe=63F4E779"
                  />
                  <Typography
                    display="flex"
                    color="text.primary"
                    alignItems="center"
                    fontSize={14}
                    fontWeight={500}
                  >
                    dutwne_
                  </Typography>
                </Box>
                <div>
                  <TextEditor />
                </div>
              </Box>
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

export default ModalCaption;
