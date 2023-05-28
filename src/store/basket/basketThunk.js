import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRequest } from "../../lib/fetchAPI";

export const getBasket = createAsyncThunk(
  "basket/getBasket",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchRequest("/basket");
      return response.items;
    } catch (error) {
      return rejectWithValue(
        error?.response?.message || "Something went wrong!"
      );
    }
  }
);
export const addItem = createAsyncThunk(
  "basket/addItem",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetchRequest(`/foods/${payload.id}/addToBasket`, {
        method: "POST",
        body: { amount: payload.amount },
      });
      dispatch(getBasket());
      return await response.items;
    } catch (error) {
      return rejectWithValue(
        error?.response?.message || "Something went wrong!"
      );
    }
  }
);
export const incrementFood = createAsyncThunk(
  "basket/increment",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetchRequest(`/basketItem/${payload.id}/update`, {
        method: "PUT",
        body: { amount: payload.amount + 1 },
      });

      dispatch(getBasket());

      return await response.items;
    } catch (error) {
      return rejectWithValue(
        error?.response?.message || "Something went wrong!"
      );
    }
  }
);

export const decrementFood = createAsyncThunk(
  "basket/decrement",
  async (payload, { rejectWithValue, dispatch }) => {
    if (payload.amount !== 0) {
      try {
        const response = await fetchRequest(
          `/basketItem/${payload.id}/update`,
          {
            method: "PUT",
            body: { amount: payload.amount },
          }
        );

        dispatch(getBasket());

        return await response.items;
      } catch (error) {
        return rejectWithValue(
          error?.response?.message || "Something went wrong!"
        );
      }
    } else {
      try {
        const response = await fetchRequest(
          `/basketItem/${payload.id}/delete`,
          {
            method: "DELETE",
          }
        );

        dispatch(getBasket());

        return await response.items;
      } catch (error) {
        return rejectWithValue(
          error?.response?.message || "Something went wrong!"
        );
      }
    }
  }
);
