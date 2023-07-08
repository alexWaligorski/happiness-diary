import { Typography, Box } from "@mui/material";
import Layout from "./Layout";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";
import TextfieldWithHeadline from "./TextfieldWithHeadline";
import ListWithHeadline from "./ListWithHeadline";

export default function DiaryEntry({ title }: { title: string }) {
  return (
    <>
      <Layout maxWidth="lg">
        <Typography paddingY={2} variant="h2" component="h1">
          {title}
        </Typography>
        <LightModeRoundedIcon fontSize="large" htmlColor="#dfb356" />
        <ListWithHeadline
          title={"Ich bin dankbar für"}
          labelOne={"Erster Grund für Dankbarkeit"}
          labelTwo={"Zweiter Grund für Dankbarkeit"}
          labelThree={"Dritter Grund für Dankbarkeit"}
          isEvening={false}
        />
        <TextfieldWithHeadline
          title={"So mache ich den heutigen Tag wundervoll"}
          label={"Diese positiven Vorsätze habe ich für heute!"}
        />
        <TextfieldWithHeadline
          title={"Positive Selbstbekräftigung"}
          label={"So möchte ich heute oder zukünftig sein!"}
        />
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
        <ModeNightRoundedIcon htmlColor="#77a0d2" fontSize="large" />
        <TextfieldWithHeadline
          title={"Was habe ich heute Gutes für jemanden getan?"}
          label={"Kleine oder große Gesten, alles zählt!"}
        />
        <TextfieldWithHeadline
          title={"Was werde ich morgen besser machen?"}
          label={"Positive Veränderungen – jeden Tag!"}
        />
        <ListWithHeadline
          title={"Tolle Dinge, die ich heute Erlebt habe..."}
          labelOne={"Erstes Erlebnis"}
          labelTwo={"Zweites Erlebnis"}
          labelThree={"Drittes Erlebnis"}
          isEvening={true}
        />
      </Layout>
    </>
  );
}
