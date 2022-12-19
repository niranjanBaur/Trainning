// const init = {
//   users: [],
// };

const thunkReducer = (state = {users: []}, action) => {
  switch (action.type) {
    case "GET_USERS_SUCCESS":
      return { ...state, users: action.users };

    default:
      return state;
  }
};

export default thunkReducer