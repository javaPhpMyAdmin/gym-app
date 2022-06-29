import React, {useState} from "react";
import { Box } from "@mui/system";
import {HeroBanner,SearchExercises,Exercises} from '../components'

export const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises/>
      <Exercises/>
    </Box>
  )
};
