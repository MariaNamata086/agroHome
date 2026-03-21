import React, { ChangeEvent } from 'react';

interface TextAreaProps {
  placeholder?: string;
  name?: string;
  id?: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  error?: boolean;
  errorText?: string;
  helperText?: string;
  label?: string;
  required?: boolean;
}

function FormTextArea(props: TextAreaProps) {
  const {
    placeholder,
    label,
    name,
    id,
    value,
    onChange,
    onBlur,
    error,
    errorText,
    helperText,
    required,
  } = props;

  return (
    <div className="w-full flex flex-col gap-2 text-[12px]">
      {label && (
        <label htmlFor={id} className="pl-2 text-slate-600 md:text-[15px]">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <textarea
        className={`w-full min-h-[120px] text-[13px] resize-none rounded-2xl p-3.5 transition-all duration-300
        bg-[#e6e7e990]
        ${error ? 'border border-red-500' : 'border border-gray-300'}
        focus:outline-none focus:ring-2 ${
          error ? 'focus:ring-red-300' : 'focus:ring-gray-300'
        }`}
        value={value}
        id={id}
        name={name}
        onChange={onChange}
        onBlur={onBlur} // ✅ critical
        placeholder={placeholder}
      />

      <span
        className={`pl-2 text-[11px] ${
          error ? 'text-red-500' : 'text-gray-400'
        }`}
      >
        {error ? errorText : helperText}
      </span>
    </div>
  );
}

export default FormTextArea;
