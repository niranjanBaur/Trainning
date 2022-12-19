import { getUsersFetch, getUsersSuccess } from "./Actions/thunkIndex";
import axios from "axios";

export function getUsersRequest() {

  return async function (dispatch) {
    dispatch(getUsersFetch());

    const users = await axios
          .get("https://pokeapi.co/api/v2/pokemon");
      return dispatch(getUsersSuccess(users));
  };
}
