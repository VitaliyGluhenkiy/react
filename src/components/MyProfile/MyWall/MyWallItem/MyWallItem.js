import React from 'react'

const MyWallItem = (props) => {

    return (
        <div>
            <div>
                {props.name}
            </div>
            <div>
                {props.message}
            </div>
        </div>
    )
}

export default MyWallItem;