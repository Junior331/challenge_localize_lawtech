import { TextProps } from "./@types";
import * as S from "./TextStyled";

export const Text = ({
  size,
  color,
  margin,
  maxWidth,
  children,
  textAlign,
  className,
  fontFamily,
  fontWeight,
  lineHeight,
  textTransform,
}: TextProps) => {
  return (
    <S.TextContainer
      size={size}
      color={color}
      margin={margin}
      maxWidth={maxWidth}
      textAlign={textAlign}
      className={className}
      lineHeight={lineHeight}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      textTransform={textTransform}
    >
      {children}
    </S.TextContainer>
  );
};
