import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <NavLink to='/' className="sidebaritem">
                            <li>
                                <LineStyle className='sidebarIcon'/>
                                Home
                            </li>
                        </NavLink>
                        <li className="sidebaritem">
                            <Timeline className='sidebarIcon'/>
                            Analytics
                        </li>
                        <li className="sidebaritem">
                            <TrendingUp className='sidebarIcon'/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <NavLink to='/userslist' className="sidebaritem">
                            <li>
                                <PermIdentity className='sidebarIcon'/>
                                Users
                            </li>
                        </NavLink>
                        <li className="sidebaritem">
                            <Storefront className='sidebarIcon'/>
                            Products
                        </li>
                        <li className="sidebaritem">
                            <AttachMoney className='sidebarIcon'/>
                            Transactions
                        </li>
                        <li className="sidebaritem">
                            <BarChart className='sidebarIcon'/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebaritem">
                            <MailOutline className='sidebarIcon'/>
                            Mail
                        </li>
                        <li className="sidebaritem">
                            <DynamicFeed className='sidebarIcon'/>
                            Feedback
                        </li>
                        <li className="sidebaritem">
                            <ChatBubbleOutline className='sidebarIcon'/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebaritem">
                            <WorkOutline className='sidebarIcon'/>
                            Manage
                        </li>
                        <li className="sidebaritem">
                            <Timeline className='sidebarIcon'/>
                            Analytics
                        </li>
                        <li className="sidebaritem">
                            <Report className='sidebarIcon'/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
