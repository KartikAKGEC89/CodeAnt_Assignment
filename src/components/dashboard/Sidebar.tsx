import logo from "../../assets/logo.svg";
import MenuItem from "./MenuItem";
import RenderIcon from "../RenderIcon";
import { useState } from "react";

export default function Sidebar() {

  const [isOpen, setIsOpen] = useState(false);
  const primaryMenu = [
    {
      id: 1,
      icon: "home",
      title: "Repositories",
    },
    {
      id: 2,
      icon: "code",
      title: "AI Code Review",
    },
    {
      id: 3,
      icon: "cloud",
      title: "Cloud Security",
    },
    {
      id: 4,
      icon: "docs",
      title: "How to Use",
    },
    {
      id: 5,
      icon: "settings",
      title: "Settings",
    },
  ];

  const secondaryMenu = [
    {
      id: 6,
      icon: "call",
      title: "Support",
    },
    {
      id: 7,
      icon: "logout",
      title: "Logout",
    },
  ];

  return (
    <div className="flex flex-col border-r border-borderGray bg-white">
      <header
        className={`flex justify-between items-center p-4 
          border-b border-borderGray
          md:border-none`}
      >
        <div className="flex gap-2 items-center text-xl cursor-pointer">
          <img src={logo} alt={"logo"} className={`w-6`} />
          <div>CodeAnt AI</div>
        </div>
        <div
          className="md:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div className="scale-[1.5]">
            {isOpen ? (
              <RenderIcon icon="close" />
            ) : (
              <RenderIcon icon="hamburger" />
            )}
          </div>
        </div>
      </header>
      <aside
        className={`flex-grow flex flex-col absolute w-full top-0 left-0 z-50 transition-transform duration-300 md:relative md:bg-white h-full bg-black bg-opacity-50 ${
          isOpen ? "translate-y-14" : "-translate-y-full md:translate-y-0"
        }`}
      >
        <div className="py-4 px-4 bg-white">
          <div className="relative">
            <select className="w-full border rounded p-2 pr-8 text-ellipsis overflow-hidden appearance-none focus:outline-none">
              <option>KartikAKGEC89</option>
              <option>Demo User</option>
            </select>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <RenderIcon icon="chevron-down" />
            </span>
          </div>
        </div>
        <nav className="flex flex-col md:justify-between flex-grow ">
          <div className="flex flex-col gap-1 bg-white">
            <MenuItem menu={primaryMenu} />
          </div>
          <div className="flex flex-col gap-1 bg-white">
            <MenuItem menu={secondaryMenu} disablebg={true} />
          </div>
        </nav>
      </aside>
    </div>
  );
}