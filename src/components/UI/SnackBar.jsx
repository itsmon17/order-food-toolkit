import { Alert, Snackbar } from "@mui/material";
import React from "react";

export const SnackBar = ({ open, handleClose , severity, message}) => {
  return (
    <div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div> 
  );
};

export default SnackBar;
