import React from 'react';
import UserInfo from './UserInfo';

export default function OtherStuff() {
    return (
        <section className="other line-pad">
            <h3>OtherStuff component</h3>
            <pre>Lvl 4: No need for user data</pre>
            <UserInfo />
        </section>
    );
}
