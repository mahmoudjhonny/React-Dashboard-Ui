import './App.css'
import Topbar from "./components/TopBar/topBar";
import Sidebar from './components/SideBar/sideBar'

const App = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others"> Other Components</div>
      </div>
    </div>
  );
}

export default App;
