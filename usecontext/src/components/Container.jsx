import React from 'react';
import Header from './Header';
import OtherStuff from './OtherStuff';

export default function Container() {
    return (
        <section className="container line-pad">
            <h2>Container component</h2>
            <pre>Lvl 3: No need for user data</pre>
            <Header />
            <OtherStuff />
        </section>
    );
}
