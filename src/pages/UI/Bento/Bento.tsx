import { ReactNode } from "react";

interface BentoProps {
  className: string;
  children: ReactNode;
}

const Bento = (props: BentoProps) => {
  return (
    <div
      className={`w-full h-full grid ${props.className} gap-4 mx-auto px-20 pb-14`}
    >
      {props.children}
    </div>
  );
};

export default Bento;
