import { useState } from "react"
import { Button, VisualComponent } from "./shared/Common"
import Lvl3A from "./Lvl3A"
import Lvl3B from "./Lvl3B"

export default function Lvl2() {
    const [counter, setCounter] = useState(0)
    if (counter === 1) throw new Error("tengo miedo 🙀")
    return (
        <VisualComponent title="Level 2">
            <h4 className="mt-2 mb-1 font-thin">{counter}</h4>
            <Button onClick={() => setCounter(counter + 1)}>Safe Action</Button>
            <div className="grid grid-rows-2 md:grid-cols-2 md:gap-4">
                <Lvl3A />
                <Lvl3B />
            </div>
        </VisualComponent>
    )
}