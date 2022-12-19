export const getUsersFetch = () =>{
    return{
        type : "GET_USERS_FETCH"
    }
}

export const getUsersSuccess = (users) => {

    return{
        type : "GET_USERS_SUCCESS",
        users
    }
}