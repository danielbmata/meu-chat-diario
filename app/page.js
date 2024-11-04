'use client';

import { useState } from 'react';
import Menu from './components/Menu';
import Chat from './components/Chat';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

export default function Page() {
  const [rightPanelActive, setRightPanelActive] = useState(false);
  const [leftPanelActive, setLeftPanelActive] = useState(false);

  const toggleLeftPanel = () => setLeftPanelActive(!leftPanelActive);
  const toggleRightPanel = () => setRightPanelActive(!rightPanelActive);
  const closePanels = () => {
    setRightPanelActive(false);
    setLeftPanelActive(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Menu toggleLeftPanel={toggleLeftPanel} toggleRightPanel={toggleRightPanel} closePanels={closePanels} />
      <Chat />
      {rightPanelActive && <RightPanel />}
      {leftPanelActive && <LeftPanel />}
    </div>
  );
}
