import { useState } from "react";

import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import { Superhero } from "../../../../types";
import { useHerosStore } from "../../../../store/sotre";
import { GenderIcon } from "../../../../components/gender-icon/GenderIcon";
import { PowersStats } from "../../../../components/powers-stats/PowersStats";
import { HeroDetailsDialog } from "../../../../components/hero-details-dialog/HeroDetailsDialog";

export const HeroCompareCard = ({ hero }: { hero: Superhero }) => {
  const [showDialog, setShowDialog] = useState(false);

  const updateCompareList = useHerosStore((state) => state.updateCompareList);

  const handleCloseDialog = () => setShowDialog(false);
  const handleOpenDialog = () => setShowDialog(true);

  return (
    <Card sx={{ minWidth: 250, position: "relative" }}>
      <CardMedia component="img" sx={{ height: 300 }} src={hero.image.url} />
      <CardContent>
        <Stack direction="row" alignItems="center">
          <Typography variant="h6">{hero.name}</Typography>
          <IconButton onClick={() => updateCompareList(hero.id)}>
            <ClearOutlinedIcon />
          </IconButton>
        </Stack>
        <Typography variant="body2">({hero.biography["full-name"]})</Typography>
        <GenderIcon gender={hero.appearance.gender} />
        <PowersStats powerstats={hero.powerstats} />
        <Button variant="contained" onClick={handleOpenDialog}>More</Button>
      </CardContent>
      <HeroDetailsDialog hero={hero} open={showDialog} handleClose={handleCloseDialog}/>
    </Card>
  );
};
