import { TitleProps } from "./@types";
import * as S from "./TitleStyled";

export const Title = ({
  size,
  color,
  margin,
  maxWidth,
  children,
  className,
  textAlign,
  fontFamily,
  fontWeight,
  lineHeight,
  textShadow,
  letterSpacing,
  textTransform,
}: TitleProps) => {
  return (
    <S.TitleContainer
      size={size}
      color={color}
      margin={margin}
      maxWidth={maxWidth}
      className={className}
      textAlign={textAlign}
      textShadow={textShadow}
      lineHeight={lineHeight}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      textTransform={textTransform}
    >
      {children}
    </S.TitleContainer>
  );
};
