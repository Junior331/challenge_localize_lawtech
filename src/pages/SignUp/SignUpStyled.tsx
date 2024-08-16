import styled from "styled-components";
import {
  ContainerInput as InputCustom,
  ContainerPassword as PasswordCustom,
} from "@/components/organism/LayoutAbstract/LayoutAbstractStyled";

export const GenericContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const ContainerText = styled(GenericContainer)`
  gap: 5px;
  margin-bottom: 10px;
  flex-direction: column;
`;

export const Form = styled.form`
  gap: 15px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .MuiFormControl-root {
    gap: 3px;
    width: 100%;
    margin: 0px;
  }
`;
export const ContainerButtons = styled(GenericContainer)`
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: ${({ theme }) => theme.typography.fontSize}rem;
  }
  > button {
    box-shadow: rgba(169, 62, 248, 0.24) 0px 4px 20px 0px;
  }
`;
export const Link = styled.p`
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.fontSize}rem;
`;
export const ContainerInput = styled(InputCustom)``;
export const ContainerPassword = styled(PasswordCustom)``;
export const Footer = styled(GenericContainer)`
  gap: 5px;
  align-items: center;
  justify-content: center;
`;
