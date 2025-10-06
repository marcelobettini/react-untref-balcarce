import React from 'react';
import Container from './Container';

export default function Layout() {
    return (
        <div>
            <main className="layout line-pad">
                <h1>Layout component</h1>
                <pre>Lvl 2: No need for user data</pre>

                <Container />
            </main>
        </div>
    );
}
