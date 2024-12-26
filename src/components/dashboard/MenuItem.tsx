import { useState } from "react";
import RenderIcon from "../RenderIcon";
import { useNavigate } from "react-router-dom";

export default function MenuItem({
  menu,
  disablebg,
}: {
  menu: { id: number; icon: string; title: string }[];
  disablebg?: boolean;
}) {
  const [menuId, setMenuId] = useState(1);
  const navigate = useNavigate();
  return (
    <>
      {menu.map((item) => (
        <div
          key={item.id}
          className={`${
            item.id == menuId ? "bg-primaryBlue text-white" : "hover:bg-altGray"
          } p-2 mx-2 rounded-md flex items-center gap-2 cursor-pointer font-semibold`}
          onClick={() => {
            if (!disablebg) {
              setMenuId(item.id);
            }
            if (item.title == "Logout") {
              navigate("/");
            }
          }}
        >
          <RenderIcon icon={item.icon} />
          <p>{item.title}</p>
        </div>
      ))}
    </>
  );
}