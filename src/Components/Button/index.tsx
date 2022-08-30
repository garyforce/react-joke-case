import React from "react";
import PropTypes from 'prop-types';
import styles from "./index.module.css";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  button_style: string;
}

const Button: React.FC<IButtonProps> = ({
  children,
  button_style,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[`button-${button_style}`]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
