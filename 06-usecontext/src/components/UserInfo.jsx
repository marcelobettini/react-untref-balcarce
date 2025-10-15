import { useContext } from 'react';
import { userContext } from '../App';

export default function UserInfo() {
    const { userInfo } = useContext(userContext);
    return (
        <aside className="user line-pad">
            <h4>UserInfo component</h4>
            <pre>Lvl 5: Here we need user data</pre>
            <div
                style={{
                    fontWeight: "700",
                    backgroundColor: "pink",
                    padding: ".5em",
                    margin: "1rem 0",
                    display: "inline-block",
                }}
            >
                User data: {userInfo.name} {userInfo.email}
            </div>
        </aside>
    );
}
