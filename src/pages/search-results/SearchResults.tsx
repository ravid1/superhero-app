import { Stack, Grid, Divider, Typography, Box } from "@mui/material";

import { HeroCard } from "./components/hero-card/HeroCard";
import { useHerosStore } from "../../store/sotre";
import { Footer } from "./components/footer/Footer";

export const Searchresults = () => {
  const heros = useHerosStore((state) => state.heros);
  const showNeedToSearchMessage = !heros;
  const showNoResultsMessage = heros?.length === 0;

  return (
    <Stack overflow={"hidden"} height={"100%"} width={"100%"}>
      {showNeedToSearchMessage && <BeginSearchMessage />}
      {showNoResultsMessage && <NoResultsMessage />}
      <Grid
        container
        padding={6}
        height={"100%"}
        overflow="auto"
        rowSpacing={{ xs: 6, sm: 6, md: 6, lg: 6 }}
        columnSpacing={{ xs: 12, sm: 6, md: 6, lg: 6 }}
      >
        {heros?.map((hero) => (
          <Grid item xs={6} md={4} lg={3} key={hero.id}>
            <HeroCard hero={hero} />
          </Grid>
        ))}
      </Grid>
      <Divider />
      <Footer />
    </Stack>
  );
};

const BeginSearchMessage = () => {
  return (
    <Box
      height="100%"
      display="flex"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h5">
        Discover your favorite superhero! Enter a name to begin exploring.
      </Typography>
    </Box>
  );
};

const NoResultsMessage = () => {
  return (
    <Box
      height="100%"
      display="flex"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h5">
        Oops! No superheroes found for that search. Try entering a different
        name to uncover new heroes.
      </Typography>
    </Box>
  );
};
