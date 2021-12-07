import { useContext, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { StateContext } from "../redux/StateProvider"

function AddUser() {
    const [user, setUser] = useState('')
    const { addUser } = useContext(StateContext)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        let newTodo = {
            id: Date.now(),
            name: user
        }

        await addUser(newTodo)

        navigate('/')
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-3">
                <label htmlFor="user">Name</label>
                <input type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder="User" className="px-4 py-2 rounded-sm outline-none border border-gray-500" name='user' />
            </div>
            <button className='bg-gray-500 hover:bg-gray-400 active:bg-gray-600 px-5 py-2 text-white rounded-sm' type='submit'>Submit</button>
            <Link to="/" className="bg-red-400 px-5 py-[9.5px] hover:bg-red-500 active:bg-red-600 ml-2 text-white rounded-sm" >Cancel</Link>
        </form>
    )
}

export default AddUser
