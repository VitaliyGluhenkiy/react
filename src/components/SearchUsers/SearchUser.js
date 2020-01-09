import React from 'react'
import classes from './searchUser.module.css'
import userPhoto from '../../assets/image/image.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {followAPI, usersAPI} from "../../api/api";

let SearchUser = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p && classes.selectedPage}
                        onClick={(e) => {
                            props.onPageChanged(p)
                        }}
                    >{p} </span>
                })}
            </div>
            {
                props.searchPage.map(u => <div>
                    <div className={classes.img}>
                        <NavLink to={'/myprofile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress
                                .some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress
                                .some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                        }

                    </div>
                    <div>{u.name}</div>

                    {/*<div>{u.location.country}</div>*/}
                    {/*<div>{u.location.city}</div>*/}
                </div>)
            }
        </div>
    )
}

export default SearchUser;