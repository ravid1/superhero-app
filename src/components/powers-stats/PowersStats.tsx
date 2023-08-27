import { Stack } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";

import { InfoRow } from "../../pages/compare/components/InfoRow/InfoRow";
import { Superhero } from "../../types";

interface PowersStatsProps {
  powerstats: Superhero["powerstats"];
}
export const PowersStats = ({ powerstats }: PowersStatsProps) => {
  return (
    <Stack>
      <InfoRow
        name={<FitnessCenterIcon />}
        value={powerstats.strength || "-"}
      />
      <InfoRow
        name={<PsychologyAltIcon />}
        value={powerstats.intelligence || "-"}
      />
      <InfoRow
        name={<DirectionsRunIcon />}
        value={powerstats.speed || "-"}
      />
      <InfoRow
        name={<SportsKabaddiIcon />}
        value={powerstats.combat || "-"}
      />
    </Stack>
  );
};
