import { ListData } from 'pages/Admin/type';

const LEFTSIDE_DB: ListData[] = [
  {
    id: 1,
    listName: '사용자',
    value: 'users',
  },
  {
    id: 2,
    listName: '게시글',
    value: 'posts/admin',
  },
  {
    id: 3,
    listName: '삭제된 게시글',
    value: 'posts/deleted/',
  },
  {
    id: 4,
    listName: '차단계정',
    value: 'users/banned/all',
  },
];

export default LEFTSIDE_DB;
