import { GlobalStyles } from "@/styles/globalStyled";
import { LayoutProps } from "./@types";
import * as S from "./LayoutAbstractStyled";
import { images } from "@/assets/images";
import { Snackbar } from "@/components/modules";

const LayoutAbstract = ({ children }: LayoutProps) => {
  return (
    <S.LayoutContainer>
      <GlobalStyles />
      <Snackbar />
      <S.Logo src={images.logo} alt="Image logo" />
      <S.ContainerAbstract>
        <S.Img src={images.illustration} alt="Image illustration" />
      </S.ContainerAbstract>
      <S.LayoutContent>
        <div className="children">{children}</div>
      </S.LayoutContent>
    </S.LayoutContainer>
  );
};

export default LayoutAbstract;
