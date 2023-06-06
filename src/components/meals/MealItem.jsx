import React from "react";
import styled from "@emotion/styled";
import { MealsItemForm } from "./MealsItemForm";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/basket/basketThunk";

export const MealItem = ({ meal, errorHandler, successHandler }) => {
  const dispatch = useDispatch();

  const addBasket = async (amount) => {
    try {
      await dispatch(addItem({ id: meal._id, amount })).unwrap();
      successHandler();
    } catch (error) {
      errorHandler();
    }
  };

  return (
    <StyledItem>
      <StyledItemInfo>
        <StyledTitle>{meal.title}</StyledTitle>
        <DescriptionStyles>{meal.description}</DescriptionStyles>
        <span>{meal.price} $</span>
      </StyledItemInfo>
      <div>
        <MealsItemForm id={meal._id} price={meal.price} onAdd={addBasket} />
      </div>
    </StyledItem>
  );
};

const StyledItem = styled("li")(() => ({
  listStyle: "none",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #d6d6d6",
  marginBottom: " 20px",

  "&:last-child": {
    border: "none",
    marginBottom: "-10px",
  },
}));

const StyledItemInfo = styled("div")(() => ({
  marginBottom: "20px",
  span: {
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: " 30px",
    color: "#ad5502",
    marginTop: "4px",
  },
}));

const DescriptionStyles = styled("p")(() => ({
  fontStyle: "italic",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
  color: "#222222",
}));

const StyledTitle = styled("h4")(() => ({
  fontWeight: 600,
  fontSize: " 18px",
  color: "#222222",
}));
