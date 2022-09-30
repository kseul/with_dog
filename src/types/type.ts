export interface ListData {
  id: number;
  listName: string;
  value: string;
}

export type idProp = number | undefined;

export interface EditModalProps {
  showAlertModal: string;
  setShowAlertModal: (string) => void;
  setShowEditModal: (boolean) => void;
  setLengthLimit: (boolean) => void;
}
