

import type { PropsWithChildren } from "react"
import type { User } from "./types"

interface Props {
    user: User,
    users: User[],
    setUsers: (users: User[]) => void
}
function UserCard({ user, users, setUsers, children }: PropsWithChildren<Props>) {

    const handleDelete = (id: string) => {
        const filtered = users.filter((u: User) => u.id !== id)
        setUsers(filtered)

    }
    return (
        <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.birthDay}</p>
            <button onClick={() => handleDelete(user.id)}>click</button>
            {children}
        </div>
    )
}
export default UserCard