import styled from "styled-components";
import { styleGenericProps } from "@/utils/types";

export const TextContainer = styled.p<styleGenericProps>`
  width: 100%;
  margin: ${({ margin }) => margin};
  color: ${({ color }) => color || "#6E6B7B"};
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ size }) => size || "1.6"}rem;
  line-height: ${({ lineHeight }) => lineHeight};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  text-transform: ${({ textTransform }) => textTransform};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  max-width: ${({ maxWidth }) => maxWidth || "max-content"};
  font-family: ${({ fontFamily }) => fontFamily || `"Inter"`}, sans-serif;
`;
