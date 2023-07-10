import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";
import TextfieldWithHeadline from "./TextfieldWithHeadline";
import ListWithHeadline from "./ListWithHeadline";
import Button from "@mui/material/Button";
import { useState } from "react";
import { EveningUI } from "@/interfaces";

export default function EveningRoutine({
  kindGestureTitle,
  kindGestureLabel,
  kindGestureName,

  positiveResolutionTitle,
  positiveResolutionLabel,
  positiveResolutionName,

  positiveExperienceTitle,
  positiveExperienceLabel1,
  positiveExperienceLabel2,
  positiveExperienceLabel3,
  positiveExperienceName1,
  positiveExperienceName2,
  positiveExperienceName3,
  isEvening,
}: EveningUI) {
  const [eveningData, setEveningData] = useState<{}>({});
  console.log(eveningData);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    setEveningData(data);
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <ModeNightRoundedIcon htmlColor="#77a0d2" fontSize="large" />
        <TextfieldWithHeadline
          title={kindGestureTitle}
          label={kindGestureLabel}
          name={kindGestureName}
        />
        <TextfieldWithHeadline
          title={positiveResolutionTitle}
          label={positiveResolutionLabel}
          name={positiveResolutionName}
        />
        <ListWithHeadline
          title={positiveExperienceTitle}
          label1={positiveExperienceLabel1}
          label2={positiveExperienceLabel2}
          label3={positiveExperienceLabel3}
          name1={positiveExperienceName1}
          name2={positiveExperienceName2}
          name3={positiveExperienceName3}
          isEvening={isEvening}
        />
        <Button type="submit" variant="contained">
          Speichern
        </Button>
      </form>
    </>
  );
}
