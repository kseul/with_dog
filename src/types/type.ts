export interface ChatListProp {
  id?: number;
  Image?: any;
  title?: string;
  description?: string;
  modalDescription?: string;
  type?: string;
}

export interface IdPwInputProp {
  placeholder: string;
  type: string;
}

export interface LoginButtonProp {
  title: string;
  color: string;
}

export interface SNSButtonProp {
  title: string;
  icon: string;
}

export interface PageBoxProp {
  title: string;
  moveTo: string;
}

export interface ChatModalProp {
  onClickToggleModal: () => void;
  currentModal: idProp;
  Image: any;
  modalDescription: string | undefined;
  type: string | undefined;
  title: string | undefined;
}

export type idProp = number | undefined;