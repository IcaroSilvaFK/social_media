export const theme = {
  colors: {
    brand: {
      100: '#F66EF7',
      200: '#F66EF7',
      300: '#A615AB',
      400: '#800086',
      500: '#5A0064',
    },
    neutrals: {
      gray: {
        300: '#CBD5E0',
        400: '#737373',
        500: '#595959',
      },
      white: '#fff',
      black: '#000',
    },
  },
  opacity: {
    'opacity-25': '40',
    'opacity-50': '80',
    'opacity-75': 'BF',
  },
  sizes: {},
  fonts: {
    poppins: {
      300: 'Poppins_300Light',
      400: 'Poppins_400Regular',
      700: 'Poppins_700Bold',
      900: 'Poppins_900Black',
    },
    'dancing-script': {
      400:'DancingScript_400Regular',
      700:'DancingScript_700Bold'
    }
  },
} as const;
