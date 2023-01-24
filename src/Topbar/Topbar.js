import React from "react";

import classes from './Topbar.module.css';

const Topbar = (props) => {
    return(
        <header>
            <nav className={classes.Topbar}>
                <img src='https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png' alt='amazon logo' />
            </nav>
        </header>
    );
}

export default Topbar;