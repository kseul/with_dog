export interface ChatListProp {
  id?: number;
  Image?: any;
  title?: string;
  description?: string;
}

export interface ChatModalProp {
  onClickToggleModal: () => void;
  currentModal: idProp;
}

export type idProp = number | undefined;
