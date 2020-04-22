import React, { useState, useEffect } from "react";

const Component = (props) => {
  const [name, setName] = useState("Jack");

  useEffect(() => {
    setName("John");
  }, []);

  return <Child givenName={name} />;
};

const Child = (props) => {
  return <h1>My name is {props.givenName} </h1>;
};

export default Component;
