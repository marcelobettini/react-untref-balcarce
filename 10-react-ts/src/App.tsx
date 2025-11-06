
import { useState } from 'react'
import './App.css'
import UsersList from './UsersList'
import { type User } from './types'
import { data } from './data'

type Cualca = boolean | number | "explicitamente esto"



function App() {
  const [users, setUsers] = useState<User[]>(data)

  const placeholder: Cualca = "eXplicitamente esto".toLowerCase() as Cualca
  return (
    <>
      <UsersList users={users} setUsers={setUsers} />
    </>
  )
}

export default App
