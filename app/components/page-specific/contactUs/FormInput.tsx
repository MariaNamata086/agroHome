import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string | false;
  label?: string;
  required?: boolean;
  errorText?: string | undefined;
}

function FormInput(props: InputProps) {
  const {
    type,
    placeholder,
    label,
    name,
    id,
    value,
    onChange,
    error,
    helperText,
    required,
    errorText,
  } = props;

  const [number, setNumber] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const formatNumber = (event: ChangeEvent<HTMLInputElement>) => {
    if (type === 'number') {
      let formattedValue = event.target.value.replace(/[^0-9.]/g, '');

      const parts = formattedValue.split('.');

      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

      formattedValue = parts.join('.');

      setNumber(formattedValue);

      event.target.value = formattedValue.replace(/,/g, '');
    }

    if (onChange) {
      onChange(event);
    }
  };

  const borderColor = error ? '#e53e3e' : 'oklch(87.2% 0.01 258.338)';

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label
          htmlFor={id}
          className="pl-1 md:text-slate-600 text-[12px] md:text-[15px]"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        {' '}
        {/* Wrap the input and the icon in a div */}
        <input
          className={`flex transition-all hover:scale-105 duration-700 w-full text-[13px] bg-[#e6e7e990] rounded-2xl focus:shadow-sm focus:${borderColor} px-3.5 focus:border focus:border-gray-300 md:p-6 h-10`}
          type={
            type === 'password'
              ? passwordVisible
                ? 'text'
                : 'password'
              : 'text'
          }
          value={type === 'number' ? number : value}
          onChange={formatNumber}
          id={id}
          name={name}
          placeholder={placeholder}
        />
        {type === 'password' && (
          <div
            className="absolute inset-y-0 right-0 pr-2 flex items-center cursor-pointer "
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
          </div>
        )}
      </div>
      <span
        className={`pl-2 text-[10px] ${
          errorText ? 'text-red-500' : 'text-gray-400'
        }`}
      >
        {errorText || helperText}
      </span>
    </div>
  );
}

export default FormInput;
