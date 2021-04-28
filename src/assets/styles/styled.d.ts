import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: string;
            blue: string;

            gray_500: string;
        }
    }
}