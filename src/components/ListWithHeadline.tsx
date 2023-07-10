import { Typography, Box } from "@mui/material";
import TextField from "@mui/material/TextField";

import LooksOneOutlinedIcon from "@mui/icons-material/LooksOneOutlined";
import LooksTwoOutlinedIcon from "@mui/icons-material/LooksTwoOutlined";
import Looks3OutlinedIcon from "@mui/icons-material/Looks3Outlined";

export default function ListWithHeadline({
  title,
  isEvening,
  label1,
  label2,
  label3,
  name1,
  name2,
  name3,
}: {
  title: string;
  isEvening: boolean;
  label1: string;
  label2: string;
  label3: string;
  name1: string;
  name2: string;
  name3: string;
}) {
  return (
    <Box paddingY={4}>
      <Typography variant="h5" sx={{ color: "#D89E4E" }}>
        {title}
      </Typography>
      <ul>
        <li>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
            <LooksOneOutlinedIcon
              htmlColor={isEvening ? "#77A0D2" : "#D89E4E"}
            />
            <TextField
              sx={{ width: "50%" }}
              id="standard-basic"
              label={label1}
              name={name1}
              variant="standard"
              multiline
            />
          </Box>
        </li>
        <li>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
            <LooksTwoOutlinedIcon
              htmlColor={isEvening ? "#77A0D2" : "#D89E4E"}
            />
            <TextField
              sx={{ width: "50%" }}
              id="standard-basic"
              label={label2}
              name={name2}
              variant="standard"
              multiline
            />
          </Box>
        </li>
        <li>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
            <Looks3OutlinedIcon htmlColor={isEvening ? "#77A0D2" : "#D89E4E"} />
            <TextField
              sx={{ width: "50%" }}
              id="standard-basic"
              label={label3}
              name={name3}
              variant="standard"
              multiline
            />
          </Box>
        </li>
      </ul>
    </Box>
  );
}
