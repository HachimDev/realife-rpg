import { Box, BoxProps } from "@mui/material";

export const Item = (props: BoxProps) => {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        color: (theme) => (theme.palette.mode === "dark" ? "grey.300" : "grey.800"),
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
};

export const generateRandomExp = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/*                 <MenuItem value={1}>Professional</MenuItem>
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
                <MenuItem value={12}>Other</MenuItem> */

export const convertQuestType = (type: number) => {
  switch (type) {
    case 1:
      return "Professional";
    case 2:
      return "Physical";
    case 3:
      return "Tidiness";
    case 4:
      return "Social";
    case 5:
      return "Intellectual";
    case 6:
      return "Spiritual";
    case 7:
      return "Priority";
    case 8:
      return "Hobby";
    case 9:
      return "Creative";
    case 10:
      return "Financial";
    case 11:
      return "Family";
    case 12:
      return "Other";
  }
};
