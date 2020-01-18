import React from 'react'
import {ToDoFormRedux} from "./toDoForm";
import {toDoPost} from "../../redux/toDoReducer";
import {connect} from "react-redux";
import c from './toDo.module.css'

const ToDo = (props) => {

    let getToDo = props.firstToDo.map( f => <div className={c.textBlock} key={f.id}>
        <div className={c.number}>{f.id}</div>
        <div>{f.text}</div>
        <div><button>X</button></div>
    </div>)

    const onSubmit = (title) =>{
        props.toDoPost(title)
    }

    return (
        <div>
            <ToDoFormRedux onSubmit={onSubmit}/>
            {getToDo}
        </div>
    )
}

let mapStateToProps = (state) => ({
    firstToDo: state.toDoPage.firstToDo
})

export default connect(mapStateToProps, {toDoPost})(ToDo)