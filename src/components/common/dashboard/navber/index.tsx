import { Bell, Menu } from "lucide-react";
import profile from "../../../../assets/profile.png"


export default function Navber({ sidebarOpen, setSidebarOpen}:any) {
  return (
    <div className="sticky top-0 z-99 flex w-full bg-[white] py-3 shadow-xs">
      <header className="w-full px-3">
        <div className="flex justify-between items-center">
          {/* left side*/}
          <div className="flex gap-4 items-center">
            <button
              aria-controls="sidebar"
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
              className="z-99999 block  border rounded-md border-stroke  p-1.5 shadow-sm lg:hidden"
            >
              <Menu className="cursor-pointer" color="white" />
            </button>
             <ul>
               <li className="text-2xl font-bold text-primary">Dashboard Overview</li>
               <li className="text-sm text-gray-600">You can see all of your apps statistics from here</li>
             </ul>
          </div>
          {/* right side */}
          <div>
            <div className="flex items-center gap-4">
      {/* Notification Icon */}
      <div className="size-10 bg-[#5E7D82] rounded-full flex items-center justify-center">
        <Bell className="text-white"/>
      </div>

      {/* Profile Picture */}
      <img
        src={profile} // Replace with actual image path
        alt="Profile"
        className="size-10 rounded-full object-cover"
      />

      {/* User Name */}
      <span className="font-semibold text-black">John Doe</span>
    </div>
          </div>
        </div>
      </header>
    </div>
  );
}
