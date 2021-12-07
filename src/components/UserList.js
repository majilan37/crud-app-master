import { useContext } from "react"
import { Link } from "react-router-dom"
import { StateContext } from "../redux/StateProvider"

function UserList() {
    const { users, removeUser } = useContext(StateContext)
    return (
        <div>
            {users?.map((user) => (
                <div key={user.id} className="border px-5 py-3 flex items-center justify-between">
                    <p className="font-bold text-lg">{user.name}</p>
                    <div className="space-x-2 flex">
                        <Link to={`/edit-user/${user.id}`} className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-sm text-white">Edit</Link>
                        <button onClick={() => removeUser(user.id)} className='bg-red-500 hover:bg-red-600 px-5 py-2 rounded-sm text-white'>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UserList
