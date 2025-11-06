import type { User } from "./types"
import UserCard from "./UserCard"
interface Props {
    users: User[],
    setUsers: (users: User[]) => void
}

function UsersList({ users, setUsers }: Props) {

    return (
        <div>
            <ul>

                {users.map((u: User) => (
                    <UserCard user={u} setUsers={setUsers} users={users}>
                        <>
                            <hr />
                            <br />
                        </>
                    </UserCard>
                )
                )}
            </ul>
        </div>
    )
}
export default UsersList