export interface ListData {
  id: number;
  listName: string;
}

const LEFTSIDE_DB: ListData[] = [
  {
    id: 1,
    listName: '사용자 관리',
  },
  {
    id: 2,
    listName: '게시글 관리',
  },
  {
    id: 3,
    listName: '삭제된 게시글 관리',
  },
  {
    id: 4,
    listName: '차단계정',
  },
];

export default LEFTSIDE_DB;
