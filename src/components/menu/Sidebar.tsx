import { MENU } from "@/data";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, LogOut } from "lucide-react";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    MENU.forEach((section) => {
      const hasActiveItem = section.SUBMENU.some(
        (item) => location.pathname === item.slug
      );
      if (hasActiveItem) {
        setOpenSection(section.name);
      }
    });
  }, [location.pathname]);

  const toggleSection = (sectionName: string) => {
    setOpenSection((prev) => (prev === sectionName ? null : sectionName));
  };

  return (
    <div className={`w-60 bg-sidebar text-white flex flex-col h-screen`}>
      <div className="p-6 border-b border-sidebar-border flex items-center justify-center h-24">
        <span className="text-2xl font-semibold">ADMIN PANEL</span>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 scrollbar-hide">
        {MENU.map((section) => {
          const isOpen = openSection === section.name;

          return (
            <div key={section.name} className="mb-5">
              <h3
                onClick={() => toggleSection(section.name)}
                className="px-4 flex items-center justify-between py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide cursor-pointer hover:text-gray-200 transition-colors"
              >
                {section.name}
                 <ChevronRight
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
              </h3>
              <div
                className={`space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {section.SUBMENU.map((item) => {
                  const isActive = location.pathname === item.slug;

                  return (
                    <Link
                      key={item.id}
                      to={item.slug}
                      className={`w-full flex items-center gap-3 px-6 py-3 font-medium text-xs transition-colors duration-200 ${
                        isActive
                          ? "bg-[#615ed6] text-white"
                          : "text-gray-300 hover:bg-[#5B2C3D] hover:text-white"
                      }`}
                    >
                      <p className="flex items-center gap-1 text-white">
                        {item.icons && <item.icons className="w-4 h-4" />}
                        <span>{item.title}</span>
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>
      <div className="p-4 border-t border-sidebar-border flex items-center gap-2 text-sm cursor-pointer hover:bg-[#5B2C3D]">
        <LogOut className="w-4 h-4" />
        Logout
      </div>
    </div>
  );
};

export default Sidebar;