import { useState } from "react"
import { Button, VisualComponent } from "./shared/Common"

const Lvl4A = () => {
    const [counter, setCounter] = useState(0)
    return (
        <VisualComponent title="Level 4 - A" >
            <h4 className="-mt-2 mb-1  font-thin"> {counter}</h4>

            <Button onClick={() => setCounter(counter + 1)}>Safe Action</Button>
        </VisualComponent>
    )
}

export default Lvl4A