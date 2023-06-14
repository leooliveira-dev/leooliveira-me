import { useState, type ReactNode, useRef } from "react";
import useOutside from "../../lib/helpers/useOutside";

type Props = {
  children: ReactNode;
  text: string;
};

const DropdownMoreInfo = (props: Props) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };
  
  const close = () => {
    setVisible(false);
  };

  useOutside(dropdownRef, close);

  return (
    <>
      <div onClick={toggle}>{props.children}</div>
      {visible && (
        <div
          className="cursor-pointer absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-zinc-900 p-4 text-white"
          ref={dropdownRef}
          dangerouslySetInnerHTML={{__html: props.text}}
          onClick={close}
        >
        </div>
      )}
    </>
  );
};

export default DropdownMoreInfo;
