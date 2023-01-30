import { ReactNode } from 'react';

type ButtonPropsVariant = 'outline' | 'text';

type ButtonPropsSize = 'sm' | 'md' | 'lg';

type ButtonPropsColor = 'default' | 'primary' | 'secondary' | 'danger';

export type ButtonProps = {
  disabled?: boolean;
  active?: boolean;
  disabledShadow?: boolean;
  color?: ButtonPropsColor;
  size?: ButtonPropsSize;
  variant?: ButtonPropsVariant;
  children?: ReactNode;
  className?: string;
  startIcon?: string;
  endIcon?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
