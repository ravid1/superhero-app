import { Link } from "react-router-dom";
import { Button, Chip, Stack } from "@mui/material";

import { useHerosStore } from "../../../../store/sotre";

export const Footer = () => {
  const heros = useHerosStore((state) => state.heros);
  const herosIdsToCompare = useHerosStore((state) => state.herosIdsToCompare);
  const clearCompareList = useHerosStore((state) => state.clearCompareList);

  const isClearDisabled = herosIdsToCompare.length === 0;
  const herosNames = herosIdsToCompare
    .map((heroId) => heros?.find((hero) => hero.id === heroId)?.name)
    .filter(Boolean);

  return (
    <Stack
      padding={2}
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="flex-end"
    >
      {herosNames.map((heroName) => (
        <Chip label={heroName} />
      ))}
      <Button
        variant="outlined"
        disabled={isClearDisabled}
        onClick={clearCompareList}
      >
        Clear
      </Button>
      <Button
        variant="contained"
        component={Link}
        to="compare"
        disabled={isClearDisabled}
      >
        Compare
      </Button>
    </Stack>
  );
};
