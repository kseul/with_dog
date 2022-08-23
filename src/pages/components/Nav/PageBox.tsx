import styled from 'styled-components';
import { useState } from 'react';
import { PageBoxProp } from 'types/type';
import { useNavigate } from 'react-router-dom';

const PageBox = ({ title, moveTo }: PageBoxProp) => {
  const [underLine, setUnderLine] = useState(false);
  const navigate = useNavigate();
  const goToPages = () => {
    navigate(moveTo);
  };

  return (
    <PageBoxContainer
      onMouseEnter={() => {
        setUnderLine(true);
      }}
      onMouseLeave={() => {
        setUnderLine(false);
      }}
      onClick={goToPages}
    >
      {title}
      {underLine && <PageHover />}
    </PageBoxContainer>
  );
};
const PageBoxContainer = styled.div`
  position: relative;
  padding-left: 1.875rem;
  font-size: 1.188rem;
  cursor: pointer;
`;
const PageHover = styled.div`
  position: absolute;
  left: 42%;
  bottom: -160%;
  background-color: ${props => props.theme.colors.mint};
  height: 0.4rem;
  width: 2.5rem;
`;
export default PageBox;
