import { useEffect, useState } from "react";

import { TextField } from "@mui/material";
import { useDebounce } from "usehooks-ts";

import { useHerosStore } from "../../store/sotre";

export const SearchField = () => {
  const [name, setName] = useState("");
  const debouncedName = useDebounce(name, 300);
  const getHeroesByName = useHerosStore((state) => state.getHeroesByName);

  useEffect(() => {
    if (debouncedName) {
      getHeroesByName(debouncedName);
    }
  }, [debouncedName]);

  const onChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setName(event.target.value);
  };

  return (
    <TextField label="SuperHero Name" variant="outlined" onChange={onChange} />
  );
};
