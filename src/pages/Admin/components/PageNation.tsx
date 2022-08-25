import styled from 'styled-components';

const PagiNation = ({ perPage, totalPost, setCurrentPage }) => {
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalPost / perPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <PageUl>
      {pageNumbers.map(number => (
        <PageLi key={number}>
          <PageSpan onClick={() => setCurrentPage(number)}>{number}</PageSpan>
        </PageLi>
      ))}
    </PageUl>
  );
};

const PageUl = styled.ul`
  width: 100%;
  margin-top: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  padding: 1px;
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;

export default PagiNation;
