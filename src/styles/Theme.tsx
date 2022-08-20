const colors = {
  white: '#FFFFFF',
  kakaoYellow: '#F7E318',
  kakaoBrown: '#341F20',
  lineLightGray: '#E3E3E3',
  lightGray: '#AEB5BC',
  gray: '#676D74',
  boldGray: '#353A3F',
  blue: '#3FA5F7',
  boxBlue: '#2b96ed',
  hoverBlue: '#4A97E6',
  underlineBlue: '#88BEF0',
  selectBlue: '#4a97e6',
  noneGray: '#cfd4d9',
  mint: '#7CCCC7',
  purple: '#CFB6D7',
};

const flex = {
  flexBox: (direction = 'row', align = 'center', justify = 'center') => `
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
  `,
};

const theme = {
  colors,
  flex,
};

export default theme;
