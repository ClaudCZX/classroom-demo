import { ReactNode } from "react";

interface BentoProps {
  className: string;
  children: ReactNode;
}

const Bento = (props: BentoProps) => {
  return (
    <div className={`w-full h-full grid ${props.className} gap-4 mx-auto p-20`}>
      {props.children}
    </div>
  );
};

export default Bento;
