import DarkModeToggle from './DarkModeToggle';

export default function Menu({ toggleLeftPanel, toggleRightPanel, closePanels }) {
  return (
    <div className="w-full h-12 flex items-center justify-start bg-gray-800 fixed top-0 px-4">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-red-500 rounded-full cursor-pointer" onClick={closePanels}></div>
        <div className="w-4 h-4 bg-yellow-500 rounded-full cursor-pointer" onClick={toggleLeftPanel}></div>
        <div className="w-4 h-4 bg-green-500 rounded-full cursor-pointer" onClick={toggleRightPanel}></div>
      </div>
      <DarkModeToggle />
    </div>
  );
}
