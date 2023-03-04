import { atom } from 'recoil';

export const sidebarLargeStore = atom<boolean>({
  key: 'sidebarLargeStore',
  default: false,
});

export const tabSearchIsOpenStore = atom<boolean>({
  key: 'tabSearchIsOpenStore',
  default: false,
});

export const tabNotificationIsOpenStore = atom<boolean>({
  key: 'tabNotificationIsOpenStore',
  default: false,
});
