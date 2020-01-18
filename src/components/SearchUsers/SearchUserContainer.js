import React from 'react'
import SearchUser from "./SearchUser";
import {connect} from "react-redux";
import {
    follow, getUsers, setFollowingInProgress, unfollow
} from "../../redux/searchUserReducer";
import preloaderTwo from '../../assets/image/images.jpg'
import Preloader from "../../common/Preloader/Preloader";
import {
    getCurrentPage, getFollowingInProgress, getIsFetching, getIsLoader, getPageSize, getSearchUsers, getTotalItemsCount,
} from "../../redux/serchUserSelectors";

class SearchUserContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);

    }


    render() {

        return (
            <>
            {this.props.isFetching ? null : <img src={preloaderTwo} alt=""/>}
            {this.props.isLoader ? <Preloader/> : null}
            <SearchUser
                totalItemsCount={this.props.totalItemsCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                searchPage={this.props.searchPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isLoader={this.props.isLoader}
                followingInProgress={this.props.followingInProgress}
                setFollowingInProgress={this.props.setFollowingInProgress}
            />

            </>
        )

    }
}


let mapStateToProps = (state) => {
    return {
        searchPage: getSearchUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalItemsCount(state),
        currentPage: getCurrentPage(state),
        isLoader: getIsLoader(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(follow(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollow(userID))
        },
        setFollowingInProgress: (toggleProgress) => {
            dispatch(setFollowingInProgress(toggleProgress))
        },
        getUsers: () => {
            dispatch(getUsers())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchUserContainer);
