import React, { useState } from "react";
import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";
const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Header handleShow={handleShow} />
      <LoginForm handleClose={handleClose} show={show} />
      <main className="main"></main>
    </>
  );
};

export default Home;
