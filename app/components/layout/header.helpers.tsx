import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";

interface HeaderProps {
  selectedYear: string;
  onYearChange: (year: string) => void;
}

const USER = {
  name: "Ajoy Chawla",
  role: "Managing Director",
  division: "Health Insurance Division",
};

const FISCAL_YEARS = ["2025", "2024", "2023", "2022", "2021"];

export function UserInfo() {
  return (
    <Box>
      <Typography variant="h6" fontWeight={700}>
        Welcome, {USER.name}{" "}
        <Box
          component="span"
          sx={{
            fontSize: "0.75rem",
            fontWeight: 500,
            color: "text.secondary",
            ml: 1,
          }}
        >
          {USER.role}
        </Box>
      </Typography>
      <Typography
        variant="caption"
        sx={{ textTransform: "uppercase", color: "text.secondary" }}
      >
        {USER.division}
      </Typography>
    </Box>
  );
}

export function YearSelector({ selectedYear, onYearChange }: HeaderProps) {
  return (
    <FormControl size="small">
      <Select
        value={selectedYear}
        onChange={(e) => onYearChange(e.target.value)}
      >
        {FISCAL_YEARS.map((year) => (
          <MenuItem key={year} value={year}>
            FY {year}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
