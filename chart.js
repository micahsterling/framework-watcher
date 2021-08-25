// var myChart2 = new Chart(ctx2, {
//     type: 'bar',
//     // NUMBER_CFG: { count: 3, min: -100, max: 100 }
//     data: {
//       labels: ['Forks', 'Stargazers', 'Subscribers'],
//       datasets: frameworkData
//     },
//     options: {
//       responsive: true,
//       plugins: {
//         legend: {
//           position: 'top',
//         },
//         title: {
//           display: true,
//           text: 'Javascript Famework Data'
//         }
//       }
//     },
//   });

class BarChart {
  chart = null;

  constructor(cxt, chartType,) {
    this.chart = new chart(cxt)
    this.setType(chartType)
  }
  setType(chartType) {
    return this.chart.type = chartType;
  }
  getChart() {
    return this.chart;
  }
}

module.exports = BarChart;

// const chart = new BarChart(5);
// chart.getInteger(); // 2.5
// chart.getInter(); // 1.25