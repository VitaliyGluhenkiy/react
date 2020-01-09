import React from 'react'

const SearchItem = (props) => {
    return (
        <div>
           <div>{props.fullname}</div>
            <div>{props.id}</div>
            <button>{props.subs.value}</button>
        </div>
    )
}

export default SearchItem;