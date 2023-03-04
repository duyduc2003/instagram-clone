import * as React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { IconPlusSquare, IconPlusSquareFill } from '~/components/icon';
import { modalPreviewImageIsOpen, modalSelectImageIsOpen } from '~/store/modalCreatePostAtom';
import { NavItem } from '../common/layouts/partial/Sidebar/Nav';
import ModalCaption from './ModalCaption';
import ModalCropImage from './ModalCropImage';
import ModalDiscard from './ModalDiscard';
import ModalSelectImage from './ModalSelectImage';

const Create = () => {
  const [openModal, setOpenModal] = useRecoilState(modalSelectImageIsOpen);
  const openModalPreview = useRecoilValue(modalPreviewImageIsOpen);

  const handleOpen = () => setOpenModal(true);

  return (
    <>
      <NavItem
        onClick={handleOpen}
        title="Create"
        icon={<IconPlusSquare />}
        iconActive={<IconPlusSquareFill />}
        active={openModal || openModalPreview}
      />
      <ModalDiscard />
      <ModalSelectImage />
      <ModalCropImage />
      <ModalCaption />
    </>
  );
};

export default Create;
