import styled from 'styled-components';
import { ListData } from 'types/type';
import { NavigateFunction } from 'react-router-dom';

interface ListProps {
  list: ListData;
  setClick: (list: ListData) => void;
  clicked: string;
  navigate: NavigateFunction;
}

const LeftSideList = ({ list, setClick, clicked, navigate }: ListProps) => {
  return (
    <ListBox
      onClick={() => {
        setClick(list);
        navigate(`/admin/${list.value}`);
      }}
      className={clicked === list.value ? 'selected' : ''}
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
