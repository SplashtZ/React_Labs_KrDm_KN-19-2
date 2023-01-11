import { useDispatch, useSelector } from "react-redux";
import {
    increaseAction,
    decreaseAction,
} from "../store/reducers/counterReducer";
import { addUserAction, removeUserAction } from "../store/reducers/userReducer";

// for redux toolkit
import { useEffect, useState } from "react";
import {
    increment,
    decrement,
    addUser,
    removeUser,
} from "../toolkitRedux/createSlice";
import { fetchUsers } from "../store/actions/users";

const Lesson10 = () => {
    //   vanilla redux
    //   const dispatch = useDispatch();
    //   const counter = useSelector((state) => state.counter.counter);
    //   const users = useSelector((state) => state.users.users);
    //   const topic = useSelector((state) => state.topic);

    //   const increase = () => {
    //     dispatch(increaseAction(10));
    //   };
    //   const decrease = () => {
    //     dispatch(decreaseAction(10));
    //   };

    //   const addUser = () => {
    //     const user = {
    //       name: `Petya ${Date.now()}`,
    //       id: Date.now(),
    //     };
    //     dispatch(addUserAction(user));
    //   };

    //   const removeUser = (id) => {
    //     dispatch(removeUserAction(id));
    //   };

    // redux toolkit
    const counter = useSelector((state) => state.toolkit.counter);
    const users = useSelector((state) => state.toolkit.users);
    const [addUsers, setAddUsers] = useState(false);
    const dispatch = useDispatch();

    const isAddUsersHandler = () => {
        setAddUsers(true);
        console.log(addUsers);
    };

    useEffect(() => {
        addUsers && dispatch(fetchUsers());
        setAddUsers(false);
    }, [addUsers]);

    return (
        <div>
            <div>
                {/* Lesson: {topic} */}
                <br />
                Counter: {counter}
                {/* vanilla redux
        <button onClick={increase}>Increase counter</button>
        <button onClick={decrease}>Decrease counter</button> */}
                <button onClick={() => dispatch(increment())}>Increase counter</button>
                <button onClick={() => dispatch(decrement())}>Decrease counter</button>
            </div>

            <div>
                {/* vanilla redux
        <button onClick={addUser}>Add user</button> */}
                <button
                    onClick={() =>
                        dispatch(addUser({ name: `Petya ${Date.now()}`, id: Date.now() }))
                    }
                >
                    Add user
                </button>

                {/* vanilla redux
        <button onClick={() => dispatch(fetchUsers())}>
          Add users from fakeAPI
        </button> */}
                <button onClick={isAddUsersHandler}>Add users from fakeAPI</button>

                {users.length ? (
                    <div>
                        <h3>Users</h3>
                        {users.map((user) => (
                            <div
                                key={user.id + Math.random()}
                                onClick={() => dispatch(removeUser(user.id))}
                            >
                                {user.name}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>Нікого немає вдома</div>
                )}
            </div>
        </div>
    );
};
export { Lesson10 };