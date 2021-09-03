import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menu__heading">Tic Tac Toe</h1>
      <div className="menu__game-mode"><Link className="menu__game-mode-link" to="/single">1 Player</Link></div>
      <div className="menu__game-mode"><Link className="menu__game-mode-link" to="/multi">2 Players</Link></div>
    </div>
  )
}

export default Menu;