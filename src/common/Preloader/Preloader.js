import classes from "../../components/SearchUsers/searchUser.module.css";
import preloader from "../../assets/image/giphy.gif";
import React from "react";

let Preloader = (props) => {
    return <div>
        <img className={classes.preloader} src={preloader}/>
    </div>
}

export default Preloader