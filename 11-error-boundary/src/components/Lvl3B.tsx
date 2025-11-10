import { useState } from "react"
import { Button, VisualComponent } from "./shared/Common"
import Lvl4B from "./Lvl4B"

export default function Lvl3B() {
    const [counter, setCounter] = useState(0)
    return (
        <VisualComponent title="Level 3 - B">
            <h4 className="mt-2 mb-1 font-thin">{counter}</h4>
            <Button onClick={() => setCounter(counter + 1)}>Safe Action</Button>

            <Lvl4B />
        </VisualComponent>
    )
}