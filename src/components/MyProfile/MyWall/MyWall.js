import React from 'react'
import MyWallItem from "./MyWallItem/MyWallItem";
import {addPostWallAC, updateWallTextAC} from "../../../redux/myWallReducer";

const MyWall = (props) => {

    let newPostWall = React.createRef();

    let myWallPage = props.myWallPage.map( m => <MyWallItem name={m.name} message={m.message}/>)

    let onAddPostWall = () => {
        props.addPostWall()

    }

    let onWallChange = () => {
        let text = newPostWall.current.value;
        props.updateWallText(text)
    }
    return (
        <div>
            <div>
                <textarea onChange={onWallChange} ref={newPostWall} value={props.newPostWall} />
            </div>
            <div>
                <button onClick={onAddPostWall}>Отправить</button>
            </div>
            <div>
                {myWallPage}
            </div>

        </div>
    )
}

export default MyWall;