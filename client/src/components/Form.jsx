import React, { useState } from "react";
import Styled from "styled-components";

const Form = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [level, setLevel] = useState("");

  const Clicked = (e) => {
    e.preventDefault();
    onSubmit({ username, level });
  };

  return (
    <StyledForm>
      <Input
        type="text"
        spellCheck="false"
        placeholder="Steam Username"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Level Wanted"
        required
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      />
      <Button type="submit" onClick={Clicked}>
        Calculate
      </Button>
    </StyledForm>
  );
};

const StyledForm = Styled.form`
  display: inline-grid;
  margin: 30px;
  padding: 30px;
  width: 80vw;
  max-width: 600px;
  min-width: 400px;
  align-self: center;
`;

const Input = Styled.input`
  margin: 10px;
  padding: 10px;
  font-family: "Exo 2";
  text-align: center;
`;

const Button = Styled.button`
  margin: 10px;
  padding: 10px;
  font-family: "Exo 2";
`;

export default Form;
