import { postUser } from "./Actions";
import axios from "axios";

export function postUserRequest(param) {

  // console.log(param);

  return async function (dispatch) {
    await axios
      .post("https://reqres.in/api/register", param)
      .then((res) => {
        dispatch(postUser(res))
        console.log("Post Successfull");
      }).catch((e)=>{
        console.log(e.message);
      })
  };
}
