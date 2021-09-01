import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const firstName = useSelector((state) => state.user.firstName);
  return (
    <>
      <h1>Home Page</h1>
      <h3>Welcome {firstName} </h3>
    </>
  );
};

export default HomePage;
