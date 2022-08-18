import React from 'react';
import Dog from '../../assets/svg/Btn_DogPaw_Gray.svg';
import styled from 'styled-components';

const Main = () => {
  return (
    <>
      <div>Main</div>
      <A src={Dog} />
    </>
  );
};

const A = styled.img`
  width: 200px;
`;

export default Main;
