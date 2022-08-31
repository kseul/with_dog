export interface ListData {
  id: number;
  listName: string;
  value: string;
}

const LEFTSIDE_DB: ListData[] = [
  {
    id: 1,
    listName: '사용자 관리',
    value: 'users',
  },
  {
    id: 2,
    listName: '게시글 관리',
    value: 'posts',
  },
  {
    id: 3,
    listName: '삭제된 게시글 관리',
    value: 'deleted',
  },
  {
    id: 4,
    listName: '차단계정',
    value: 'banned',
  },
];

export default LEFTSIDE_DB;
