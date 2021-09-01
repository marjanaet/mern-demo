import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setFirstName } from "../store/userActions";
import axios from "axios";

const SignUpForm = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
  });
  const [todoData, setTodoData] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData.firstName);
    console.log(userData.lastName);
    dispatch(setFirstName(userData.firstName));
    // history.push("/");
    // fetch("https://3d9197b0-00ab-4886-8ff1-14a0ded96de3.mock.pstmn.io/users", {
    //   method: "POST",
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // try {
    //   const res = await fetch(
    //     "https://3d9197b0-00ab-4886-8ff1-14a0ded96de3.mock.pstmn.io/users",
    //     {
    //       method: "POST",
    //       body: {
    //         firstName: "firstName",
    //         lastName: "lastName",
    //       },
    //       headers: {
    //         'Accept': 'application/json'
    //       }
    //     }
    //   );
    //   console.log(res.json());
    // } catch (e) {
    //   console.log(e);
    // }
    const res = await axios.post(
      "https://3d9197b0-00ab-4886-8ff1-14a0ded96de3.mock.pstmn.io/users",
      {
        firstName: "",
      }
    );
    console.log(res);

    const todoRes = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(todoRes.data);
    setTodoData(todoRes.data);
  };

  return (
    <div>
      <h1>Sign up form</h1>
      <form onSubmit={handleSubmit}>
        <label for='firstName'>First Name</label>
        <input
          id='firstName'
          type='text'
          value={userData.firstName}
          onChange={(e) =>
            setUserData({ ...userData, firstName: e.target.value })
          }
        />
        <br />
        <label for='lastName'> Last Name</label>
        <input
          id='lastName'
          type='text'
          value={userData.lastName}
          onChange={(e) =>
            setUserData({ ...userData, lastName: e.target.value })
          }
        />
        <input type='submit' />
      </form>
      <pre>{todoData.title}</pre>
    </div>
  );
};

export default SignUpForm;
