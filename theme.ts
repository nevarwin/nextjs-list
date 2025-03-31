import { createTheme, MantineColorsTuple } from '@mantine/core';

const myColor: MantineColorsTuple = [
  '#ffeaec',
  '#fcd4d7',
  '#f4a7ac',
  '#ec777e',
  '#e64f57',
  '#e3353f',
  '#e22732',
  '#c91a25',
  '#b41220',
  '#9e0419',
];

export const theme = createTheme({
  colors: {
    primary: myColor,
  },
  primaryColor: 'primary',
});
