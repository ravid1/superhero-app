import { Link } from "react-router-dom";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import { useHerosStore } from "../../store/sotre";
import { HeroCompareCard } from "./components/hero-compare-card/HeroCompareCard";

export const Compare = () => {
  const allHeros = useHerosStore((state) => state.heros);
  const herosIdsToCompare = useHerosStore((state) => state.herosIdsToCompare);
  const herosToCompare = allHeros?.filter((hero) =>
    herosIdsToCompare.includes(hero.id)
  );

  return (
    <Stack overflow={"hidden"} height={"100%"} width={"100%"}>
      <Box paddingTop={2} paddingLeft={6}>
        <Button
          variant="contained"
          component={Link}
          to="/"
          startIcon={<ArrowBackOutlinedIcon />}
        >
          Back to Search Results
        </Button>
        {(herosToCompare?.length === 0 || !herosIdsToCompare) && (
          <NoHerosMessage/>
        )}
      </Box>
      <Grid
        container
        padding={6}
        height={"100%"}
        overflow="auto"
        rowSpacing={{ xs: 12, sm: 6, md: 6 }}
        columnSpacing={{ xs: 12, sm: 8, md: 12 }}
      >
        {herosToCompare?.map((hero) => (
          <Grid item xs={4} md={2} lg={2} key={hero.id}>
            <HeroCompareCard hero={hero} />
          </Grid>
        ))}
      </Grid>
      
    </Stack>
  );
};

const NoHerosMessage = () => {
  return (
    <Box
      height="100%"
      display="flex"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h5">
        Oops! No superheroes to comapre. Try getting back to the seah results page and select some heroes.
      </Typography>
    </Box>
  );
};
