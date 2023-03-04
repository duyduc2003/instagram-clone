import { atom } from 'recoil';
import { IDialogDiscard } from '~/interfaces/atom';

export const fileImagePostStore = atom<any>({
  key: 'fileImagePostStore',
  default: undefined,
});

export const croppedImageStore = atom<any>({
  key: 'croppedImageStore',
  default: undefined,
});

export const dialogDiscardStore = atom<IDialogDiscard>({
  key: 'dialogDiscardStore',
  default: {
    open: false,
    openSelectModal: false,
  },
});

export const modalSelectImageIsOpen = atom<boolean>({
  key: 'modalSelectImageIsOpen',
  default: false,
});

export const modalPreviewImageIsOpen = atom<boolean>({
  key: 'modalPreviewImageIsOpen',
  default: false,
});

export const modalCaptionIsOpen = atom<boolean>({
  key: 'modalCaptionIsOpen',
  default: false,
});
