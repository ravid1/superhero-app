import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { InfoRow } from "../../pages/compare/components/InfoRow/InfoRow";

import { Superhero } from "../../types";
import { GenderIcon } from "../gender-icon/GenderIcon";
import { PowersStats } from "../powers-stats/PowersStats";

interface HeroDetailsDialogProps {
  hero: Superhero;
  open: boolean;
  handleClose: () => void;
}

export const HeroDetailsDialog = ({ hero, open, handleClose }: HeroDetailsDialogProps) => {
  return (
    <Dialog fullWidth maxWidth={"lg"} open={open}>
      <DialogTitle>{hero.name}</DialogTitle>
      <DialogContent dividers>
        <Box display="flex">
          <Box component="img" src={hero.image.url} />
          <Stack spacing={1} paddingLeft={3}>
            <Typography variant="h6">{hero.name}</Typography>
            <Typography variant="body2">
              ({hero.biography["full-name"]})
            </Typography>
            <GenderIcon gender={hero.appearance.gender} />
            <InfoRow name="Alignment:" value={hero.biography.alignment || "-"}/>
            <InfoRow name="race:" value={hero.appearance.race || "-"}/>
            <InfoRow name="occupation:" value={hero.work.occupation || "-"}/>
            <PowersStats powerstats={hero.powerstats} />
          </Stack>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
