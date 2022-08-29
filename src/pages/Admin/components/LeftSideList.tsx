import styled from 'styled-components';
import { ListData } from 'pages/Admin/DATA/LEFTSIDE_LIST';

interface ListProps {
  list: ListData;
  setClick: (list: ListData) => void;
  clicked: string;
}

const LeftSideList = ({ list, setClick, clicked }: ListProps) => {
  return (
    <ListBox
      onClick={() => {
        setClick(list);
      }}
      className={clicked === list.listName ? 'selected' : ''}
    >
      {list.listName}
    </ListBox>
  );
};

const ListBox = styled.li`
  width: 100%;
  height: 3.75rem;
  font-size: 1.25rem;
  cursor: pointer;

  &.selected {
    color: yellow;
  }

  :hover {
    color: yellow;
  }
`;

export default LeftSideList;
