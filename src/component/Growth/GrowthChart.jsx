import React from "react";
import Chart from "react-apexcharts";

const GrowthChart = () => {
  const options = {
    chart: {
      height: 280,
      type: "area"
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
    },
    xaxis: {
      categories: [
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022'
      ]
    }
  };

  const series = [
    {
      name: "Series 1",
      data: [0, '10k', '50k', '20k', '100k']
    }
  ];

  return (
    <div className="bg-white p-4 rounded-2xl">
      <Chart options={options} series={series} type="area" height={280} />
    </div>
  );
};

export default GrowthChart;