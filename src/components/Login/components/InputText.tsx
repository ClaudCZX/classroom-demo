import { ChangeEvent } from "react";

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputText = (props: InputProps) => {
  const isPassword =
    props.name == "password" ? `current-${props.name}` : props.name;

  return (
    <div>
      <label
        htmlFor={props.name}
        className="block text-sm font-medium leading-6 text-[#30475E]"
      >
        {props.label}
      </label>

      <div className="mt-2">
        <input
          id={props.name}
          name={props.name}
          type={props.name}
          value={props.value}
          autoComplete={isPassword}
          onChange={props.onChange}
          required
          className="block w-full rounded-md border-0 px-1 py-1.5 text-[#30475E] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default InputText;
