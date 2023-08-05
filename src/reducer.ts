import { GET_USERS_SUCCESS } from "./actions";
import { IUser } from "./types";

export interface IInitialState {
  users: IUser[];
}

type UsersAction = {
  type: string;
  users: IUser[];
};

const initialState: IInitialState = {
  users: [],
};

const myFirstReducer = (state = initialState, action: UsersAction) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, users: action.users };
    default:
      return state;
  }
};

export default myFirstReducer;
