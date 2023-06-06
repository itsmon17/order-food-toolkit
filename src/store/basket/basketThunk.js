import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addToBasketRequest,
  deleteBasketItemRequest,
  getBasketRequest,
  updateBasketRequest,
} from "../../api/mealsService";

export const getBasket = createAsyncThunk(
  "basket/getBasket",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getBasketRequest();
      return data.data.items;
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
      await addToBasketRequest(payload);
      dispatch(getBasket());
    } catch (error) {
      return rejectWithValue(
        error?.response?.message || "Something went wrong!"
      );
    }
  }
);
export const incrementFood = createAsyncThunk(
  "basket/increment",
  async ({ id, amount }, { rejectWithValue, dispatch }) => {
    try {
      await updateBasketRequest(id, amount);
      dispatch(getBasket());
    } catch (error) {
      return rejectWithValue(
        error?.response?.message || "Something went wrong!"
      );
    }
  }
);

export const decrementFood = createAsyncThunk(
  "basket/decrement",
  async ({ id, amount }, { rejectWithValue, dispatch }) => {
    if (amount !== 0) {
      try {
        await updateBasketRequest(id, amount);
        dispatch(getBasket());
      } catch (error) {
        return rejectWithValue(
          error?.response?.message || "Something went wrong!"
        );
      }
    } else {
      try {
        deleteBasketItemRequest(id);
        dispatch(getBasket());
      } catch (error) {
        return rejectWithValue(
          error?.response?.message || "Something went wrong!"
        );
      }
    }
  }
);
