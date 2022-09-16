import styled from 'styled-components';
import { ListData } from 'types/type';
import { NavigateFunction } from 'react-router-dom';
import selectedImg from 'assets/svg/dog-paws2.svg';

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
      {clicked === list.value && <SelectedImg src={selectedImg} />}
    </ListBox>
  );
};

const ListBox = styled.li`
  ${props => props.theme.flex.flexBox('', 'center', 'space-between')}
  margin-right : auto;
  margin-left: auto;
  padding-left: 1.5rem;
  width: 100%;
  height: 3.75rem;
  font-size: 1.25rem;
  color: ${props => props.theme.colors.black};
  cursor: pointer;

  &.selected {
    color: ${props => props.theme.colors.white};
  }

  :hover {
    color: ${props => props.theme.colors.white};
  }
`;

const SelectedImg = styled.img`
  margin-right: 1.5rem;
  width: 2rem;
  height: 2rem;
`;

export default LeftSideList;
