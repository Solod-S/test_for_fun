import { createGlobalStyle } from "styled-components";

import "./normilize.css";

export const GlobalStyle = createGlobalStyle`


h1,
h2,
h3,
h4,
p,
ul {
  margin-top: 0;
  margin-bottom: 0;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
  padding-left: 0;
}

button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
}

body {
  margin: 0;

  color: ${(p) => p.theme.colors.primaryTextColor};

  font-family: ${(p) => p.theme.fontFamily.monserat};
  scroll-behavior: smooth;
}

.img {
  display: block;
  max-width: 100%;
  height: auto;
}
.container {
  /* padding-left: ${(p) => p.theme.space[4]}px;
  padding-right: ${(p) => p.theme.space[4]}px;
  margin-left: auto;
  margin-right: auto; */
  width: 100vh;
  height: 100vh

}

.section {
  padding-top: ${(p) => p.theme.space[6]}px;
  padding-bottom: ${(p) => p.theme.space[6]}px;
}

.accentColor {
    color: ${(p) => p.theme.colors.accentTextColor};
    background: ${(p) => p.theme.colors.accentBgColor};
  }


`;
