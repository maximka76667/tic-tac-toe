import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <Link to="/single">1 player</Link>
      <Link to="/multi">2 Players</Link>
    </div>
  )
}

export default Menu;