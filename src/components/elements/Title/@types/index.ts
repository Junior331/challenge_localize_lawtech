import { ReactNode } from "react";
import { styleGenericProps } from "@/utils/types";

export type TitleProps = styleGenericProps & {
  className?: string;
  children: ReactNode;
};
