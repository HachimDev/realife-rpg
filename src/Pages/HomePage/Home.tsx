import { Box, Button } from "@mui/material";
import React from "react";
import CharOverview from "../../components/CharOverview/CharOverview";
import { useDispatch } from "react-redux";
import { addExperience } from "../../app/reducers/CharacterSlice";
import QuestsJournal from "../../components/QuestsJournal/QuestsJournal";

const Home: React.FC = () => {
  const dispatch = useDispatch(); // Add dispatch from react-redux

  return (
    <>
      <CharOverview />
      <QuestsJournal />
    </>
  );
};
export default Home;
