import { Stack, Typography } from "@mui/material";

interface InfoRowProps {
  value: any;
  name: React.ReactNode;
}

export const InfoRow = ({ name, value }: InfoRowProps) => {
  return (
    <Stack direction="row" spacing={1}>
      <Typography variant="body2">{name}</Typography>
      <Typography variant="body2">{value}</Typography>
    </Stack>
  );
};
