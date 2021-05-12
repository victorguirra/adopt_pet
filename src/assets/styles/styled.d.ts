import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white:string;
            black:string;
            
            orange:string;
            orange_500:string;

            purple:string;
            purple_500:string;
            
            blue: string;
            green: string;
            red: string;

            gray_300:string;
            gray_500:string;
            gray_800:string;
        }
    }
}