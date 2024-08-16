import styled, { css } from "styled-components";
import media from "@/styles/breakpoints";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  max-width: 100%;
  align-items: start;
  justify-content: space-between;
`;
export const LayoutContent = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  min-width: 450px;
  align-items: flex-start;
  justify-content: flex-end;

  backdrop-filter: blur(6px);
  /* border-left: 2px solid #eef1f8; */
  box-shadow: 0px 4px 12px 0px rgba(238, 241, 248, 0.24) inset;
  background: linear-gradient(180deg, rgba(238, 241, 248, 0.64) 0%, rgba(243, 245, 251, 0.84) 100%);

  > div {
    width: 100%;
    height: 100%;
    padding: 0px 70px;
  }

  > .children {
    width: 100%;
    gap: 30px;
    height: auto;
    margin: auto;
    display: flex;
    padding: 0px 60px;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    > form {
      > div {
        > legend,
        .MuiFormLabel-root {
          margin: 0px 0 10px;
          letter-spacing: 0.15px;
          color: ${({ theme }) => theme.palette.color.light};
          font-size: ${(props) => props.theme.typography.fontSize}rem;
          font-weight: ${(props) => props.theme.typography.fontWeightLight};
        }
        legend {
          margin: 0px;
          font-size: ${(props) => props.theme.typography.fontSize - 0.3}rem;
        }

        .link {
          color: #7367f0;
        }
      }

      .MuiFormHelperText-root {
        color: #d32f2f !important;
        font-size: ${(props) => props.theme.typography.fontSize - 0.3}rem;
      }

      .MuiOutlinedInput-root {
        .MuiOutlinedInput-input {
          &::-webkit-autofill,
          &::-webkit-autofill:hover,
          &::-webkit-autofill:focus,
          &::-webkit-autofill:active {
            transition: background-color 5000s ease-in-out 0s;
            -webkit-text-fill-color: #fff !important;
          }
          color: #000;
          font-weight: 400;
          border-radius: 0px;
          border-radius: 8px;
          background: #fff;
          font-size: ${(props) => props.theme.typography.fontSize}rem;
          &::placeholder {
            font-weight: 400;
            color: #b9b9c3;
          }
        }
        .MuiOutlinedInput-notchedOutline {
          border-radius: 8px;
          border-color: #d8d6de;
        }
        :hover {
          .MuiOutlinedInput-notchedOutline {
            border-color: #d8d6de;
          }
        }
      }

      .MuiSvgIcon-root {
        fill: #b0b8cb;
        font-size: ${(props) => props.theme.typography.fontSizeRegular + 0.3}rem;
      }

      .link {
        color: #fff;
        cursor: pointer;
      }
    }
  }

  ${media.lessThan("regular")`
    width: 100%;
  `}
`;
export const ContainerAbstract = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  ${media.lessThan("regular")`
    display: none;
  `}
`;
export const Img = styled.img`
  width: 60%;
  margin: 0 auto;
`;
export const Logo = styled(Img)`
  top: -10px;
  z-index: 1;
  left: -10px;
  max-width: 200px;
  position: absolute;
`;
export const ContainerInput = styled.div<{ error?: boolean }>`
  width: 100%;
  display: flex;
  position: sticky;
  align-items: center;
  justify-content: flex-start;

  input {
    padding-right: 50px;
  }

  .invalid-number-message {
    top: 45px;
    font-size: 1rem;
    font-weight: 400;
    color: #d32f2f;
    line-height: 24px;
    font-style: normal;
    position: absolute;
    letter-spacing: 0.15px;
    background-color: transparent;
  }

  ${({ error }) =>
    error &&
    css`
      .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-error {
        color: #d32f2f;
        font-size: 1.4rem;
      }

      .MuiOutlinedInput-notchedOutline {
        font-size: 1.4rem;
        border-color: #d32f2f !important;
      }
      .MuiFormHelperText-root {
        font-size: 1.4rem;
        margin-bottom: 10px;
      }
    `};
  ${media.lessThan("medium")`
    width: 100%;
  `}
`;
export const ContainerPassword = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  div:first-child {
    margin-right: 0px;
    width: 100% !important;
  }
  button {
    width: 45px;
    right: 15px;
    height: 49px;
    color: #ffffff;
    position: absolute;

    .MuiSvgIcon-root {
      font-size: 2.5rem;
    }
  }
`;
