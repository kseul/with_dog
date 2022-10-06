export interface ListData {
  id: number;
  listName: string;
  value: string;
}

export interface PostDataTypes {
  id: number;
  created_at: string;
  updated_at: string;
  name?: string;
  nickname?: string;
  email?: string;
  user_type?: string;
  status?: string;
  account_type?: string;
  thumbnail_url?: string;
  mbti?: string;
  reported_count?: number;
  user?: number;
  subject?: string;
  image_url?: string;
  user_id?: number;
  user_nickname?: string;
  user_thumbnail?: string;
  post_likes_count?: number;
  user_mbti?: string;
  user_signup_time?: string;
  content?: string;
  is_deleted?: boolean;
  count: number;
}

export interface PostReports {
  id: number;
  content: string;
  post_id: number;
}

export interface CommentReports {
  id: number;
  content: string;
  comment_id: number;
  post_id: number;
}

export interface NoticeBoxDataTypes {
  id: number;
  content: string;
  comment_id?: number;
  post_id: number;
}

export interface CommentListTypes {
  id: number;
  created_at: string;
  content: string;
  user_id: number;
  post_id: number;
  user_nickname: string;
  user_thumbnail: string;
}

export interface FilterValueTypes {
  search: string;
  reported: number;
  date: string;
}

export interface ModalProps {
  detailModalOpener: () => void;
  modalId?: number;
}

export interface CommentTypes {
  id: number;
  created_at: string;
  content: string;
  user_id: number;
  post_id: number;
  user_nickname: string;
  user_thumbnail: string;
}

export interface ModalDataTypes {
  id: number;
  subject: string;
  content: string;
  created_at: string;
  image_url: string;
  user_id: number;
  user_name: string;
  user_nickname: string;
  user_email: string;
  user_mbti: string;
  user_address: string;
  user_thumbnail: string;
  user_created_at: string;
  comments_list: CommentTypes[];
}
