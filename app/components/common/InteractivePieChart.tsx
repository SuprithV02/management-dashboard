"use client";

import { Box, useTheme } from "@mui/material";
import { useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import CenterLabel from "./CenterLabel";
import { Props } from "./types";

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

  const activeData = activeIndex !== null ? data[activeIndex] : null;

  const getCellColor = (index: number) =>
    index === 0 ? primaryColor : (secondaryColor ?? theme.palette.grey[300]);

  const getCellStyle = (index: number): React.CSSProperties => ({
    transition: "transform 0.18s ease",
    transform: activeIndex === index ? "translateY(-3px)" : "translateY(0px)",
    cursor: "pointer",
  });

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
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={getCellColor(index)}
                style={getCellStyle(index)}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

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
        <CenterLabel
          activeData={activeData}
          activeIndex={activeIndex}
          defaultValue={data[0].value}
          defaultCenterLabel={defaultCenterLabel}
        />
      </Box>
    </Box>
  );
}
