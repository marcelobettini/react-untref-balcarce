import { useState } from 'react';
import './Counter.css';
function Counter({ initCount = 0 }) {
    const [count, setCount] = useState(initCount);
    const [userNumber, setUserNumber] = useState(0);

    const handleAdd = () => setCount(count + 1);
    const handleSub = () => setCount(count - 1);
    const handleRst = () => setCount(initCount);
    const handleAddN = () => setCount(count + userNumber);
    const handleAddAsync = () => setTimeout(() => {
        setCount((curr) => curr + userNumber);
    }, 5000);
    return (
        <>
            <h3>{count}</h3>
            <button onClick={handleAdd}>Suma 1</button>
            <button onClick={handleSub}>Resta 1</button>
            <button onClick={handleRst}>Reinicia</button>
            <br />
            <button onClick={handleAddN}>Sumar N</button>
            <input type="number" max="999" required value={userNumber} onChange={(e) => setUserNumber(Number(e.target.value))} />
            <button onClick={handleAddAsync}>Sumar Async</button>
        </>
    );
}
export default Counter;