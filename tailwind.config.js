/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter' , 'sans-serif'],
            },
            colors: {
              'bdc-green': {
                  DEFAULT: '#1E9F47',
                  50: '#8BE9A9',
                  100: '#7AE69C',
                  200: '#58DF83',
                  300: '#36D969',
                  400: '#25C156',
                  500: '#1E9F47',
                  600: '#156F32',
                  700: '#0C401D',
                  800: '#031108',
                  900: '#000000',
                  950: '#000000',
              },
              'bdc-blue': {
                  DEFAULT: '#074CFF',
                  50: '#BFD1FF',
                  100: '#AAC2FF',
                  200: '#81A4FF',
                  300: '#5987FF',
                  400: '#3069FF',
                  500: '#074CFF',
                  600: '#0039CE',
                  700: '#002A96',
                  800: '#001A5E',
                  900: '#000A26',
                  950: '#00030A',
              },
              'bdc-gray': {
                  DEFAULT: '#F3F3F3',
                  50: '#FDFDFD',
                  100: '#F3F3F3',
                  200: '#D7D7D7',
                  300: '#BBBBBB',
                  400: '#9F9F9F',
                  500: '#838383',
                  600: '#676767',
                  700: '#4B4B4B',
                  800: '#2F2F2F',
                  900: '#131313',
                  950: '#050505',
              },
          },
        },
    },
    plugins: [],
};
