import React from 'react'

const Message = (props) => {
    return (
        <div>
            <p>Привет как дела?</p>
            {props.name}
        </div>
    )
}

export default Message;