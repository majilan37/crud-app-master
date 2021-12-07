import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <div className="bg-gray-600 px-5 py-3 flex justify-between">
                <h2 className="text-white text-3xl font-medium">Crud App</h2>
                <Link to='/add-user' className='bg-blue-400 hover:bg-blue-500 active:bg-blue-600 px-4 py-2 text-white transition-all duration-200'>Add User</Link>
            </div>
            <h1 className="text-4xl text-gray-700 my-2 font-semibold">User List</h1>
        </>
    )
}

export default Header
