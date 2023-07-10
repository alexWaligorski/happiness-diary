import { Typography, Box } from "@mui/material";
import Layout from "./Layout";
import EveningRoutine from "./EveningRoutine";
import MorningRoutine from "./morningRoutine";

/* type MorningData = {
    thankful1: string;
    thankful2: string;
}

interface EveningData {
    thankful1: string;
    thankful2: string;
}


interface MorningProps extends MorningData, MorningUI {

} */

export default function DiaryEntry({ title }: { title: string }) {
  return (
    <>
      <Layout maxWidth="lg">
        <Typography paddingY={2} variant="h2" component="h1">
          {title}
        </Typography>
        <MorningRoutine
          thankfulTitle="Ich bin dankbar für"
          thankfulLabel1="Erster Grund für Dankbarkeit"
          thankfulLabel2="Zweiter Grund für Dankbarkeit"
          thankfulLabel3="Dritter Grund für Dankbarkeit"
          thankfulName1="thankful1"
          thankfulName2="thankful2"
          thankfulName3="thankful3"
          isEvening={false}
          wonderfulDayTitle="So mache ich den heutigen Tag wundervoll"
          wonderfulDayLabel="Diese positiven Vorsätze habe ich für heute!"
          wonderfulDayName="wonderful"
          positiveAffirmationTitle="Positive Selbstbekräftigung"
          positiveAffirmationLabel="So möchte ich heute oder zukünftig sein!"
          positiveAffirmationName="positive"
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
        <EveningRoutine
          kindGestureTitle="Was habe ich heute Gutes für jemanden getan?"
          kindGestureLabel="Kleine oder große Gesten, alles zählt!"
          kindGestureName="kindness"
          positiveResolutionTitle="Was werde ich morgen besser machen?"
          positiveResolutionLabel="Positive Veränderungen – jeden Tag!"
          positiveResolutionName="change"
          positiveExperienceTitle="Tolle Dinge, die ich heute erlebt habe..."
          positiveExperienceLabel1="Erstes Erlebnis"
          positiveExperienceLabel2="Zweites Erlebnis"
          positiveExperienceLabel3="Drittes Erlebnis"
          positiveExperienceName1="experience1"
          positiveExperienceName2="experience2"
          positiveExperienceName3="experience3"
          isEvening={true}
        />
      </Layout>
    </>
  );
}
