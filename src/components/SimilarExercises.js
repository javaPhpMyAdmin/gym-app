import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { HorizontalScrollBar, Loader } from "../components/";

export const SimilarExercises = ({
  targetMuscleExercises,
  equipmentMuscleExercises
}) => {
  console.log('TARGETMUSCLE',targetMuscleExercises)
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography variant="h3">
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollBar data={targetMuscleExercises} />
        ): <Loader/>}
      </Stack>
    </Box>
  );
};
