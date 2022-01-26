import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import './FeaturedInfo.css'

const Featuredinfo = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,450</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward className='featuredIcon negative'/>
                    </span>
                </div>
                <span className="featuredSub">Compared with last year</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,460</span>
                    <span className="featuredMoneyRate">
                        -1.4 <ArrowDownward className='featuredIcon negative'/>
                    </span>
                </div>
                <span className="featuredSub">Compared with last year</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Costs</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$5,450</span>
                    <span className="featuredMoneyRate">
                        +9.4 <ArrowUpward className='featuredIcon'/>
                    </span>
                </div>
                <span className="featuredSub">Compared with last year</span>
            </div>
        </div>
    );
}

export default Featuredinfo;
