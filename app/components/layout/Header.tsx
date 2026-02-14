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

export default function Header() {
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
              <Select defaultValue="FY 2024 - Q3">
                <MenuItem value="FY 2024 - Q3">FY 2024 - Q3</MenuItem>
                <MenuItem value="FY 2024 - Q2">FY 2024 - Q2</MenuItem>
              </Select>
            </FormControl>

            <FormControl size="small">
              <Select defaultValue="All Products">
                <MenuItem value="All Products">All Products</MenuItem>
                <MenuItem value="Health Plus">Health Plus</MenuItem>
              </Select>
            </FormControl>

            <FormControl size="small">
              <Select defaultValue="All Regions">
                <MenuItem value="All Regions">All Regions</MenuItem>
                <MenuItem value="North">North</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              size="small"
              sx={{ textTransform: "none" }}
            >
              Export PDF
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
