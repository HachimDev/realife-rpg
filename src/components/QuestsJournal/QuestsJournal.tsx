import React, { useEffect, useState } from "react";
import { Quest } from "../../utils/interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Item } from "../../utils/fcts";

const QuestsJournal: React.FC = () => {
  const listQuests = useSelector((state: RootState) => state.quests.quests);
  const [quests, setQuests] = useState<Quest[]>(listQuests);

  useEffect(() => {
    setQuests(listQuests);
  }, [listQuests]);
  return (
    <div>
      <Typography variant="h3">Quests Journal</Typography>
      <ul>
        {quests.map((quest) => (
          //   <li key={quest.id}>{quest.title}</li>
          <Card raised sx={{ minWidth: 275, marginBottom: 2, marginRight: 8 }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  //   p: 1,
                  //   m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
              >
                <Item>
                  <Typography variant="h5" component="div">
                    {quest.title}
                  </Typography>
                  <Typography variant="body2">{quest.description}</Typography>
                </Item>
                <Item>
                  <Typography color="#23d653" variant="subtitle2">
                    +{quest.rewards.experience}EXP
                  </Typography>
                  {quest.rewards.gold && (
                    <Typography color="#FFD700" variant="subtitle2">
                      +{quest.rewards.gold}G
                    </Typography>
                  )}
                </Item>
                <Item>
                  <Button variant="contained" color="primary">
                    Complete
                  </Button>
                  <Button variant="outlined" color="error">
                    Abandon
                  </Button>
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
