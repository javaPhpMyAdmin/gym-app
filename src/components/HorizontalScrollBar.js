import { Box } from "@mui/material";
import React from "react";
import { BodyPart } from "./BodyPart";

export const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0px 40px"
        >
          <BodyPart
            item={item}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
        </Box>
      ))}
    </div>
  );
};