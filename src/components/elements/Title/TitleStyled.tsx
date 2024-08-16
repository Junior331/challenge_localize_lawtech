import styled from "styled-components";
import { styleGenericProps } from "@/utils/types";

export const TitleContainer = styled.h2<styleGenericProps>`
  width: 100%;
  margin: ${({ margin }) => margin};
  font-size: ${({ size }) => size || "2"}rem;
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color }) => color || "#5E5873"};
  font-feature-settings: "liga" off, "clig" off;
  line-height: ${({ lineHeight }) => lineHeight};
  text-shadow: ${({ textShadow }) => textShadow};
  font-weight: ${({ fontWeight }) => fontWeight || 600};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  text-transform: ${({ textTransform }) => textTransform};
  max-width: ${({ maxWidth }) => maxWidth || "max-content"};
  font-family: ${({ fontFamily }) => fontFamily || `"Inter"`}, sans-serif;
`;
