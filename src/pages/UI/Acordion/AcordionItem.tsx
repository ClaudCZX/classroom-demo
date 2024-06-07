import { ReactNode } from "react";

interface AcordionItemProps {
  children: ReactNode;
  isOpen: boolean;
}

const AcordionItem = (props: AcordionItemProps) => {
  return (
    props.isOpen && (
      <div className="px-10 py-2 border-t border-gray-200">
        {props.children}
      </div>
    )
  );
};

export default AcordionItem;
