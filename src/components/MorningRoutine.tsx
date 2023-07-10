import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import ListWithHeadline from "./ListWithHeadline";
import TextfieldWithHeadline from "./TextfieldWithHeadline";
import Button from "@mui/material/Button";
import { useState } from "react";
import { MorningUI } from "@/interfaces";

export default function MorningRoutine({
  thankfulTitle,
  thankfulLabel1,
  thankfulLabel2,
  thankfulLabel3,
  thankfulName1,
  thankfulName2,
  thankfulName3,
  isEvening,
  wonderfulDayTitle,
  wonderfulDayLabel,
  wonderfulDayName,
  positiveAffirmationTitle,
  positiveAffirmationLabel,
  positiveAffirmationName,
}: MorningUI) {
  const [morningData, setMorningData] = useState<{}>({});
  console.log(morningData);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    setMorningData(data);
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <LightModeRoundedIcon fontSize="large" htmlColor="#dfb356" />
        <ListWithHeadline
          title={thankfulTitle}
          label1={thankfulLabel1}
          label2={thankfulLabel2}
          label3={thankfulLabel3}
          name1={thankfulName1}
          name2={thankfulName2}
          name3={thankfulName3}
          isEvening={isEvening}
        />
        <TextfieldWithHeadline
          title={wonderfulDayTitle}
          label={wonderfulDayLabel}
          name={wonderfulDayName}
        />
        <TextfieldWithHeadline
          title={positiveAffirmationTitle}
          label={positiveAffirmationLabel}
          name={positiveAffirmationName}
        />
        <Button type="submit" variant="contained">
          Speichern
        </Button>
      </form>
    </>
  );
}
