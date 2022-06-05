import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      light: string;
      lightHover: string;
      lightActive: string;
      dark: string;
      darkHover: string;
      darkActive: string;
    };
  }
}
