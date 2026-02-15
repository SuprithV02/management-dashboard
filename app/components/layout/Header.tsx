"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

interface HeaderProps {
  selectedYear: string;
  onYearChange: (year: string) => void;
}

export default function Header({ selectedYear, onYearChange }: HeaderProps) {
  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        backgroundColor: "#ffffff",
        color: "#111827",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between", py: 1 }}>
          {/* Left Section */}
          <Box>
            <Typography variant="h6" fontWeight={700}>
              Strategic Executive Overview
            </Typography>
            <Typography
              variant="caption"
              sx={{ textTransform: "uppercase", color: "text.secondary" }}
            >
              Health Insurance Division
            </Typography>
          </Box>

          {/* Right Section */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <FormControl size="small">
              <Select
                value={selectedYear} // <-- use controlled value
                onChange={(e) => onYearChange(e.target.value)}
              >
                <MenuItem value="2024">FY 2024</MenuItem>
                <MenuItem value="2023">FY 2023</MenuItem>
                <MenuItem value="2022">FY 2022</MenuItem>
                <MenuItem value="2021">FY 2021</MenuItem>
                <MenuItem value="2020">FY 2020</MenuItem>
              </Select>
            </FormControl>

            {/* <Button
              variant="contained"
              size="small"
              sx={{ textTransform: "none" }}
            >
              Export PDF
            </Button> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
