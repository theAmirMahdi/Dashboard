import { Column } from "@ant-design/charts";

const data = [
  { month: "Jan", visitors: 15000 },
  { month: "Feb", visitors: 10000 },
  { month: "Mar", visitors: 12000 },
  { month: "Apr", visitors: 18000 },
  { month: "May", visitors: 13000 },
  { month: "Jun", visitors: 11000 },
  { month: "Jul", visitors: 14000 },
  { month: "Aug", visitors: 16000 },
  { month: "Sep", visitors: 9000 },
  { month: "Oct", visitors: 10000 },
  { month: "Nov", visitors: 12000 },
  { month: "Dec", visitors: 8000 },
];

const ColumnChart = () => {
  const config = {
    data,
    xField: "month",
    yField: "visitors",
    padding: [10, 10, 50, 30],
    legend: {
      position: "top-left",
    },
    tooltip: {
      title: null,
    },
    xAxis: {
      tickLine: {
        alignTick: false,
      },
    },
    yAxis: {
      label: {
        formatter: (value) => {
          const formattedValue = (value / 1000).toFixed(1) + "k"; // convert to thousands with 1 decimal
          return formattedValue;
        },
      },
    },
    columnStyle: {
      radiusTopLeft: 50,
      radiusTopRight: 50,
    },
  };

  return <Column {...config} />;
};

export default ColumnChart;
