import * as React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import ModalCaption from '~/components/Create-modal-post/ModalCaption';
import ModalCropImage from '~/components/Create-modal-post/ModalCropImage';
import ModalDiscard from '~/components/Create-modal-post/ModalDiscard';
import ModalSelectImage from '~/components/Create-modal-post/ModalSelectImage';
import { IconPlusSquare, IconPlusSquareFill } from '~/components/icon';
import { modalPreviewImageIsOpen, modalSelectImageIsOpen } from '~/store/modalCreatePostAtom';
import NavMobileItem from './NavMobileItem';

const CreatePost = () => {
  const [openModal, setOpenModal] = useRecoilState(modalSelectImageIsOpen);
  const openModalPreview = useRecoilValue(modalPreviewImageIsOpen);

  const handleOpen = () => setOpenModal(true);

  return (
    <>
      <NavMobileItem
        icon={<IconPlusSquare />}
        iconActive={<IconPlusSquareFill />}
        onClick={handleOpen}
        active={openModal || openModalPreview}
      />
      <ModalDiscard />
      <ModalSelectImage />
      <ModalCropImage />
      <ModalCaption />
    </>
  );
};

export default CreatePost;
