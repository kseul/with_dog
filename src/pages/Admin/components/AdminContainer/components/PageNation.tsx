import styled from 'styled-components';
import {
  BiArrowFromLeft,
  BiArrowFromRight,
  BiLeftArrowAlt,
  BiRightArrowAlt,
} from 'react-icons/bi';
import { Dispatch, SetStateAction } from 'react';

interface PageNationProps {
  perPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  blockNum: number;
  setBlockNum: Dispatch<SetStateAction<number>>;
  counts: number | undefined;
}

const PageNation = ({
  perPage,
  setCurrentPage,
  currentPage,
  blockNum,
  setBlockNum,
  counts,
}: PageNationProps) => {
  const createArr = (n: number) => {
    const iArr: number[] = new Array(n);
    for (let i = 0; i < n; i++) iArr[i] = i + 1;
    return iArr;
  };

  const pageLimit = 10;
  const totalPage: number = Math.ceil((counts as number) / perPage);
  const blockArea: number = Number(blockNum * pageLimit);
  const nArr = createArr(Number(totalPage));
  let pArr = nArr?.slice(blockArea, Number(pageLimit) + blockArea);

  const firstPage = (): void => {
    setCurrentPage(1);
    setBlockNum(0);
  };

  const lastPage = (): void => {
    setCurrentPage(totalPage);
    setBlockNum(Math.ceil(totalPage / pageLimit) - 1);
  };

  const prevPage = (): void => {
    if (currentPage <= 1) {
      return;
    }
    if (currentPage - 1 <= pageLimit * blockNum) {
      setBlockNum((n: number) => n - 1);
    }
    setCurrentPage((n: number) => n - 1);
  };

  const nextPage = (): void => {
    if (currentPage >= totalPage) {
      return;
    }
    if (pageLimit * Number(blockNum + 1) < Number(currentPage + 1)) {
      setBlockNum((n: number) => n + 1);
    }
    setCurrentPage((n: number) => n + 1);
  };

  return (
    <PageUl>
      <BiArrowFromRight
        onClick={() => {
          firstPage();
        }}
        className="moveToFirst"
      />
      <BiLeftArrowAlt
        onClick={() => {
          prevPage();
        }}
        className="moveToPrev"
      />
      {pArr.map((n: number) => (
        <PageLi key={n} className={n === currentPage ? 'clicked' : ' '}>
          <PageSpan
            onClick={() => {
              setCurrentPage(n);
            }}
          >
            {n}
          </PageSpan>
        </PageLi>
      ))}
      <BiRightArrowAlt
        onClick={() => {
          nextPage();
        }}
        className="moveToNext"
      />
      <BiArrowFromLeft
        onClick={() => {
          lastPage();
        }}
        className="moveToLast"
      />
    </PageUl>
  );
};

const PageUl = styled.ul`
  ${props => props.theme.flex.flexBox('', 'center', 'center')};
  margin-top: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  float: left;
  list-style: none;
  text-align: center;

  .moveToFirst,
  .moveToPrev,
  .moveToNext,
  .moveToLast {
    cursor: pointer;
  }

  .moveToFirst,
  .moveToPrev {
    margin-right: 0.5rem;
  }

  .moveToLast,
  .moveToNext {
    margin-left: 0.5rem;
  }
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.313rem;
  border-radius: 0.313rem;
  width: 1.5rem;

  &.clicked {
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
