import React, { useState } from "react";
import styled from "@emotion/styled";
import { ReactComponent as MealPlus } from "../../assets/icons/plusAdd.svg";
import {Button } from "../UI/button/Button";

export const MealsItemForm = ({ id, onAdd }) => {
  const [amount, setAmount] = useState(1);

  const changeHandler = (e) => {
    setAmount(e.target.value);
  };

  const addItemHandler = (event) => {
    event.preventDefault();
    onAdd(+amount);
  };

  return (
    <StyledForm>
      <InputContainer>
        <LabelStyles htmlFor={id}>Amount</LabelStyles>

        <Input
          type="number"
          value={amount}
          onChange={changeHandler}
          id={id}
          min={1}
        />
      </InputContainer>
      <Button
        fontWeight="700"
        fontSize="14px"
        dbBgColor="#c9390097"
        onClick={addItemHandler}
      >
        <StyledIcon /> Add
      </Button>
    </StyledForm>
  );
};

const Input = styled("input")(() => ({
  boxSizing: "border-box",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: " 24px",
  padding: " 4px 11px 4px 12px",

  border: "1px solid #d6d6d6",
  outline: "none",
  borderRadius: " 6px",
  width: " 60px",
}));

const StyledIcon = styled(MealPlus)`
  margin-right: 10px;
`;

const InputContainer = styled("div")(() => ({
  display: " flex",
  alignItems: "center",
  marginBottom: "12px",
}));

const LabelStyles = styled("label")(() => ({
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "27px",
  marginRight: "20px",
}));

const StyledForm = styled("form")(() => ({
  display: "flex",
  flexDirection: " column",
  alignItems: "flex-end",
}));
