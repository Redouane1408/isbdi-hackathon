import React from "react";
import { Settings, Trash2, Folder, PlusCircle } from "lucide-react";

interface HeaderProps {
  title: string;
  onNewChat?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onNewChat }) => {
  return (
    <div className="flex items-center justify-between mb-6 w-full px-4 py-3 border-b">
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="flex items-center gap-3">
        <button className="text-gray-500 hover:text-gray-700 p-1 rounded-md hover:bg-gray-100">
          <Settings size={20} />
        </button>
        <button className="text-gray-500 hover:text-gray-700 p-1 rounded-md hover:bg-gray-100">
          <Trash2 size={20} />
        </button>
        <button className="text-gray-500 hover:text-gray-700 p-1 rounded-md hover:bg-gray-100">
          <Folder size={20} />
        </button>
        <button 
          onClick={onNewChat}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          <PlusCircle size={16} />
          <span>New chat</span>
        </button>
      </div>
    </div>
  );
};

export default Header;