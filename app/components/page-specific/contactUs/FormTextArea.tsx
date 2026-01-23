import { ChangeEvent } from 'react';

function FormTextArea(props: {
  placeholder?: string;
  name?: string;
  id?: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  error?: boolean;
  helperText?: string | false;
  label?: string;
}) {
  const {
    placeholder,
    label,
    name,
    id,
    value,
    onChange = () => {},
    error,
    helperText,
  } = props;
  return (
    <div className="w-full flex flex-col gap-[5px] text-[11.5px]">
      <label htmlFor={id} className="pl-2">
        <span className="text-gray-500 xl:text-[11px]">{label}</span>
      </label>
      <textarea
        className="h-[150px] 4xl:h-[50px] text-[11px] resize-none border bg-[#e6e7e990] border-gray-100 rounded w-full p-2 outline-none"
        value={value}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
      <span
        className={`text-[11px] pl-2 ${helperText ? 'block' : 'hidden'} ${
          error ? 'text-red-500' : 'text-gray-400'
        }`}
      >
        {helperText}
      </span>
    </div>
  );
}

export default FormTextArea;
