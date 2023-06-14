import { ReactNode, useRef, useState } from "react";
import { url as urlRegex } from "../../lib/helpers/regex";
import useOutside from "../../lib/helpers/useOutside";

type Props = {
  children: ReactNode;
  as: keyof HTMLElementTagNameMap;
  items: {
    text: string;
    link: string;
  }[];
};

const DropdownMenu = (props: Props) => {
  const menuRef = useRef<HTMLUListElement>(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  
  const isLinkExternal = (link: string) => urlRegex.test(link);
  
  const Activator = props.as as keyof JSX.IntrinsicElements;
  
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  }
  const closeMenu = () => {
    setIsMenuVisible(false);
  }
  
  useOutside(menuRef, closeMenu);
  return <>
    <Activator onClick={toggleMenu}>{props.children}</Activator>
    {isMenuVisible && <ul className="translate-y-6 absolute top-0 bg-zinc-200" ref={menuRef}>
      {props.items.map((item, index) => (
        <li className="flex flex-col" key={index}>
          <a
            className="w-full py-3 px-6 text-zinc-900 hover:text-zinc-50 bg-transparent hover:bg-zinc-900 transition-default"
            href={item.link}
            target={isLinkExternal(item.link) ? "_blank" : "_self"}
            dangerouslySetInnerHTML={{__html: item.text}}
            onClick={closeMenu}
          >
          </a>
        </li>
      ))}
    </ul>}
  </>;
};

export default DropdownMenu;
