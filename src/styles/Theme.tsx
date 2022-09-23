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
  selectMint: '#48c0b8',
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

const deviceSizes = {
  mobile: '375px',
  tablet: '768px',
  laptop: '1024px',
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

const theme = {
  colors,
  flex,
  device,
};

export default theme;
