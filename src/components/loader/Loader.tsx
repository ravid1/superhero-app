import { Backdrop, CircularProgress } from "@mui/material";

interface LoaderProps {
  open: boolean;
}

export const Loader = ({ open }: LoaderProps) => {
  return (
    <Backdrop
      open={open}
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
