import { axiosInstance } from "../config/axiosInstance";

export const getMealsRequest = () => {
  return axiosInstance.get("/foods");
};

export const getBasketRequest = () => {
  return axiosInstance.get("/basket");
};

export const updateBasketRequest = (id, basketAmount) => {
  return axiosInstance.put(`basketitem/${id}/update`, {
    amount: basketAmount,
  });
};

export const deleteBasketItemRequest = (id) => {
  return axiosInstance.delete(`basketitem/${id}/delete`);
};

export const addToBasketRequest = (newItem) => {
  return axiosInstance.post(`foods/${newItem.id}/addToBasket`, {
    amount: newItem.amount,
  });
};
