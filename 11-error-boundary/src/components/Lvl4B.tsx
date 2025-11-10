import { useState } from "react"
import { Button, VisualComponent } from "./shared/Common"

const Lvl4B = () => {
    const [counter, setCounter] = useState(3)
    if (counter === 0) throw new Error("Unexpected Error in Component")
    return (
        <div className="bg-red-600 rounded text-center">

            <VisualComponent title="Bugged Component 🐛" >
                <h4 className="mt-2 mb-1 font-bold"> WILL BREAK IN: {counter}</h4>

                <Button onClick={() => setCounter(counter - 1)}>Unsafe Action</Button>
            </VisualComponent>
        </div>
    )
}

export default Lvl4B