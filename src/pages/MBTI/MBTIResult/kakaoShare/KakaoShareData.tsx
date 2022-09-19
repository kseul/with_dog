const { Kakao }: any = window;

export default function initialize() {
  Kakao.init(process.env.REACT_APP_KAKAO_KEY);
}
