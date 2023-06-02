import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Card } from "../UI/card/Card";
import { MealItem } from "./MealItem";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "../../store/meals/mealsThunk";
import SnackBar from "../UI/SnackBar";

export const Meals = () => {
  const { meals } = useSelector((state) => state.meals);
  const dispatch = useDispatch();

  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "",
    message: "",
  });

  useEffect(() => {
    dispatch(getFoods());
  }, [dispatch]);

  function successHandler() {
    setSnackbar((prev) => ({
      ...prev,
      open: true,
      severity: "success",
      message: "Successfully added",
    }));
  }

  function onCloseHandler() {
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }));
  }

  function errorHandler() {
    setSnackbar((prev) => ({
      ...prev,
      open: true ,
      severity: "error",
      message: "Something went wrong",
    }));
  }

  return (
    <Container>
      {snackbar.open && (
        <SnackBar
          open={snackbar.open}
          handleClose={onCloseHandler}
          severity={snackbar.severity}
          message={snackbar.message}
        />
      )}

      <Card>
        {meals?.map((meal) => (
          <MealItem
            key={meal._id}
            meal={meal}
            successHandler={successHandler}
            errorHandler={errorHandler}
          />
        ))}
      </Card>
    </Container>
  );
};

const Container = styled("div")(() => ({
  marginTop: " 135px",
  marginBottom: " 100px",
}));
