import React from "react";
import { useSelector ,useDispatch } from "react-redux";
import { getUsersRequest } from "../thunk";

export default function Users() {


  const users = useSelector((state) => state.thunkReducer.users )
  const dispatch = useDispatch()
  // console.log(users?.data?.results)
  return (
    <>
      <div className="fetchUsers">
      <button id="fetchUserBtn" onClick={() => dispatch(getUsersRequest())}>Fetch Users</button>
      <h1>Hello :</h1>
      <div>
        {users?.data?.results?.map((user)=>{

          return(
            <h3 key={user.url}>{user.name}</h3>

          )
        })}
      </div>
      </div>
    </>
  );
}
