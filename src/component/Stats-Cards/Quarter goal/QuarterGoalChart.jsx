import React from "react";
import Chart from "react-apexcharts";

const QuarterGoalChart = () => {
  const chartOptions = (startAngle, endAngle) => ({
    chart: {
      height: 280,
      type: "radialBar",
    },
    series: [67],
    colors: ["#FFCD71"],
    plotOptions: {
      radialBar: {
        startAngle: startAngle,
        endAngle: endAngle,
        track: {
          background: "#333",
          startAngle: startAngle,
          endAngle: endAngle,
          hollow: {
      size: "70%",
    },
    track: {
      background: "#333",
        },
        dataLabels: {
          name: { show: false },
          value: { fontSize: "30px", show: true },
        },
      },
    },
    
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: ["#FFCD71"],
        stops: [0, 100],
      },
    },
},
    stroke: { lineCap: "round" },
    labels: ["Progress"],
  });

  return (
    <div className="flex gap-6">
      <Chart
        options={chartOptions(-90, 90)}
        series={[80]}
        type="radialBar"
        height={280}
      />
    </div>
  );
};

export default QuarterGoalChart;
