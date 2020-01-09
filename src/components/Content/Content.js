import React from 'react'
import './Content.css'
import Message from "./Message/Message";


const Content = () => {
    return (
        <div>
            <p>Content</p>
            <Message name='Vetal'/>
            <Message/>
            <Message/>
        </div>
    )
}

export default Content;