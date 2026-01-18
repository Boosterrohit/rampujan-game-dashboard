import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = () => {
  return (
    <div className="bg-white px-4 py-3 shadow flex items-center justify-between">
      <div className="flex flex-col">
        <span className="font-bold text-2xl">GamePro Admin Dashboard</span>
        <span className="text-gray-600 text-xs">
          Manage your casino operations
        </span>
      </div>
      <div>
        
      </div>
      <div className="flex items-center gap-2">
        <div className="relative cursor-pointer hover:bg-gray-100 rounded-md p-2 ">
            <Bell className="w-5 h-5 text-gray-600 " />
            <div className="h-3 w-3 bg-red-600 rounded-full absolute top-1 border-white border-2 right-1"></div>
        </div>
        <div className="h-10 bg-gray-200 w-0.5 mx-2"></div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
            <span className="text-sm text-gray-800">John Doe</span>
        <span className="text-xs text-gray-500">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
