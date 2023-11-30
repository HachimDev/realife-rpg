import React from "react";
import CharOverview from "../../components/CharOverview/CharOverview";
import QuestsJournal from "../../components/QuestsJournal/QuestsJournal";

const Home: React.FC = () => {
  return (
    <>
      <CharOverview />
      <QuestsJournal />
    </>
  );
};
export default Home;
