import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar } from "./components";
import { ExerciseDetail, Home } from "./pages";

const App = () => {
  return (
    <Box width="401px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <h1>Gretting</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
    </Box>
  );
};

export default App;
