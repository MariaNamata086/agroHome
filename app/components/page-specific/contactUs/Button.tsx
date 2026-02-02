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
  intent?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium';
  textColor?: string;
};

export default function Button({
  children,
  loading,
  disabled,
  textColor = 'text-white',
  type = 'submit',
  className,
  size = 'medium',
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={loading || disabled}
      type={type}
      {...props}
      className={`h-10 font-semibold border-none w-[60%] color-white justify-center items-center bg-primaryBrown py-2 px-4 rounded-full hover:scale-105 hover:bg-gray-700 text-black hover:text-white ${textColor}`}
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer',
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
