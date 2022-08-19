import React from 'react';
import styled from 'styled-components/macro';

const ProgressBar = () => {
  return (
    <ProgressBarContainer>
      <ProgressPosition />
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div`
  ${props => props.theme.flex.flexBox('row')}
  margin-top: 40px;
  width: 1200px;
  height: 50px;
  background-color: red;
  border-radius: 50px;
`;

const ProgressPosition = styled.div`
  margin: 0 auto;
  width: 1180px;
  height: 35px;
  background-color: blue;
  border-radius: 30px;
`;
export default ProgressBar;
