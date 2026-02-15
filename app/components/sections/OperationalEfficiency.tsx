"use client";

import {
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  useTheme,
  Grid,
  Divider,
  alpha,
} from "@mui/material";

import BoltIcon from "@mui/icons-material/Bolt";

export default function OperationalEfficiency({ data }: any) {
  const theme = useTheme();

  const tatData = [
    {
      name: "Underwriting",
      value: data?.turnaroundTime[0]?.benchmark || 0,
      max: data?.turnaroundTime[0]?.days || 0,
    },
    {
      name: "Policy Issuance",
      value: data?.turnaroundTime[1]?.benchmark || 0,
      max: data?.turnaroundTime[1]?.days || 0,
    },
    {
      name: "Claims Adjudication",
      value: data?.turnaroundTime[2]?.benchmark || 0,
      max: data?.turnaroundTime[2]?.days || 0,
    },
  ];

  const slaData = [
    {
      name: "Customer Support Response",
      percent: data?.slaItems[0]?.percent || 0,
    },
    {
      name: "Claim Payment Dispatch",
      percent: data?.slaItems[1]?.percent || 0,
    },
    {
      name: "Network Hospital Addition",
      percent: data?.slaItems[2]?.percent || 0,
    },
    {
      name: "Complex Case Resolution",
      percent: data?.slaItems[3]?.percent || 0,
    },
  ];

  // Function to get darker SLA color
  const getSLAColor = (percent: number) => {
    if (percent > 90)
      return "#15803d"; // okayish green
    else if (percent >= 70)
      return "#b45309"; // okayish amber
    else return "#b91c1c"; // okayish red
  };

  return (
    <Card elevation={2} sx={{ borderRadius: 3 }}>
      <CardContent>
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          <BoltIcon sx={{ color: theme.palette.primary.main, fontSize: 26 }} />
          <Typography variant="h6" fontWeight={700}>
            Operational Efficiency
          </Typography>
        </Box>

        {/* Divider */}
        <Divider sx={{ mb: 4, backgroundColor: "#e5e7eb" }} />

        <Grid container spacing={4}>
          {/* LEFT SIDE: Turnaround Time */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="subtitle2"
              fontWeight={600}
              color="text.secondary"
              mb={3}
            >
              TURNAROUND TIME (DAYS)
            </Typography>

            {tatData.map((item) => (
              <Box key={item.name} mb={3}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="body2">{item.name}</Typography>
                  <Typography variant="body2" fontWeight={600}>
                    {item.value} Days
                  </Typography>
                </Box>

                <LinearProgress
                  variant="determinate"
                  value={item.max ? (item.value / item.max) * 100 : 0}
                  sx={{ height: 6, borderRadius: 5 }}
                />
              </Box>
            ))}
          </Grid>

          {/* RIGHT SIDE: SLA Compliance */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="subtitle2"
              fontWeight={600}
              color="text.secondary"
              mb={3}
            >
              SLA COMPLIANCE STATUS
            </Typography>

            <Grid container spacing={2}>
              {slaData.map((item) => {
                const color = getSLAColor(item.percent);
                return (
                  <Grid size={{ xs: 12, sm: 6 }} key={item.name}>
                    <Box
                      sx={{
                        borderRadius: 2,
                        p: 2,
                        backgroundColor: color,
                        transition: "background-color 0.3s",
                      }}
                    >
                      <Typography
                        variant="caption"
                        color="rgba(255,255,255,0.8)"
                        sx={{ fontWeight: 500 }}
                      >
                        {item.name}
                      </Typography>

                      <Typography
                        variant="h6"
                        fontWeight={700}
                        sx={{ color: "#fff", mt: 0.5 }}
                      >
                        {item.percent}%
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
