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
} from "@mui/material";

import BoltIcon from "@mui/icons-material/Bolt";
export default function OperationalEfficiency() {
  const theme = useTheme();

  const tatData = [
    { name: "Underwriting", value: 2.4, max: 5 },
    { name: "Policy Issuance", value: 0.8, max: 5 },
    { name: "Claims Adjudication", value: 4.1, max: 5 },
  ];

  const slaData = [
    {
      name: "Customer Support Response",
      percent: 98,
      color: theme.palette.success.main,
    },
    {
      name: "Claim Payment Dispatch",
      percent: 92,
      color: theme.palette.success.main,
    },
    {
      name: "Network Hospital Addition",
      percent: 81,
      color: theme.palette.warning.main,
    },
    {
      name: "Complex Case Resolution",
      percent: 65,
      color: theme.palette.error.main,
    },
  ];

  return (
    <Card elevation={2} sx={{ borderRadius: 3 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2,
          }}
        >
          <BoltIcon
            sx={{
              color: theme.palette.primary.main,
              fontSize: 26,
            }}
          />
          <Typography variant="h6" fontWeight={700}>
            Operational Efficiency
          </Typography>
        </Box>

        {/* Light Grey Divider */}
        <Divider
          sx={{
            mb: 4,
            backgroundColor: "#e5e7eb",
          }}
        />

        <Grid container spacing={4}>
          {/* LEFT SIDE */}
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
                  value={(item.value / item.max) * 100}
                  sx={{
                    height: 6,
                    borderRadius: 5,
                  }}
                />
              </Box>
            ))}
          </Grid>

          {/* RIGHT SIDE */}
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
              {slaData.map((item) => (
                <Grid size={{ xs: 12, sm: 6 }} key={item.name}>
                  <Box
                    sx={{
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 2,
                      p: 2,
                    }}
                  >
                    <Typography variant="caption" color="text.secondary">
                      {item.name}
                    </Typography>

                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{ color: item.color, mt: 0.5 }}
                    >
                      {item.percent}%
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
