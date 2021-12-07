import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import { Routes, Route, useParams} from 'react-router-dom'
import { useContext } from "react";
import { StateContext } from "./redux/StateProvider";
 

function App() {

  return (
    <div className="py-16">
      <main className='max-w-3xl mx-auto px-6 py-4'>
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/add-user' element={<AddUser />} />
          <Route path='/edit-user/:id' element={<EditUser />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
