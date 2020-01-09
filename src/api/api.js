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
    }
}

export const authAPI = {
    me () {
        return instance.get('auth/me')

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