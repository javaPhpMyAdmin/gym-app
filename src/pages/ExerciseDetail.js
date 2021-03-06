import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { options, fetchData, optionsYouTubeSearch } from "../utils/fetchData";
import { Detail, ExerciseVideo, SimilarExercises } from "../components";

export const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentMuscleExercises, setEquipmentMuscleExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl =
        "https://exercisedb.p.rapidapi.com/exercises/exercise";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/${id}`,
        options
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        optionsYouTubeSearch
      );
      console.log(exerciseVideosData);
      setExerciseVideos(exerciseVideosData.contents[0]);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        options
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        options
      );
      setEquipmentMuscleExercises(equipmentMuscleExercisesData);
    };

    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo
        exercisesVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentMuscleExercises={equipmentMuscleExercises}
      />
    </Box>
  );
};
