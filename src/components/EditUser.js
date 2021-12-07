import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { StateContext } from "../redux/StateProvider"

function EditUser() {
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: ''
    })

    const navigate = useNavigate()
    const { users, editUser } = useContext(StateContext)
    const { id } = useParams()

    useEffect(() => {
        const userId = id
        const selectedUser = users.find((user) => user.id === Number(userId))
        setSelectedUser(selectedUser)
    }, [id, users])

    const handleSubmit = (e) => {
        e.preventDefault();

        editUser(selectedUser)
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-3">
                <label htmlFor="user">Name</label>
                <input type="text" value={selectedUser.name} onChange={(e) => setSelectedUser({...selectedUser, name: e.target.value})} placeholder="Edit User" className="px-4 py-2 rounded-sm outline-none border border-gray-500" name='user' />
            </div>
            <button className='bg-gray-500 hover:bg-gray-400 active:bg-gray-600 px-5 py-2 text-white rounded-sm' type='submit'>Edit User</button>
            <Link to="/" className="bg-red-400 px-5 py-[9.5px] hover:bg-red-500 active:bg-red-600 ml-2 text-white rounded-sm" >Cancel</Link>
        </form>
    )
}

export default EditUser
