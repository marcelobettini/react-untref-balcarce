import React from 'react';
import { useContext } from 'react';
import { userContext } from '../App';

export default function Header() {
    const { setUserInfo } = useContext(userContext);
    const changeName = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const newName = data.get("name")?.toString().trim();
        if (!newName) return null;
        setUserInfo((prev) => ({ ...prev, name: newName }));
        form.reset();
    };
    return (
        <header className="header line-pad">
            <h3>Header component</h3>
            <pre>Lvl 4: No need for user data</pre>

            <form onSubmit={changeName}>
                <label htmlFor="name">Rename</label>
                <input type="text" id="name" name="name" />
                <input type="submit" value="do it!" />
            </form>
        </header>
    );
}
