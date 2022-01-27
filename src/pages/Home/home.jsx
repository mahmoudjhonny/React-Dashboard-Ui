import Charts from '../../components/Charts/Charts';
import Featuredinfo from '../../components/FeaturedInfo/FeaturedInfo';
import './home.css'
import {userData} from '../../testData'
import {users} from '../../NewUser'
import Smwidget from '../../components/SmallWidgets/smWidget';
import Lgwidget from '../../components/LargeWidgets/lgWidget';


const Home = () => {
    return (
        <div className='home'>
            <Featuredinfo />
            <Charts data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <Smwidget data={users}/>
                <Lgwidget data={users}/>
            </div>
        </div>
    );
}

export default Home;
