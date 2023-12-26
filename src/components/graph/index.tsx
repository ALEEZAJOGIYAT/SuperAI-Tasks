// GraphComponent.tsx
import './style.css'; // Import your Sass file
import ReactEcharts from 'echarts-for-react';

export const GraphComponent = () => {
  const highPerformer = [
    9.00000,
    110000,
    120000,
    130000,
    133000,
    240000,
    138370,
    153000,
    160000,
  ];
  const overAllPerformer = [
    70000,
    0,
    110000,
    120000,
    93600,
    310000,
    108370,
    163000,
    160000,
  ];

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      axisLabel: {
        formatter: '{value}%', // Format x-axis labels as percentages
      },
    },
    yAxis: {
      type: 'category',
      data: [
        'Product',
        'CEO',
        'Marketing',
        'Customer Support',
        'Finance',
        'Marketing',
        'IT',
        'Product',
        'Operations',
      ],
    },
    series: [
      {
        name: 'High Performer',
        type: 'bar',
        data: highPerformer.map((value) => (value / 1000).toFixed(2)), // Converting into percentages 
        itemStyle: {
          normal: {
            color: 'rgb(114 196 237)',
          },
        },
      },
      {
        name: 'OverAll Performer',
        type: 'bar',
        data: overAllPerformer.map((value) => (value / 1000).toFixed(2)), // Convert into percentages 
        itemStyle: {
          normal: {
            color: 'rgb(255, 84, 84)',
          },
        },
      },
    ],
  };

  return (
    <div className="graph-container">
      <h4>Comparison of high performer resignation rates to the overall resignation rates</h4>
      <p>Do high performers resign more often than others</p>
      <ReactEcharts option={option} />
    </div>
  );
};
