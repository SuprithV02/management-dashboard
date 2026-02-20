"use client";

import { useState } from "react";
import { Box, Container } from "@mui/material";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import {
  DEFAULT_YEAR,
  useDashboardData,
} from "./components/Dashboard/DashboardPage.helpers";
import {
  KpiGrid,
  SectionsGrid,
} from "./components/Dashboard/Dashboard.components";

export default function DashboardPage() {
  const [selectedYear, setSelectedYear] = useState<string>(DEFAULT_YEAR);
  const data = useDashboardData(selectedYear);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f9fafb",
      }}
    >
      <Header selectedYear={selectedYear} onYearChange={setSelectedYear} />

      <Box sx={{ flex: 2, overflowY: "auto" }}>
        <Container maxWidth="xl" sx={{ py: 4 }}>
          <KpiGrid kpis={data?.kpis} />
          <SectionsGrid data={data} />
        </Container>
      </Box>

      <Box sx={{ borderTop: "1px solid #e5e7eb", backgroundColor: "#fff" }}>
        <Footer />
      </Box>
    </Box>
  );
}
