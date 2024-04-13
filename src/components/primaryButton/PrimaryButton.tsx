import React, { ButtonHTMLAttributes } from 'react';

const PrimaryButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button
        className="primary-button"
      {...props}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;