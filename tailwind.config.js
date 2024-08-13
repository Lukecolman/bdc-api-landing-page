/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            colors: {
                // 'bdc-green': {
                //     DEFAULT: '#95C45A',
                //     50: '#8BE9A9',
                //     100: '#7AE69C',
                //     200: '#DAF6B1',
                //     300: '#36D969',
                //     400: '#C1DB9C',
                //     500: '#95C45A',
                //     600: '#76A944',
                //     700: '#0C401D',
                //     800: '#76A944',
                //     900: '#000000',
                //     950: '#000000',
                // },
                'bdc-green': {
                    DEFAULT: '#95C45A',
                    50: '#ECF4E1',
                    100: '#E2EFD2',
                    200: '#CFE4B4',
                    300: '#BCD996',
                    400: '#A8CF78',
                    500: '#95C45A',
                    600: '#79A93D',
                    700: '#5C802E',
                    800: '#3E571F',
                    900: '#202D10',
                    950: '#121909',
                },
                'bdc-blue': {
                    DEFAULT: '#222F5C',
                    50: '#A8B5DF',
                    100: '#99A8D9',
                    200: '#7C8ECE',
                    300: '#5E75C3',
                    400: '#435DB5',
                    500: '#384D98',
                    600: '#2D3E7A',
                    700: '#222F5C',
                    800: '#131A33',
                    900: '#04050A',
                    950: '#000000',
                },
                // 'bdc-blue': {
                //     DEFAULT: '#074CFF',
                //     50: '#BFD1FF',
                //     100: '#AAC2FF',
                //     200: '#81A4FF',
                //     300: '#5987FF',
                //     400: '#3069FF',
                //     500: '#074CFF',
                //     600: '#0039CE',
                //     700: '#002A96',
                //     800: '#001A5E',
                //     900: '#000A26',
                //     950: '#00030A',
                // },
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
