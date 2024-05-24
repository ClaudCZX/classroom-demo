import { ReactNode } from "react";

//TODO: quitar el opcional en children
interface BentoItemProps {
  className?: string;
  children?: ReactNode;
}

const BentoItem = (props: BentoItemProps) => {
  return (
    <div
      className={`${props.className} rounded-xl backdrop-blur-md border border-black/10 shadow-inner shadow-white/10`}
    >
      {props.children}
    </div>
  );
};

export default BentoItem;
