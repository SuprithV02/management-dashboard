"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Box, Typography, useTheme } from "@mui/material";

interface PieItem {
  name: string;
  value: number;
}

interface Props {
  data: PieItem[];
  primaryColor: string;
  secondaryColor?: string;
  size?: number;
  innerRadius?: number;
  outerRadius?: number;
  defaultCenterLabel?: string;
}

export default function InteractivePieChart({
  data,
  primaryColor,
  secondaryColor,
  size = 130,
  innerRadius = 50,
  outerRadius = 65,
  defaultCenterLabel,
}: Props) {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const handleLeave = () => {
    setActiveIndex(null);
  };

  const activeData = activeIndex !== null ? data[activeIndex] : null;

  return (
    <Box sx={{ width: size, height: size, position: "relative" }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={
                  index === 0
                    ? primaryColor
                    : (secondaryColor ?? theme.palette.grey[300])
                }
                style={{
                  transition: "transform 0.18s ease",
                  transform:
                    activeIndex === index
                      ? "translateY(-3px)"
                      : "translateY(0px)",
                  cursor: "pointer",
                }}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Center Content */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        {activeData ? (
          <>
            <Typography
              variant="body2"
              fontWeight={200}
              fontSize={10}
              sx={{ color: "text.secondary" }}
            >
              {activeData.name}
            </Typography>

            <Typography
              sx={{
                fontWeight: 400,
                fontSize: 20,
                color: activeIndex === 0 ? "primary.main" : "text.primary",
              }}
            >
              {activeData.value}%
            </Typography>
          </>
        ) : (
          <>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 20,
                color: "primary.main",
              }}
            >
              {data[0].value}%
            </Typography>

            {defaultCenterLabel && (
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", mt: 0.5 }}
              >
                {defaultCenterLabel}
              </Typography>
            )}
          </>
        )}
      </Box>
    </Box>
  );
}
