import Charts from '../../components/Charts/Charts';
import Featuredinfo from '../../components/FeaturedInfo/FeaturedInfo';
import './home.css'
import {userData} from '../../testData'


const Home = () => {
    return (
        <div className='home'>
            <Featuredinfo />
            <Charts data={userData} title="User Analytics" grid dataKey="Active User"/>
        </div>
    );
}

export default Home;
