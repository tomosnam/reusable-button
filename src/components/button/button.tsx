import React, { ReactNode, useCallback } from 'react';
import classNames from 'classnames';

// props
import { ButtonProps } from './button_props';

// icons
import GroceryStore from './../../icons/grocery_store.jsx';

// styles
import './button.css';

type Icon = {
  grocery_store: ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  size,
  variant,
  disabled,
  disabledShadow,
  startIcon,
  endIcon,
  className,
  ...attributes
}) => {
  const icons: Icon = {
    grocery_store: <GroceryStore />
  };
  const btnColor = `${color ? `btn-${color}` : ''}`;
  const btnVariant = `${variant ? `btn-${variant}` : ''}`;
  const btnDefault = btnColor ? '' : 'btn-default';
  const btnSize = `${size ? `btn-${size}` : ''}`;
  const leftIcon = icons[startIcon as keyof Icon];
  const rightIcon = icons[endIcon as keyof Icon];

  const btnIcon = (): string => {
    if (leftIcon) return 'btn-icon start';
    if (rightIcon) return 'btn-icon end';
    return '';
  };

  const classes = classNames(
    className,
    'btn',
    btnDefault,
    btnVariant,
    btnColor,
    btnSize,
    btnIcon(),
    { disabledShadow: disabledShadow }
  );

  const renderIcon = () => {
    if (leftIcon) return <span className="icon">{leftIcon}</span>;
    if (rightIcon) return <span className="icon">{rightIcon}</span>;
  };

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      if (disabled) {
        e.preventDefault();
        return;
      }

      if (attributes.onClick) {
        return attributes.onClick(e);
      }
    },
    [attributes.onClick, disabled]
  );

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {children}
      {renderIcon()}
    </button>
  );
};

export default Button;
