import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: string;
            black: string;

            blue: string;
            orange: string;
            purple: string;

            gray_300: string;
            gray_500: string;
            gray_800: string;
        }
    }
}