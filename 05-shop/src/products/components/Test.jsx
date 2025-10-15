import { Outlet } from "react-router";

export default function Test() {
    return (
        <div>
            <h2>Soy <code>Test.jsx</code></h2>
            <h1>Componente hijo de Layout</h1>
            <Outlet />
            <h3>Esto es relleno</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim consequatur voluptates obcaecati asperiores et facere labore quaerat error, eaque repellendus rem eum ea magnam eos, nulla, laudantium sit debitis! Quidem!</p>

        </div>
    );
}
