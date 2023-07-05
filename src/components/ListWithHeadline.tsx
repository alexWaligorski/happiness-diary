import { Typography, Box } from "@mui/material";
import TextField from "@mui/material/TextField";

import LooksOneOutlinedIcon from "@mui/icons-material/LooksOneOutlined";
import LooksTwoOutlinedIcon from "@mui/icons-material/LooksTwoOutlined";
import Looks3OutlinedIcon from "@mui/icons-material/Looks3Outlined";

export default function ListWithHeadline({
  title,
  labelOne,
  labelTwo,
  labelThree,
}: {
  title: string;
  labelOne: string;
  labelTwo: string;
  labelThree: string;
}) {
  return (
    <Box paddingY={4}>
      <Typography variant="h5" sx={{ color: "#D89E4E" }}>
        {title}
      </Typography>
      <ul>
        <li>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
            <LooksOneOutlinedIcon htmlColor={"#77A0D2"} />
            <TextField
              sx={{ width: "50%" }}
              id="standard-basic"
              label={labelOne}
              variant="standard"
              multiline
            />
          </Box>
        </li>
        <li>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
            <LooksTwoOutlinedIcon htmlColor={"#77A0D2"} />
            <TextField
              sx={{ width: "50%" }}
              id="standard-basic"
              label={labelTwo}
              variant="standard"
              multiline
            />
          </Box>
        </li>
        <li>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
            <Looks3OutlinedIcon htmlColor={"#77A0D2"} />
            <TextField
              sx={{ width: "50%" }}
              id="standard-basic"
              label={labelThree}
              variant="standard"
              multiline
            />
          </Box>
        </li>
      </ul>
    </Box>
  );
}
