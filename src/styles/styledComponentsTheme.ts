interface ITheme {
  colors: IColor;
}

interface IColor {
  mainblack: string;
  mainwhite: string;
  mainred: string;
  whitefontcolor: string;
}

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}

export const theme: ITheme = {
  colors: {
    mainblack: "#181114",
    mainwhite: "#fbfffe",
    mainred: "#cc0e00",
    whitefontcolor: "#fbfffe",
  },
};
