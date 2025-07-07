import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import type { SideDataProps } from "../nav-data";

export default function NavItem({ item }: { item: SideDataProps[] }) {
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const menuRefs = useRef<HTMLUListElement[]>([]);

  useEffect(() => {
    menuRefs.current.forEach((menu, index) => {
      if (menu) {
        menu.style.maxHeight =
          activeSubmenu === index ? `${menu.scrollHeight}px` : "0px";
      }
    });
  }, [activeSubmenu]);

  const handleSubmenuToggle = (index: number) => {
    setActiveSubmenu((prev) => (prev === index ? null : index));
  };

  return (
    <ul>
        {item.map(({ to, label, icon: Icon, submenu }, parentIndex) => (
          <li key={parentIndex}>
            {to ? (
              <Link className="flex px-3 hover:bg-[#FFFFFF66] py-2 items-center font-medium text-base gap-x-2 text-primary hover:text-white" to={to}>
                {Icon && <Icon />} {label}
              </Link>
            ) : (
              <div
                onClick={() => handleSubmenuToggle(parentIndex)}
                className="flex items-center px-3  py-2 justify-between cursor-pointer"
              >
                <span className="flex items-center gap-x-2">
                  {Icon && <Icon />} {label}
                </span>
                {activeSubmenu === parentIndex ? (
                  <ChevronUp className="size-5 font-extrabold" />
                ) : (
                  <ChevronDown className="size-5 font-extrabold" />
                )}
              </div>
            )}

            {submenu && (
              <ul
                ref={(el) => {
                  if (el) menuRefs.current[parentIndex] = el;
                }}
                className="overflow-hidden transition-all duration-300 ease-out max-h-0"
              >
                {submenu.map(({ to, label, icon: SubIcon }, subIndex) => (
                  <li key={subIndex} className="pl-6 hover:bg-[#FFFFFF66] py-2 hover:text-white">
                    {to && (
                      <Link className="flex items-center gap-x-2" to={to}>
                        {SubIcon && <SubIcon />} {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
  );
}

