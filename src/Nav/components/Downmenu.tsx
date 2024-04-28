import React from "react";
interface OwnProps {
  downmenu: string;
  menus: string[];
  top: string;
  left: string;
  id: string;
}

const Downmenu: React.FC<OwnProps> = ({ downmenu, menus, top, left, id }) => {
  return (
    <ul
      className={`${downmenu} w-[97px] border shadow-md pt-[20px] pb-[20px] pl-[20px] pr-[20px] text-[11px] absolute bg-white z-10`}
      style={{ top: `${top}`, left: `${left}` }}
    >
      {menus.map((info, index) => (
        <li
          id={`${id} ${index}`}
          className="pb-[8px] text-center"
          key={index}
          onMouseOver={() => {
            const element: any = document.getElementById(`${id} ${index}`);
            element.style.color = "#4285f4";
          }}
          onMouseOut={() => {
            const element: any = document.getElementById(`${id} ${index}`);
            element.style.color = "#333";
          }}
        >
          {info}
        </li>
      ))}
    </ul>
  );
};

export default Downmenu;
