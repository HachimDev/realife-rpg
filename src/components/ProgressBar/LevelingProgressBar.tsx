import { Box, BoxProps, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IexperienceData } from "../../utils/interfaces";
import { Item } from "../../utils/fcts";

interface LevelingProgressBarProps {
  expData: IexperienceData;
}

const LevelingProgressBar: React.FC<LevelingProgressBarProps> = ({ expData }) => {
  const [progress, setProgress] = useState((expData.currentExp / expData.expToNextLevel) * 100);

  useEffect(() => {
    setProgress((expData.currentExp / expData.expToNextLevel) * 100);
  }, [expData]);

  return (
    <Box>
      <Typography variant="body1">Progress: {Math.round(progress)}%</Typography>
      <Box sx={{ display: "flex" }}>
        <Item>Lv.{expData.level} </Item>
        <Item sx={{ width: "100%", paddingTop: "15px" }}>
          <LinearProgress variant="determinate" value={progress} />
        </Item>
        <Item>Lv.{expData.level + 1}</Item>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {expData.currentExp}/{expData.expToNextLevel}
      </Box>
    </Box>
  );
};

export default LevelingProgressBar;
