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

export interface EditModalProps {
  showAlertModal: string;
  setShowAlertModal: (string) => void;
  setShowEditModal: (boolean) => void;
  setLengthLimit: (boolean) => void;
}
