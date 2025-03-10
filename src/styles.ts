import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const MyPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      primary: {
        100: '#E0F7FF',
        200: '#B3EFFF',
        300: '#80E7FF',
        400: '#4DDEFF',
        500: '#009FE3',
        600: '#008FCC',
        700: '#007FB3',
        800: '#006F99',
        900: '#005F80',
      },
      light: {
        100: '#FFFFFF',
        200: '#F8F9FA',
        300: '#E9ECEF',
        400: '#DEE2E6',
        500: '#CED4DA',
      },
      dark: {
        100: '#6C757D',
        200: '#495057',
        300: '#343A40',
        400: '#212529',
        500: '#121416',
      },
    },
  },
});
