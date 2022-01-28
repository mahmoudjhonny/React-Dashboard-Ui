import './App.css'
import Topbar from "./components/TopBar/topBar";
import Sidebar from './components/SideBar/sideBar'
import Home from './pages/Home/home';
import { Routes , Route } from 'react-router-dom'
import Userslist from './pages/UsersList/UsersList';
import Userpage from './pages/UserPage/UserPage';
import Newuser from './pages/NewUser/NewUser';

const App = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='userslist' element={<Userslist/>}/>
          <Route path='userslist/:userId' element={<Userpage/>}/>
          <Route path='/newUser' element={<Newuser />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
