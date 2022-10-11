export const BASE_URL = 'https://withdog.me/api';
export const MAIN_URL = 'https://withdog.me';
const API = {
  LOGOUT: `${BASE_URL}/users/logout`,
  USERS: `${BASE_URL}/users/`,
  GOOGLETOKEN: `${BASE_URL}/users/test/googletoken/`,
  KAKAOTOKEN: `${BASE_URL}/users/test/kakaotoken/`,
  LOGIN: `${BASE_URL}/users/login/email`,
  EMAILCHECK: `${BASE_URL}/users/signup/emailcheck/`,
  SIGNUP: `${BASE_URL}/users/signup`,
  LOGINCHECK: `${BASE_URL}/users/login/check`,
  ADMINNOTICE: `${BASE_URL}/admin/notices`,
  ADMINPOST: `${BASE_URL}/posts`,
  CHATREPORT: `${BASE_URL}/chat/report`,
  BOARDLIST: `${BASE_URL}/posts?`,
  BOARDWRITE: `${BASE_URL}/posts`,
  BOARDDETAIL: `${BASE_URL}/posts/`,
  COMMENTREPORT: `${BASE_URL}/posts/`,
  COMMENTDELETE: `${BASE_URL}/posts/`,
};
export default API;
