import { ReactNode } from "react";
import { styleGenericProps } from "@/utils/types";

export type TextProps = styleGenericProps & {
  className?: string;
  children: ReactNode;
};
