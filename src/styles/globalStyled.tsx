import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    font-style: normal;
    box-sizing: border-box;
    font-family: sans-serif;
    font-optical-sizing: auto;
    font-family: "Inter", sans-serif;

    font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  }

  html, body{
    scroll-behavior: smooth;
    color: ${({ theme }) => theme.palette.color.dark};
    font-size:${({ theme }) => theme.typography.htmlFontSize};
    background-color: ${({ theme }) => theme.palette.background.default};
  }
  
  body {
    width: 100%;
    height: auto;
    .MuiFormHelperText-root, .Mui-error {
      margin: 0;
      color: ${({ theme }) => theme.palette.error.default};
      font-size:${({ theme }) => theme.typography.fontSize - 0.2}rem;
    }
    .MuiInputBase-root {
      color: ${({ theme }) => theme.palette.color.dark};
      ::placeholder {
        color:#000000ab;
        opacity: 1; 
      }
      
      ::-ms-input-placeholder { 
        color:#000000ab;
      }
    }

    .drawerContainer {
      .MuiPaper-root {
        box-shadow: none;
      }
      .MuiList-root {
        .MuiButtonBase-root {
          border-bottom: 1px solid #ebe9f1;
        }
      }
      .MuiListSubheader-root {
        color: ${({ theme }) => theme.palette.color.light};
        font-size: ${({ theme }) => theme.typography.fontSize}rem;
        font-weight: ${({ theme }) => theme.typography.fontWeightRegular + 100};
      }
    
      .MuiListItemText-root {
        .MuiTypography-root {
          color: ${({ theme }) => theme.palette.color.regular}!important;
          font-weight: ${({ theme }) => theme.typography.fontWeightBold - 100}!important;
          font-size: ${({ theme }) => theme.typography.fontSize - 0.2}rem !important;
        }
      }
    }

    .dialogContainerCustom{
      .MuiPaper-root{
        width: 100%;
        height: 100%;
        display: flex;
        max-width: 90%;
        overflow: hidden;
        box-shadow: none;
        align-items: center;
        justify-content: center;
        background-color: transparent !important;
      }
    }
  }

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #484d57;
  }

  .MuiTypography-body1 {
    color: ${({ theme }) => theme.palette.color.dark} !important;
    font-size: ${({ theme }) => theme.typography.fontSize - 0.2}rem !important;
    font-weight: ${({ theme }) => theme.typography.fontWeightLight} !important;
  }

  #chat-widget-container{
    display: none !important;
  }
`;
