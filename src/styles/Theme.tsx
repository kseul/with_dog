const colors = {
  backgroundColor: '#F4F4F4',
  mint: '#7DCBC6',
  purple: '#D5B8EE',
  darkGray: '#333333',
  lightGray: '#ECEDEF',
  gray: '#666666',
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
