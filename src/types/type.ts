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
  name: string;
  handleUserInput: (e) => void;
  submitSigninInfo: () => void;
}

export interface LoginButtonProp {
  title: string;
  color: string;
  size: number;
  isActive: boolean;
  func: () => void;
}

export interface SNSButtonProp {
  title: string;
  icon: string;
  handleSNSLogin: () => void;
}

export interface PageBoxProp {
  title: string;
  moveTo: string;
}

export interface ChatModalProp {
  onClickToggleModal: () => void;
  id?: number;
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

export type idProp = number | undefined;

export interface BoardDataProp {
  id?: number;
  subject?: string;
  image_url?: string;
  created_at?: string;
  user_nickname?: string;
  user_thumbnail?: string;
  post_likes_count?: number;
  comments?: any;
  modalContent?: any;
  handleModal?: () => void;
}

export interface CheckValidProps {
  errorMessage: string;
}

export interface UserDataProps {
  account_type?: string;
  email?: string;
  mbti?: string;
  name?: string;
  nickname?: string;
  status?: string;
  thumbnail_url?: string;
  user_type?: string;
}

export interface MainRef<T> {
  current: T;
}

export interface AlertModalProps {
  title: string;
  setShowAlertModal: (string) => void;
}

export interface EditModalProps {
  showAlertModal: string;
  setShowAlertModal: (string) => void;
  setShowEditModal: (boolean) => void;
  setLengthLimit: (boolean) => void;
}

export interface UserDataProps {
  account_type?: string;
  email?: string;
  mbti?: string;
  name?: string;
  nickname?: string;
  status?: string;
  thumbnail_url?: string;
  user_type?: string;
  id?: number;
}

export interface ChatRoomProps {
  room?: number;
}

export interface MessagesProps {
  user?: string;
  text?: string;
  time?: string;
  mbti?: string;
  nickname?: string;
  message;
}
