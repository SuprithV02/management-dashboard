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
      percent: data?.slaItems[0]?.percent,
      color: theme.palette.success.main,
    },
    {
      name: "Claim Payment Dispatch",
      percent: data?.slaItems[1]?.percent,
      color: theme.palette.success.main,
    },
    {
      name: "Network Hospital Addition",
      percent: data?.slaItems[2]?.percent,
      color: theme.palette.warning.main,
    },
    {
      name: "Complex Case Resolution",
      percent: data?.slaItems[3]?.percent,
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
