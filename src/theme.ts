import { createTheme, MantineColorsTuple } from '@mantine/core';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const defaultGreen: MantineColorsTuple = [
  '#e4fbf8',
  '#d9f2ea',
  '#b9e0d6',
  '#95cdbf',
  '#77beab',
  '#63b49f',
  '#57af99',
  '#459a85',
  '#388975',
  '#247764',
];

export const theme = createTheme({
  primaryColor: 'defaultGreen',
  colors: {
    defaultGreen,
  },
});

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
