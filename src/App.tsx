import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getUsersFetch } from "./actions";
import { RootState } from "./main";
import { IUser } from "./types";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.myFirstReducer.users);

  return (
    <div>
      <button onClick={() => dispatch(getUsersFetch())}>Get Users</button>
      {users.map((user: IUser) => (
        <p>{user.name}</p>
      ))}
    </div>
  );
}

export default App;
