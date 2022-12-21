import { postUser , loginUser } from "./Actions";
import axios from "axios";
// import {useNavigate} from 'react-router-dom'

let user;

export function postUserRequest(param) {
  console.log(param);
  // const navigate = useNavigate()

  return async function (dispatch) {

    await axios
      .post("https://reqres.in/api/register", param)
      .then((res) => {
        // console.log(res);
        user = res.data;
        dispatch(postUser(res));
        console.log("Post Successfull");
      })
      .catch((e) => {
        console.log(e);
      });
    return user;
  };
}

export function loginUserRequest(param) {
  return async function (dispatch) {
    await axios.post("https://reqres.in/api/login", param).then((res)=>{
      user = res.data
      console.log(res)
      dispatch(loginUser(res))
    });
    return user
  };
}
