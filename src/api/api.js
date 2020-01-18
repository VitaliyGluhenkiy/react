import * as axios from 'axios'



const  instance = axios.create({
    withCredentials: true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY' : '5ae85f08-839c-487b-a0d8-70c50995fe25'
    },

});

export const usersAPI = {
    getUsers (currentPage = 1 , pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    followSuccess(userId){
        return  instance.post(`follow/${userId}`)

    },
    unfollowSuccess(userId){
       return instance.delete(`follow/${userId}`)

    },


}


export const profileAPI = {
    setProfile (userId) {
        return instance.get('profile/' + userId)
    },
    getStatus (userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status){
        return instance.put('profile/status', {status: status})
    }
}

export const authAPI = {
    me () {
        return instance.get('auth/me')

    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    },

}

export const toDoListAPI = {
    postToDo(title) {
        return instance.post('todo-lists', {title})
    }
}

// export const followAPI = {
//     setFollow() {
//         return instance.post(`follow/`${u.id}
//             .then(response => {
//                 return response
//             })
//         )
//     }
// }