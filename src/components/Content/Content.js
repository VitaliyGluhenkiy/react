import React from 'react'
import './Content.css'
import Message from "./Message/Message";
import ContentFormRedux from "./Message/ContentForm";


const Content = (props) => {
    let addNewContent = (val) => {
        props.sendContextText(val.newTextBody)
    }

    let textPage = props.text.map( f => <div>
        <div>{f.id}</div>  <div>{f.message}</div>
    </div>)

    return (
        <div>
            <p>Content</p>
            {textPage}
            <Message name='Vetal' />
            <ContentFormRedux onSubmit={addNewContent}/>
        </div>
    )
}


export default Content;