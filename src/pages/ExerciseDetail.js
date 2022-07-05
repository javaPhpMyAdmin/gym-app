import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { options, fetchData, optionsYouTubeSearch } from "../utils/fetchData";
import { Detail, ExerciseVideo, SimilarExercises } from "../components";

export const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExercisesVideos] = useState([]);
  const { id } = useParams();
  console.log("ME LLEGO ID", id);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl =
        "https://exercisedb.p.rapidapi.com/exercises/exercise";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com/video/related";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/${id}`,
        options
      );
      // console.log(exerciseDetailData)
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}`,
        optionsYouTubeSearch
      );
      setExercisesVideos(exerciseVideosData);
    };
    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo exercisesVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises />
    </Box>
  );
};
