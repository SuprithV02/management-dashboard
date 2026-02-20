import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { UserInfo, YearSelector } from "./header.helpers";

interface HeaderProps {
  selectedYear: string;
  onYearChange: (year: string) => void;
}

const APPBAR_SX = {
  backgroundColor: "#ffffff",
  color: "#111827",
  borderBottom: "1px solid #e5e7eb",
};

export default function Header({ selectedYear, onYearChange }: HeaderProps) {
  return (
    <AppBar position="sticky" elevation={1} sx={APPBAR_SX}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between", py: 1 }}>
          <UserInfo />
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <YearSelector
              selectedYear={selectedYear}
              onYearChange={onYearChange}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
