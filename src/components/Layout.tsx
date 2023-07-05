import { Container } from "@mui/material";

export default function Layout({
  maxWidth,
  children,
}: {
  maxWidth: "xs" | "sm" | "md" | "lg" | "xl" | false;
  children?: React.ReactNode;
}) {
  return (
    <Container
      maxWidth={maxWidth}
      sx={{ bgcolor: "white", borderRadius: "5px" }}
    >
      {children}
    </Container>
  );
}
