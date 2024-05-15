interface ButtonProps {
  name: string;
  onClick: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <div className={props.className}>
      <button
        onClick={props.onClick}
        type={props.type}
        className="flex w-full justify-center rounded-md bg-[#CBAF87] hover:bg-[#E7DEC8] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button;
