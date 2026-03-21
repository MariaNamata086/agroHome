import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode } from 'react';

export type ButtonProps = {
  children?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  style?: React.CSSProperties;
  className?: string;
  intent?: 'primary' | 'secondary' | 'text';
  size?: 'small' | 'medium';
  textColor?: string;
};

export default function Button({
  children,
  loading = false,
  disabled = false,
  textColor = 'text-white',
  type = 'submit',
  size = 'medium',
  className = '',
  ...props
}: ButtonProps) {
  const isDisabled = loading || disabled;

  return (
    <button
      type={type}
      disabled={isDisabled}
      {...props}
      className={`h-10 font-semibold w-[60%] flex justify-center items-center bg-primaryBrown py-2 px-4 rounded-full transition 
      ${isDisabled ? 'opacity-60 cursor-not-allowed' : 'hover:scale-105 hover:bg-gray-700 cursor-pointer'} 
      text-black hover:text-white ${textColor} ${className}`}
      style={{
        fontSize: size === 'small' ? 10 : 14,
      }}
    >
      {loading ? (
        <FontAwesomeIcon
          icon={faCircleNotch}
          className="text-[20px] animate-spin"
        />
      ) : (
        children
      )}
    </button>
  );
}
