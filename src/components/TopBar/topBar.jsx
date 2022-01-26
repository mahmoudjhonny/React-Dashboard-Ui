import React from 'react';
import './topBar.css'
import { Language, NotificationsNone, Settings } from '@mui/icons-material';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="adminLogo">Dashboard</span>
                </div>
                <div className="topRight">
                    <div className="topRightIconContainer">
                        <NotificationsNone />
                        <span className="iconholder">3</span>                  
                    </div>
                    <div className="topRightIconContainer">
                        <Language/>
                    </div>
                    <div className="topRightIconContainer">
                        <Settings/>
                    </div>
                    <img src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" alt="" className="avatar" />
                </div>
            </div>
        </div>
    );
}

export default Topbar;
