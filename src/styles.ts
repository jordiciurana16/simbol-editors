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
    },
  },
});
