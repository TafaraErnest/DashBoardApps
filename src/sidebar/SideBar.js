import "./styles/sidebar.css";

export default function SideBar({ appsTab, setAppsTab }) {
  const handleTab = (e) => {
    for (const key in appsTab) {
      appsTab[key] = false;
    }
    setAppsTab({ ...appsTab, [e.target.id]: true });
  };

  return (
    <div className="sidebar">
      <h2 className="apps_title">Apps</h2>
      <ul className="sidebar_items">
        <li
          className="sidebar_item"
          id={appsTab.notes ? "active" : "notes"}
          onClick={(e) => handleTab(e)}
        >
          Notes
        </li>
        <li
          className="sidebar_item"
          id={appsTab.planner ? "active" : "planner"}
          onClick={(e) => handleTab(e)}
        >
          Planner
        </li>
      </ul>
    </div>
  );
}
