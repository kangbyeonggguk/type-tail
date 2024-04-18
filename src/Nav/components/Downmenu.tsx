import React from "react";
interface OwnProps {
  downmenu: string;
  menus: string[];
  top: string;
  left: string;
}

const Downmenu: React.FC<OwnProps> = ({ downmenu, menus, top, left }) => {
  console.log(menus);
  return (
    <ul
      className={`${downmenu} w-[97px] border shadow-md pt-[20px] pb-[20px] pl-[20px] pr-[20px] text-[11px] absolute top-[${top}] left-[${left}]`}
    >
      {menus.map((info) => (
        <li className="pb-[8px] text-center">{info}</li>
      ))}
    </ul>
  );
};

export default Downmenu;
