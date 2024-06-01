import AcordionItem from "./AcordionItem";
import { ReactNode, useState } from "react";

interface AcordionProps {
  key: number;
  title: string;
  subTitle: string;
  imgChapter: string;
  status: string;
  children: ReactNode;
}

const Acordion = (props: AcordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  const acordionOpen = isOpen ? "-" : "+";

  return (
    <div className="border border-gray-200 rounded mb-2">
      <div
        className="flex justify-between items-center px-4 py-2 cursor-pointer"
        onClick={openHandler}
      >
        <div className="w-full px-6">
          <div className="flex justify-between gap-x-6">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={props.imgChapter}
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {props.title}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {props.subTitle}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">Status</p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                {props.status}
              </p>
            </div>
          </div>
        </div>

        <div>{acordionOpen}</div>
      </div>
      <AcordionItem isOpen={isOpen}>{props.children}</AcordionItem>
    </div>
  );
};

export default Acordion;
