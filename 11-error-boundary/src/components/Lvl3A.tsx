import { useState } from "react"
import { Button, VisualComponent } from "./shared/Common"
import Lvl4A from "./Lvl4A"

export default function Lvl3A() {
    const [counter, setCounter] = useState(0)
    return (
        <VisualComponent title="Level 3 - A">
            <h4 className="mt-2 mb-1 font-thin">{counter}</h4>
            <Button onClick={() => setCounter(counter + 1)}>Safe Action</Button>
            <Lvl4A />
        </VisualComponent>
    )
}