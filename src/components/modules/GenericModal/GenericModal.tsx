import { Dialog, Slide } from "@mui/material";
import { ReactElement, Ref, forwardRef } from "react";
import { TransitionProps } from "@mui/material/transitions";
import { Props } from "./@types";
import { icons } from "@/assets/icons";
import * as S from "./GenericModalStyled";

export const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} timeout={300} />;
});

export const GenericModal = ({ open, setOpen, children, maxWidth, maxHeight }: Props) => {
  return (
    <Dialog
      keepMounted
      open={open}
      className="dialogContainerCustom"
      TransitionComponent={Transition}
      aria-describedby="alert-dialog-slide-description"
    >
      <S.ModalContainer maxWidth={maxWidth} maxHeight={maxHeight}>
        <S.Button onClick={() => setOpen(!open)}>
          <S.Icon src={icons.close} alt="Icon close" />
        </S.Button>
        <S.Content>{children}</S.Content>
      </S.ModalContainer>
    </Dialog>
  );
};
