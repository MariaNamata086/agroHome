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
    <div className="w-full flex flex-col gap-1.25 text-[11.5px]">
      <label htmlFor={id} className="pl-2">
        <span className="text-gray-500 xl:text-[15px]">{label}</span>
      </label>
      <textarea
        className="h-37.5 4xl:h-[50px] text-[11px] md:text-[13px] resize-none border bg-[#e6e7e990] focus:bg-white border-gray-100 rounded-2xl focus:border focus:border-gray-300 w-full p-3.5 outline-none"
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
