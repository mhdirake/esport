import { Box, styled } from "@mui/material";

import React from "react";

function About() {
  return <BoxStyle>ABOUTTTTTT</BoxStyle>;
}

const BoxStyle = styled(Box)(() => ({
  display: "block",
  width: "100%",
  height: "100%",
  background: "blue",
}));

export default About;
