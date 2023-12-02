import React, { useEffect, useState } from "react";
import { IReward, IQuest } from "../../utils/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Item, convertQuestType } from "../../utils/fcts";
import { completeQuest } from "../../app/reducers/QuestsSlice";
import { addExperience, addGold } from "../../app/reducers/user";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ModalNewQuest from "./ModalNewQuest/ModalNewQuest";

const QuestsJournal: React.FC = () => {
  const dispatch = useDispatch(); // Add dispatch from react-redux
  const listQuests = useSelector((state: RootState) => state.quests.quests);
  const [quests, setQuests] = useState<IQuest[]>(listQuests);
  const [openModalNewQuest, setOpenModalNewQuest] = useState(false);

  useEffect(() => {
    setQuests(listQuests);
  }, [listQuests]);

  const handleCompleteQuest = (questId: string, rewards: IReward) => {
    console.log(questId);
    dispatch(completeQuest(questId));
    dispatch(addExperience(rewards.experience));
    if (rewards.gold) {
      dispatch(addGold(rewards.gold));
    }
  };

  const handleOpenModalNewQuest = () => {
    setOpenModalNewQuest(!openModalNewQuest);
  };
  return (
    <div>
      <Typography pl={5} mb={5} variant="h4">
        Quests Journal
        <Button
          startIcon={<AddCircleOutlineIcon />}
          sx={{ marginLeft: 5 }}
          variant="contained"
          color="primary"
          onClick={handleOpenModalNewQuest}
        >
          New Quest
        </Button>
      </Typography>
      {quests.map((quest) => (
        <Card
          key={quest.id}
          raised
          sx={{
            backgroundColor: quest.completed ? "#49a078" : "#fadb6f",
            color: quest.completed ? "white" : "black",
            minWidth: 275,
            marginBottom: 2,
            marginRight: 8,
            marginLeft: 8,
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                borderRadius: 1,
              }}
            >
              <Item>
                <Typography
                  sx={{ color: quest.completed ? "white" : "030027" }}
                  variant="h5"
                  component="div"
                >
                  {quest.title}
                </Typography>
                <Typography sx={{ color: quest.completed ? "white" : "030027" }} variant="body2">
                  {quest.description}
                </Typography>
                <Typography
                  sx={{ color: quest.completed ? "white" : "030027", fontWeight: "bold", mt: 2 }}
                  variant="subtitle2"
                >
                  {convertQuestType(quest.type)}
                </Typography>
              </Item>
              <Item>
                <Card raised>
                  <CardContent>
                    <Typography color="#23d653" variant="subtitle2">
                      +{quest.rewards.experience}EXP
                    </Typography>
                    {quest.rewards.gold && (
                      <Typography color="#FFD700" variant="subtitle2">
                        +{quest.rewards.gold}G
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Item>
              <Item>
                {quest.completed ? (
                  <Typography variant="h6" component="div" color="white">
                    Completed!
                  </Typography>
                ) : (
                  <>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleCompleteQuest(quest.id, quest.rewards)}
                    >
                      Complete
                    </Button>
                    <Button variant="contained" color="error">
                      Abandon
                    </Button>
                  </>
                )}
              </Item>
            </Box>
          </CardContent>
        </Card>
      ))}
      <ModalNewQuest open={openModalNewQuest} handleModalState={handleOpenModalNewQuest} />
    </div>
  );
};
export default QuestsJournal;
