import styled from 'styled-components';
import { ListData } from '/Users/sozzln/Desktop/with_dog/src/pages/Admin/DATA/LEFTSIDE_LIST';

interface ListProps {
  list: ListData;
}

const LeftSideList = ({ list }: ListProps) => {
  return <ListBox>{list.listName}</ListBox>;
};

const ListBox = styled.li`
  width: 100%;
  height: 60px;
  font-size: 20px;
  cursor: pointer;
`;

export default LeftSideList;
