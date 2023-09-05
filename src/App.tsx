import { Route, Routes } from "react-router-dom";
import { Box, Divider, Grid } from "@mui/material";

import { useHerosStore } from "./store/sotre";
import { Compare } from "./pages/compare/Compare";
import { Loader } from "./components/loader/Loader";
import { SearchField } from "./components/search-field/SearchField";
import { Searchresults } from "./pages/search-results/SearchResults";

function App() {
  const isLoading = useHerosStore((state) => state.isLoading);

  return (
    <Grid container direction="column" height={"100%"} overflow="hidden">
      <Grid container item>
        <Box padding={2}>
          <SearchField />
        </Box>
      </Grid>
      <Divider />
      <Grid xs container item height={"100%"} width={"100%"} overflow="hidden">
        <Routes>
          <Route path="/" element={<Searchresults />} />
          <Route path="/compare" element={<Compare />} />
        </Routes>
      </Grid>
      <Loader open={isLoading} />
    </Grid>
  );
}

export default App;
