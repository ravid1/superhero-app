import { useState } from "react";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Checkbox,
  Button,
} from "@mui/material";
import { Superhero } from "../../../../types";
import { useHerosStore } from "../../../../store/sotre";
import { GenderIcon } from "../../../../components/gender-icon/GenderIcon";
import { HeroDetailsDialog } from "../../../../components/hero-details-dialog/HeroDetailsDialog";

interface HeroCardProps {
  hero: Superhero;
}

export const HeroCard = ({ hero }: HeroCardProps) => {
  const [showDialog, setShowDialog] = useState(false);
  const herosIdsToCompare = useHerosStore((state) => state.herosIdsToCompare);
  const updateCompareList = useHerosStore((state) => state.updateCompareList);

  const isSelected = herosIdsToCompare.includes(hero.id);
  const isCheckboxDisabled = herosIdsToCompare.length >= 6 && !isSelected;

  const handleCloseDialog = () => setShowDialog(false);
  const handleOpenDialog = () => setShowDialog(true);

  return (
    <Box sx={{ position: "relative" }}>
      <Card sx={{ height: 220 }}>
        <Box sx={{ display: "flex" }}>
          <CardMedia component="img" sx={{ width: 180 }} src={hero.image.url} />
          <CardContent>
            <Typography variant="h6">{hero.name}</Typography>
            <Typography variant="body2">
              ({hero.biography["full-name"]})
            </Typography>
            <GenderIcon gender={hero.appearance.gender}/>
      
            <Checkbox
              sx={{ position: "absolute", top: -20, right: -20 }}
              checked={isSelected}
              disabled={isCheckboxDisabled}
              onChange={() => updateCompareList(hero.id)}
            />
            <Button variant="contained" onClick={handleOpenDialog}>More</Button>
            <HeroDetailsDialog hero={hero} open={showDialog} handleClose={handleCloseDialog}/>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};
