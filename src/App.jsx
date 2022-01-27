import './App.css'
import Topbar from "./components/TopBar/topBar";
import Sidebar from './components/SideBar/sideBar'
import Home from './pages/Home/home';
import { Routes , Route } from 'react-router-dom'
import Userslist from './pages/UsersList/UsersList';

const App = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='userslist' element={<Userslist/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
