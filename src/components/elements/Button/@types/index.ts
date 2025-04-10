import { MouseEvent, ReactNode, RefObject } from 'react';

export type Props = {
  type?: string;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  noActive?: boolean;
  $isOutline?: boolean;
  children?: ReactNode;
  onClick?: (e: MouseEvent) => void;
  size: 'small' | 'medium' | 'large' | string;
};

export type StyledButtonProps = Props & {
  ref?: RefObject<HTMLButtonElement>;
};
