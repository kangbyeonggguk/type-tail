import React from "react";
interface OwnProps {
  downmenu: string;
  menus: string[];
  top: string;
  left: string;
}

const Downmenu: React.FC<OwnProps> = ({ downmenu, menus, top, left }) => {
  return (
    <ul
      className={`${downmenu} w-[97px] border shadow-md pt-[20px] pb-[20px] pl-[20px] pr-[20px] text-[11px] absolute bg-white z-10`}
      style={{ top: `${top}`, left: `${left}` }}
    >
      {menus.map((info, index) => (
        <li className="pb-[8px] text-center" key={index}>
          {info}
        </li>
      ))}
    </ul>
  );
};

export default Downmenu;
