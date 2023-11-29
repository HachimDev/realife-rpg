import { Box, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import React from "react";
import AvatarImg from "../../assets/avatar.png";
import "./CharOverview.css";
import LevelingProgressBar from "../ProgressBar/LevelingProgressBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";

function CharOverview() {
  // add dispatch from characterSlice

  const dispatch = useDispatch(); // Add dispatch from react-redux
  const expData = useSelector((state: RootState) => state.character.experience);

  return (
    <Box
      sx={{
        margin: 2,
        paddingLeft: 2,
        paddingRight: 2,
        paddingBottom: 2,
      }}
    >
      <Card raised sx={{ minWidth: 275, marginBottom: 2, border: "3px solid #1976D2" }}>
        <CardHeader title="Character Overview" />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={4} pl={2}>
              <img src={AvatarImg} alt="Avatar" />
            </Grid>
            <Grid item xs={8} pr={4}>
              <Typography variant="h6">Level {expData.level} </Typography>
              <LevelingProgressBar expData={expData} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CharOverview;
