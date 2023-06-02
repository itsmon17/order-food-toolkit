import React, { memo } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Card = memo(({ children }) => {
  return <CardStyle>{children}</CardStyle>;
});

const rotate = keyframes`
 from {
      opacity: 0;
      transform: translateY(4rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
`;

const CardStyle = styled("div")(() => ({
  background: " #ffffff",
  padding: "40px",
  borderRadius: "16px",
  maxWidth: "64.9375rem",
  margin: "0px auto",

  animation: `1s ease-out 0s 1 normal forwards running ${rotate}`,
}));
