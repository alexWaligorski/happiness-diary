import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function TextfieldWithHeadline({
  title,
  label,
}: {
  title: string;
  label: string;
}) {
  return (
    <>
      <Typography paddingY={2} variant="h5" sx={{ color: "#D89E4E" }}>
        {title}
      </Typography>
      <TextField
        sx={{ width: "50%" }}
        id="standard-basic"
        label={label}
        variant="standard"
        multiline
      />
    </>
  );
}
