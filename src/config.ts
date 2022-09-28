export const BASE_URL = 'https://togedog-dj.herokuapp.com';
const API = {
  LOGOUT: `${BASE_URL}/users/logout`,
  USERS: `${BASE_URL}/users/`,
  GOOGLETOKEN: `${BASE_URL}/users/test/googletoken/`,
  KAKAOTOKEN: `${BASE_URL}/users/test/kakaotoken/`,
  LOGIN: `${BASE_URL}/users/login/email`,
  EMAILCHECK: `${BASE_URL}/users/signup/emailcheck/`,
  SIGNUP: `${BASE_URL}/users/signup`,
  LOGINCHECK: `${BASE_URL}/users/login/check`,
  ADMINUSER: `${BASE_URL}/users`,
  ADMINNOTICE: `${BASE_URL}/admin/notices`,
  ADMINPOST: `${BASE_URL}/posts`,
};
export default API;
