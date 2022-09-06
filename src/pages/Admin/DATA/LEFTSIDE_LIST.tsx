import { ListData } from 'types/type';

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
    value: 'posts/deleted/',
  },
  {
    id: 4,
    listName: '차단계정',
    value: 'users/banned/',
  },
];

export default LEFTSIDE_DB;
