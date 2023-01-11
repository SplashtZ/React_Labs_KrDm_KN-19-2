import { addUsersAction } from "../reducers/userReducer";
import { createAsyncThunk } from "@reduxjs/toolkit";

// vanilla redux
// export const fetchUsers = () => {
//   return (dispatch) => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((json) => dispatch(addUsersAction(json)));
//   };
// };

// toolkit redux
export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async function () {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        return data;
    }
);