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

export interface ToMbtiButtonProp {
  title: string;
  icon: string;
  textColor: string;
  buttonColor: string;
  buttonSize: number;
  textSize: number;
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

export interface MainRef<T> {
  current: T;
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
