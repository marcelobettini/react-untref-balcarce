import { useState } from "react"
import { Button, VisualComponent } from "./shared/Common"
import Lvl2 from "./Lvl2"
import ErrorBoundary from "./shared/ErrorBoundary"

export default function Lvl1() {
    const [counter, setCounter] = useState(0)
    return (
        <VisualComponent title="Level 1">
            <h4 className="mt-2 mb-1 font-thin">{counter}</h4>
            <Button onClick={() => setCounter(counter + 1)}>Safe Action</Button>
            <ErrorBoundary>
                <Lvl2 />
            </ErrorBoundary>
        </VisualComponent>
    )
}