import styled from 'styled-components';
import { ListData } from '/Users/sozzln/Desktop/with_dog/src/pages/Admin/DATA/LEFTSIDE_LIST';

type ListProps = {
  list: ListData;
};

const LeftSideList = ({ list }: ListProps) => {
  return <ListBox>{list.listName}</ListBox>;
};

const ListBox = styled.li`
  width: 100%;
  height: 30px;
`;

export default LeftSideList;
