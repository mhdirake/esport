import { Button, styled } from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <BackButtonStyle onClick={() => navigate("/products")}>
      <ChevronLeftIcon />
      See all products
    </BackButtonStyle>
  );
}

const BackButtonStyle = styled(Button)(() => ({
  position: "fixed",
  left: "20px",
  top: "20px",
  zIndex: 9999,
}));

export default BackButton;
