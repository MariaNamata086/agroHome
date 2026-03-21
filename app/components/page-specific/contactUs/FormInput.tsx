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
    type = 'text',
    placeholder,
    label,
    name,
    id,
    value,
    onChange,
    onBlur,
    error,
    helperText,
    required,
    errorText,
  } = props;

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (type === 'number') {
      const rawValue = event.target.value.replace(/,/g, '');
      event.target.value = rawValue;
    }

    onChange?.(event);
  };

  const inputType =
    type === 'password' ? (passwordVisible ? 'text' : 'password') : type;

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
        <input
          className={`w-full text-[13px] bg-[#e6e7e990] rounded-2xl px-3.5 md:p-6 h-10 transition-all duration-300
          ${error ? 'border border-red-500' : 'border border-gray-300'}
          focus:outline-none focus:ring-2 ${
            error ? 'focus:ring-red-300' : 'focus:ring-gray-300'
          }`}
          type={inputType}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          id={id}
          name={name}
          placeholder={placeholder}
        />

        {type === 'password' && (
          <div
            className="absolute inset-y-0 right-0 pr-2 flex items-center cursor-pointer"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
          </div>
        )}
      </div>

      <span
        className={`pl-2 text-[10px] ${
          error ? 'text-red-500' : 'text-gray-400'
        }`}
      >
        {error ? errorText : helperText}
      </span>
    </div>
  );
}

export default FormInput;
