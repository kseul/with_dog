export interface ChatListProp {
  id?: number;
  Image?: any;
  title?: string;
  description?: string;
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

export interface ChatModalProp {
  onClickToggleModal: () => void;
  currentModal: idProp;
}

export type idProp = number | undefined;
