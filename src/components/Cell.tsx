import React from "react";

interface CellInterface {
  onClick: () => void,
  value: string | null,
}

function Cell(props: CellInterface) {
  return (
    <button className="cell" onClick={props.onClick}>{props.value}</button>
  )
}

export default Cell;