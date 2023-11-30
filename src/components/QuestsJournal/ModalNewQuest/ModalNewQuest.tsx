import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Divider,
  Typography,
} from "@mui/material";
import { IQuest } from "../../../utils/interfaces";
import { generateRandomExp } from "../../../utils/fcts";
import { useDispatch } from "react-redux";
import { addQuest } from "../../../app/reducers/QuestsSlice";

interface ModalNewQuestProps {
  open: boolean;
  handleModalState: () => void;
}

const ModalNewQuest: React.FC<ModalNewQuestProps> = ({ open, handleModalState }) => {
  const dispatch = useDispatch();
  const [newQuest, setNewQuest] = useState<IQuest>({} as IQuest);
  const [clickGenerate, setClickGenerate] = useState(false);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewQuest({ ...newQuest, title: event.target.value });
  };
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewQuest({ ...newQuest, description: event.target.value });
  };

  const handleChangeType = (event: any) => {
    setNewQuest({ ...newQuest, type: event.target.value });
  };

  const handleChangeDaily = (event: any) => {
    setNewQuest({ ...newQuest, isDaily: event.target.checked });
  };

  const handleGenerateRewards = () => {
    console.log("generate rewards");
    setClickGenerate(true);
    let exp = generateRandomExp(0, 200);
    let gold = generateRandomExp(0, 20);
    setNewQuest({ ...newQuest, rewards: { experience: exp, gold: gold } });
  };

  const handleAcceptNewQuest = () => {
    dispatch(addQuest(newQuest));
    setNewQuest({} as IQuest);
    setClickGenerate(false);
    handleModalState();
  };
  return (
    <div>
      <Dialog open={open} onClose={handleModalState}>
        <DialogTitle>Create New Quest</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={newQuest.title}
            margin="dense"
            id="questTitle"
            label="Quest Name"
            type="text"
            onChange={handleTitleChange}
            fullWidth
            disabled={clickGenerate}
            required
          />
          <TextField
            value={newQuest.description}
            margin="dense"
            id="questDescription"
            label="Quest Description"
            type="text"
            onChange={handleDescriptionChange}
            fullWidth
            disabled={clickGenerate}
          />
          <FormGroup sx={{ marginTop: 1 }}>
            <FormControl>
              <InputLabel htmlFor="age-native-simple">Type</InputLabel>
              <Select
                sx={{ width: "8em" }}
                value={newQuest.type}
                label="Type"
                id="questType"
                disabled={clickGenerate}
                onChange={handleChangeType}
                required
              >
                <MenuItem value={1}>Professional</MenuItem>
                <MenuItem value={2}>Physical</MenuItem>
                <MenuItem value={3}>Tidiness</MenuItem>
                <MenuItem value={4}>Social</MenuItem>
                <MenuItem value={5}>Intellectual</MenuItem>
                <MenuItem value={6}>Spiritual</MenuItem>
                <MenuItem value={7}>Priority</MenuItem>
                <MenuItem value={8}>Hobby</MenuItem>
                <MenuItem value={9}>Creative</MenuItem>
                <MenuItem value={10}>Financial</MenuItem>
                <MenuItem value={11}>Family</MenuItem>
                <MenuItem value={12}>Other</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={newQuest.isDaily}
                  onChange={handleChangeDaily}
                  name="isDaily"
                  color="primary"
                  disabled={clickGenerate}
                />
              }
              label="Daily Quest"
            />
          </FormGroup>
          <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
          <FormGroup>
            <FormControl>
              <Button variant="outlined" onClick={handleGenerateRewards} disabled={!newQuest.title}>
                Generate Rewards
              </Button>
            </FormControl>
            {clickGenerate && (
              <>
                <Typography>Upon completion, you will receive:</Typography>
                <Typography>{newQuest.rewards?.experience} EXP</Typography>
                <Typography>{newQuest.rewards?.gold} Gold</Typography>
              </>
            )}
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalState}>Decline</Button>
          <Button disabled={!clickGenerate} onClick={handleAcceptNewQuest}>
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalNewQuest;
