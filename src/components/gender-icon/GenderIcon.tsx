import { Box } from "@mui/material";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import { lightBlue, pink } from "@mui/material/colors";

import { Appearance } from "../../types";

interface GenderIconProps {
  gender: Appearance["gender"];
}

export const GenderIcon = ({ gender }: GenderIconProps) => {
  const isMale = gender === "Male";
  return (
    <Box component="div">
      {isMale ? (
        <MaleIcon fontSize="large" sx={{ color: lightBlue[400] }} />
      ) : (
        <FemaleIcon fontSize="large" sx={{ color: pink[100] }} />
      )}
    </Box>
  );
};
