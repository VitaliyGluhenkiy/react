import React, {useState} from 'react'
import Content from "./Content";
import {connect} from "react-redux";
import {sendContentTextAC} from "../../redux/contentReducer";
import c from './Content.module.css'


const ContentContainer = (props) => {

    const [disable, change] = useState(false)

    let buttonChange = () => {
        change(true)
    }
    let buttonAccept = () => {
        change(false)
    }

    return (
        <div>
            <Content text={props.text}/>

            <div className={c.buttons}>
                {!disable && <div>
                    <button onClick={buttonChange} className={c.buttonCancel}>Отклонить</button>
                </div>}
                {disable &&
                <div>
                    <button onClick={buttonAccept}  className={c.buttonAccept}>Принять</button>
                </div>}

            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        text: state.contentPage.text
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        sendContextText(newTextBody) {
            dispatch(sendContentTextAC(newTextBody))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
