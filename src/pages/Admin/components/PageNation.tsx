import styled from 'styled-components';

const PageNation = ({
  perPage,
  totalPost,
  setCurrentPage,
  indexClicked,
  setIndexClicked,
}: any) => {
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalPost / perPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <PageUl>
      {pageNumbers.map(number => (
        <PageLi
          key={number}
          className={number === indexClicked ? 'indexClicked' : ' '}
        >
          <PageSpan
            onClick={() => {
              setCurrentPage(number);
              setIndexClicked(number);
            }}
          >
            {number}
          </PageSpan>
        </PageLi>
      ))}
    </PageUl>
  );
};

const PageUl = styled.ul`
  margin-top: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  float: left;
  list-style: none;
  text-align: center;
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.313rem;
  border-radius: 0.313rem;
  width: 1.5rem;

  &.indexClicked {
    color: white;
    background-color: ${props => props.theme.colors.gray};
  }

  &:hover {
    cursor: pointer;
    color: white;
    background-color: ${props => props.theme.colors.gray};
  }
  &:focus::after {
    color: white;
    background-color: ${props => props.theme.colors.gray};
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: ${props => props.theme.colors.gray};
  }
`;

export default PageNation;
