import { Typography, Box } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function TextfieldWithHeadline({
  title,
  label,
  name,
}: {
  title: string;
  label: string;
  name: string;
}) {
  return (
    <>
      <Box paddingY={3}>
        <Typography paddingY={2} variant="h5" sx={{ color: "#D89E4E" }}>
          {title}
        </Typography>
        <TextField
          sx={{ width: "50%" }}
          id="standard-basic"
          label={label}
          variant="standard"
          multiline
          name={name}
        />
      </Box>
    </>
  );
}
