import React, { useEffect, useState } from "react";
import { IReward, IQuest } from "../../utils/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Item } from "../../utils/fcts";
import { completeQuest } from "../../app/reducers/QuestsSlice";
import { addExperience, addGold } from "../../app/reducers/CharacterSlice";

const QuestsJournal: React.FC = () => {
  const dispatch = useDispatch(); // Add dispatch from react-redux
  const listQuests = useSelector((state: RootState) => state.quests.quests);
  const [quests, setQuests] = useState<IQuest[]>(listQuests);

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
  return (
    <div>
      <Typography variant="h3">Quests Journal</Typography>
      <ul>
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
                  <Typography color="#030027" variant="h5" component="div">
                    {quest.title}
                  </Typography>
                  <Typography color="#030027" variant="body2">
                    {quest.description}
                  </Typography>
                </Item>
                {/* sx={{ bgcolor: "grey", border: "1px solid black", borderRadius: "5px" }} */}
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
                    <Typography variant="h6" component="div" color="#030027">
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
      </ul>
    </div>
  );
};
export default QuestsJournal;
