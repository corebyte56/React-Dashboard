import React from "react";
import Chart from "react-apexcharts";

const QuarterGoalChart = () => {
  const chartOptions = (startAngle, endAngle, value) => ({
    chart: {
      height: 260,
      type: "radialBar",
      toolbar: { show: false },
    },

    series: [value],

    colors: ["#FFCD71"],

    plotOptions: {
      radialBar: {
        startAngle: startAngle,
        endAngle: endAngle,

        hollow: {
          size: "65%", 
        },

        track: {
          background: "#FFF7E8",
        },

        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: "28px",
            fontWeight: 600,
            offsetY: 10, // 
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },

    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100],
      },
    },

    stroke: {
      lineCap: "round", 
    },

    labels: ["Progress"],
  });

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 p-4">
      
    

      <div className="hover:scale-105 transition duration-300">
        <Chart
          options={chartOptions(-90, 90, 50)}
          series={[80]}
          type="radialBar"
          height={260}
        />
      </div>


    </div>
  );
};

export default QuarterGoalChart;