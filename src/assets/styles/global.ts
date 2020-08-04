import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;

    --color-background: ${(props) => props.theme.colors.colorBackground};
    --color-primary-lighter: ${(props) =>
      props.theme.colors.colorPrimaryLighter};
    --color-primary-light: ${(props) => props.theme.colors.colorPrimaryLight};
    --color-primary: ${(props) => props.theme.colors.colorPrimary};
    --color-primary-dark: ${(props) => props.theme.colors.colorPrimaryDark};
    --color-primary-darker: ${(props) => props.theme.colors.colorPrimaryDarker};

    --color-secundary: ${(props) => props.theme.colors.colorSecundary};
    --color-secundary-dark: ${(props) => props.theme.colors.colorSecundaryDark};

    --color-title-in-primary: ${(props) =>
      props.theme.colors.colorTitleInPrimary};
    --color-text-in-primary: ${(props) =>
      props.theme.colors.colorTextInPrimary};
    --color-text-title: ${(props) => props.theme.colors.colorTextTitle};
    --color-text-complement: ${(props) =>
      props.theme.colors.colorTextComplement};
    --color-text-base: ${(props) => props.theme.colors.colorTextBase};
    --color-line-in-white: ${(props) => props.theme.colors.colorLineInWhite};
    --color-input-background: ${(props) =>
      props.theme.colors.colorInputBackground};

    --color-button-text: ${(props) => props.theme.colors.colorButtonText};

    --color-box-base: ${(props) => props.theme.colors.colorBoxBase};
    --color-box-footer: ${(props) => props.theme.colors.colorBoxFooter};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background: var(--color-background);
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Poppins;
    color: var(--color-text-base);
  }

  .container {
    width: 90vw;
    max-width: 700px;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
}
`;
