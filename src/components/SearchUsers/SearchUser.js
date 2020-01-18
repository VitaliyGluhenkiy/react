import React , {useState} from 'react'
import classes from './searchUser.module.css'
import userPhoto from '../../assets/image/image.png'
import {NavLink} from "react-router-dom";

let SearchUser = ({totalItemsCount,pageSize, unfollow, follow,
                  currentPage, onPageChanged ,searchPage ,
                  followingInProgress , portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    let portionCount = Math.ceil(pagesCount / portionSize)

    let [portionNumber, setPortionNumber] = useState(1)

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1

    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div>
            <div>
                {portionNumber > 1 &&
                <button onClick={ () => { setPortionNumber(portionNumber -1)}}>
                    PREV
                </button>}

                {pages
                    .filter(p => p >=leftPortionPageNumber && p<=rightPortionPageNumber)
                    .map(p => {
                    return <span className={currentPage === p && classes.selectedPage}
                        onClick={(e) => {
                            onPageChanged(p)
                        }}
                    >{p}</span>
                })}

                {portionCount > portionNumber &&
                <button onClick={ () => { setPortionNumber(portionNumber +1)}}>
                    next
                </button>}
            </div>
            {
                searchPage.map(u => <div>
                    <div className={classes.img}>
                        <NavLink to={'/myprofile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={followingInProgress
                                .some(id => id === u.id)} onClick={() => {
                                unfollow(u.id)
                            }}>Unfollow</button>
                            : <button disabled={followingInProgress
                                .some(id => id === u.id)} onClick={() => {
                                follow(u.id)
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