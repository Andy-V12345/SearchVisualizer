import { useState } from "react"
import Square from "./square"

export default function Grid() {

    const [grid, setGrid] = useState(() => new Array(20).fill(new Array(60).fill(0)))


    return(
        <div className="grid-container">
            {
                grid.map((row, rowI) => (
                    row.map((state, colI) => (
                        <Square key={colI*rowI} pos={[rowI, colI]} state={state} />
                    ))
                ))
            }
        </div>
    )
}