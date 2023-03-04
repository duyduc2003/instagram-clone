import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import {
  croppedImageStore,
  dialogDiscardStore,
  fileImagePostStore,
  modalCaptionIsOpen,
  modalPreviewImageIsOpen,
} from '~/store/modalCreatePostAtom';
import CropImage, { CropImageChangeEvent } from '~/components/CropImage';
import { useCreateStyle } from './modal.style';
import { IconArrowLeft } from '../icon';
import getCroppedImg from '~/utils/helper/crop-image';

interface ModalCropImageProps {}

const ModalCropImage: React.FC<ModalCropImageProps> = (props) => {
  const {} = props;

  const [isOpenPreview, setOpenPreview] = useRecoilState(modalPreviewImageIsOpen);
  const fileImage = useRecoilValue(fileImagePostStore);
  const [previewImg, setPreviewImg] = React.useState<any>(null);
  const [dataCropImg, setDataCropImg] = React.useState<CropImageChangeEvent>();
  const setCroppedImg = useSetRecoilState(croppedImageStore);
  const setDialogOpen = useSetRecoilState(dialogDiscardStore);
  const setModalCaption = useSetRecoilState(modalCaptionIsOpen);
  const classes = useCreateStyle();

  const handleCloseModal = () => {
    setDialogOpen({
      open: true,
      openSelectModal: false,
    });
  };

  const handleCropImageChange = React.useCallback((e: CropImageChangeEvent) => {
    setDataCropImg(e);
  }, []);

  const handleClickArrowLeft = () => {
    setDialogOpen({
      open: true,
      openSelectModal: true,
    });
  };

  const showCroppedImage = React.useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        previewImg,
        dataCropImg?.croppedAreaPixels,
        dataCropImg?.rotation
      );
      console.log('donee', { croppedImage });
      setCroppedImg(croppedImage);
      setOpenPreview(false);
      setModalCaption(true);
    } catch (e) {
      console.error(e);
    }
  }, [dataCropImg?.croppedAreaPixels, dataCropImg?.rotation, previewImg]);

  React.useEffect(() => {
    if (!fileImage) {
      setPreviewImg(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(fileImage);
    setPreviewImg(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [fileImage]);

  return (
    <Modal
      open={isOpenPreview}
      onClose={handleCloseModal}
      sx={{
        zIndex: 100000,
      }}
    >
      <div>
        <Box component="div" className={classes.root}>
          <div className={classes.header}>
            <button className={classes.arrowLeft} onClick={handleClickArrowLeft}>
              <IconArrowLeft />
            </button>
            <p className={classes.titleHeader}>Crop</p>
            <button className={classes.btnNext} onClick={showCroppedImage}>
              Next
            </button>
          </div>
          <div className={classes.bodySelectImage}>
            <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
              <CropImage img={previewImg} onChange={handleCropImageChange} />
            </Box>
          </div>
        </Box>
      </div>
    </Modal>
  );
};

export default ModalCropImage;
