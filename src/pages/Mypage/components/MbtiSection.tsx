import styled, { css } from 'styled-components';
import MBTILETTER_DATA from '../DATA/MBTILETTER_DATA';
import arrowBottom from 'assets/svg/arrow-bottom.svg';

const MbtiSection = ({ mbti, changeMbti }) => {
  const mbtiNickName = MBTILETTER_DATA.filter(data => {
    return data.mbti === mbti;
  });

  return (
    <DogMbtiContainer>
      <Mbti>
        {mbti}
        <ArrowImg src={arrowBottom} />
        <EditMbti onChange={changeMbti}>
          {MBTILETTER_DATA.map(({ id, mbti }) => {
            return <MbtiOption key={id}>{mbti}</MbtiOption>;
          })}
        </EditMbti>
      </Mbti>
      <MbtiNickName>{mbtiNickName[0].nickname}</MbtiNickName>
    </DogMbtiContainer>
  );
};

const EditsMbti = css`
  position: absolute;
  top: 26%;
  right: 13%;
  height: 1.25rem;
`;

const DogMbtiContainer = styled.div`
  margin-bottom: 2.9rem;
`;

const Mbti = styled.div`
  position: relative;
  font-size: 3rem;
  font-weight: 600;
  color: ${props => props.theme.colors.mint};
`;

const ArrowImg = styled.img`
  ${EditsMbti}
`;

const EditMbti = styled.select`
  ${EditsMbti}
  opacity: 0;
  cursor: pointer;
`;

const MbtiOption = styled.option``;

const MbtiNickName = styled.div`
  margin-top: 1rem;
  font-size: 1.23rem;
  font-weight: 600;
  color: #cc66cc;
`;

export default MbtiSection;
