import './App.css'
import Topbar from "./components/TopBar/topBar";
import Sidebar from './components/SideBar/sideBar'
import Home from './pages/Home/home';

const App = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home/>
      </div>
    </div>
  );
}

export default App;
