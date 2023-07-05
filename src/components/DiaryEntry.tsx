import { Typography, Box } from "@mui/material";
import Layout from "./Layout";
import LooksOneOutlinedIcon from "@mui/icons-material/LooksOneOutlined";
import LooksTwoOutlinedIcon from "@mui/icons-material/LooksTwoOutlined";
import Looks3OutlinedIcon from "@mui/icons-material/Looks3Outlined";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";

export default function DiaryEntry({ title }: { title: string }) {
  return (
    <>
      <Layout maxWidth="lg">
        <Typography paddingY={2} variant="h2" component="h1">
          {title}
        </Typography>
        <LightModeRoundedIcon fontSize="large" htmlColor="#dfb356" />
        <Box paddingY={4}>
          <Typography variant="h5" sx={{ color: "#D89E4E" }}>
            Ich bin dankbar für...
          </Typography>
          <ul>
            <li>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <LooksOneOutlinedIcon />
                <Typography variant="body1" component="p">
                  Erster Grund für Dankbarkeit
                </Typography>
              </Box>
            </li>
            <li>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <LooksTwoOutlinedIcon />
                <Typography variant="body1" component="p">
                  Zweiter Grund für Dankbarkeit
                </Typography>
              </Box>
            </li>
            <li>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Looks3OutlinedIcon />
                <Typography variant="body1" component="p">
                  Dritter Grund für Dankbarkeit
                </Typography>
              </Box>
            </li>
          </ul>
        </Box>
        <Typography paddingY={2} variant="h5" sx={{ color: "#D89E4E" }}>
          So mache ich den heutigen Tag wundervoll
        </Typography>
        <Typography paddingY={2} variant="h5" sx={{ color: "#D89E4E" }}>
          Positive Selbstbekräftigung
        </Typography>
        <Box
          marginY={5}
          paddingY={3}
          width={1}
          sx={{ textAlign: "center", bgcolor: "#dfb356" }}
        >
          <Typography variant={"subtitle1"} sx={{ fontStyle: "italic" }}>
            Ein Tropfen Liebe ist mehr als ein Ozean Verstand.
          </Typography>
          <Typography variant={"overline"}>Blaise Pascal</Typography>
        </Box>
        <ModeNightRoundedIcon htmlColor="#dfb356" fontSize="large" />
        <Typography paddingY={2} variant="h5" sx={{ color: "#D89E4E" }}>
          Was habe ich heute Gutes für jemanden getan?
        </Typography>
        <Typography paddingY={2} variant="h5" sx={{ color: "#D89E4E" }}>
          Was werde ich morgen besser machen?
        </Typography>
        <Box paddingY={4}>
          <Typography variant="h5" sx={{ color: "#D89E4E" }}>
            Tolle Dinge, die ich heute erlebt habe...
          </Typography>
          <ul>
            <li>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <LooksOneOutlinedIcon />
                <Typography variant="body1" component="p">
                  Erstes tolles Ding
                </Typography>
              </Box>
            </li>
            <li>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <LooksTwoOutlinedIcon />
                <Typography variant="body1" component="p">
                  Zweites tolles Ding
                </Typography>
              </Box>
            </li>
            <li>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Looks3OutlinedIcon />
                <Typography variant="body1" component="p">
                  Drittes tolles Ding
                </Typography>
              </Box>
            </li>
          </ul>
        </Box>
      </Layout>
    </>
  );
}
