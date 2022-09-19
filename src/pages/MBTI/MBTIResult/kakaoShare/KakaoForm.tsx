import kakaoShare from 'assets/images/kakaoShare.png';
const { Kakao, location }: any = window;

export const shareKakao = () => {
  const sharedUrl = location.href;

  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '함께하개',
      description: '댕댕이 MBTI 검사결과 보러가기',
      imageUrl: 'https://ifh.cc/g/bp4jV4.png',
      link: {
        webUrl: sharedUrl,
        mobileWebUrl: sharedUrl,
      },
    },
    buttons: [
      {
        title: '자세히 보기',
        link: {
          webUrl: sharedUrl,
          mobileWebUrl: sharedUrl,
        },
      },
    ],
  });
};
