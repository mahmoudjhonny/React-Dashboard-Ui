import { Visibility } from '@mui/icons-material';
import './smWidget.css'

const Smwidget = (props) => {
    
    return (
        <div className='smWidget'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {props.data.map(user => (
                    <li key={user.id} className="widgetSmListItem">
                        <img
                        src={user.imgSrc}
                        alt=""
                        className="widgetSmImg"
                        />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">{user.name}</span>
                            <span className="widgetSmUserTitle">{user.job}</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Smwidget;
