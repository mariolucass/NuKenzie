import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    font-family: "Inter", sans-serif;
    margin:0;
    padding:0;

}

body{
    width:100vw;
    height:100vh;
}


:root {
  --color-primary: #fd377e;
  --color-primary60: #fd377e60;
  --color-primary2: #e34981;
  --color-secondary: #03b898;
  --color-terciary: #b41b1b;
  --white-color: #ffffff;
  --black-color:#000000;

  --grey-1: #f8f9fa;
  --grey-2: #e9ecef;
  --grey-2-60: #e9ecef45;
  --grey-3: #868e96;
  --grey-4: #212529;

  --text-button2: #343a40;
}

h1 {
  font-weight: bold;
  font-size: 28px;
}

h2 {
  font-weight: bold;
  font-size: 24px;
}

h3 {
  font-weight: bold;
  font-size: 20px;
}

h4 {
  font-weight: bold;
  font-size: 12px;
}

`;

export const Container = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
