import Notes from "./notes/Notes";
import SideBar from "./sidebar/SideBar";
import { ShowTabContext } from "./ShowTabContext";
import { useState } from "react";
import Planner from "./planner/Planner";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function Apps() {
  const [appsTab, setAppsTab] = useState({
    notes: true,
    planner: false,
    reminder: false,
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <ShowTabContext.Provider value={appsTab}>
        <div className="apps">
          <SideBar appsTab={appsTab} setAppsTab={setAppsTab} />
          <div className="app">
            <Notes />
            <Planner />
          </div>
        </div>
      </ShowTabContext.Provider>
    </DndProvider>
  );
}

export default Apps;
