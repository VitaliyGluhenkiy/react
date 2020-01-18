import React from 'react'
import classes from './Friends.module.css'
import FriendsItem from "./FriendsItem/FriendsItem";
import FriendsFormRedux from "./FriendsItem/FriendsForm";

class Friends extends React.Component {



    state = {
        editStatus: false
    }

    activeteEditStatus = () =>{
        this.setState({
        editStatus: true
    })
    }

    deactivateEditStatus = () => {
        this.setState({
            editStatus: false
        })
    }




    render(){

        let friendsPage = this.props.friendList.map( f => <div>
            <div>{f.name}</div>  <div>{f.age}</div> {f.sity}
        </div>)


        const addFriendsMessage = (items) => {
            this.props.sendFriendsMessage(items.newFriendsMessage)
        }

        return (
            <div>
                <div>
                    {friendsPage}
                </div>
                {!this.state.editStatus &&
                <div>
                    <p onDoubleClick={this.activeteEditStatus}>{this.props.title}</p>
                </div>}
                {this.state.editStatus &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditStatus} value={this.props.title}/>
                </div>}
                <FriendsFormRedux onSubmit={addFriendsMessage}/>
            </div>
        )
    }

}

export default Friends;