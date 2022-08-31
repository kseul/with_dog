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
  size: number;
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

export interface ToMbtiButtonProp {
  title: string;
  icon: string;
  textColor: string;
  buttonColor: string;
  buttonSize: number;
  textSize: number;
}

export interface MainPagesProp {
  backGroundImage: string;
}

export interface LastPageProp extends MainPagesProp {
  title: string;
  subTitle: string;
}

export interface ContentPagesProp extends LastPageProp {
  reverse: boolean;
  id: number;
}

export interface ListData {
  id: number;
  listName: string;
  value: string;
}

export interface PagenatedData {
  account_type: string;
  email: string;
  id: number;
  mbti: string;
  name: string;
  nickname: string;
  status: string;
  thumbnail_url: string;
  user_type: string;
}

export type idProp = number | undefined;
