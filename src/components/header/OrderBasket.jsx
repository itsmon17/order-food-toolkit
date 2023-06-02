import React, { useEffect } from "react";
import { ReactComponent as BasketIcon } from "../../assets/icons/Group.svg";
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from "../../store/basket/basketThunk";
import styled from "@emotion/styled";

export const OrderBasket = ({ children, toggleHandler, className }) => {
  const { items } = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch]);

  const totalAmount = items?.reduce(
    (prev, current) => prev + current.amount,
    0
  );

  return (
    <Button onClick={toggleHandler} className={className}>
      <BasketIcon /> <OrderBasketTitle>{children}</OrderBasketTitle>
      <OrderBasketCount>{totalAmount}</OrderBasketCount>
    </Button>
  );
};

const Button = styled("button")(() => ({
  padding: "16px 38px",
  backgroundColor: "#5a1f08",
  borderRadius: "30px",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  ":hover": {
    backgroundColor: "#4d1601",
  },
  " :active": {
    backgroundColor: "#993108",
  },
  ".bump": {
    animation: "bump 300ms ease-out",
  },
  "@keyframes bump": {
    " 0%": {
      transform: "scale(1)",
    },
    " 10%": {
      transform: "scale(0.9)",
    },
    "30%": {
      transform: "scale(1.1)",
    },
    "50%": {
      transform: "scale(1.15)",
    },
    " 100%": {
      transform: "scale(1)",
    },
  },
}));

const OrderBasketTitle = styled("span")(() => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "16px",
  linehHeight: "24px",
  color: "#ffffff",
  marginLeft: "13px",
}));

const OrderBasketCount = styled("p")(() => ({
  backgroundColor: "#8a2b06",
  borderRadius: "30px",
  padding: "4px 20px",
  marginLeft: "24px",
  fontFamily: "Manrope",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "27px",
  color: "#ffffff",
}));
