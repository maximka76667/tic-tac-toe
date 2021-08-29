import React, { FormEvent } from "react";

interface CellInterface {
  onClick: () => void,
  value: string | null,
}

function Cell(props: CellInterface) {

  return (
    <button onClick={() => props.onClick()}>{props.value}</button>
  )
}

export default Cell;