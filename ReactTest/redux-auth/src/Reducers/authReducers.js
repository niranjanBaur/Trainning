const authReducer = (state = { user: [] }, action) => {
  switch (action.type) {
    case "POST_USER":
      return {
        ...state,
        user: action.user,
      };

    case "LOG_IN" : 
      return {
        ...state,
        user: action.user
      }  
    default:
      return state;
  }
};

export default authReducer