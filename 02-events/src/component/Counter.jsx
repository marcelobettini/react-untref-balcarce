import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

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
        <Container>
            <h3>{count}</h3>
            <Button onClick={handleAdd}>Suma 1</Button>
            <Button onClick={handleSub}>Resta 1</Button>
            <Button onClick={handleRst}>Reinicia</Button>
            <br />
            <Button onClick={handleAddN}>Sumar N</Button>
            <input type="number" max="999" required value={userNumber} onChange={(e) => setUserNumber(Number(e.target.value))} />
            <Button variant='outline-danger' onClick={handleAddAsync}>Add Async</Button>
        </Container>
    );
}
export default Counter;