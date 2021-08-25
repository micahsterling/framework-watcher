// var myChart = new Chart(ctx, {
//   type: 'bar',
//   // NUMBER_CFG: { count: 3, min: -100, max: 100 }
//   data: {
//     labels: ['Forks', 'Stargazers', 'Subscribers'],
//     datasets: frameworkData
//   },
//   options: {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Javascript Famework Data'
//       }
//     }
//   },
// });




// function options() {
//   responsive: boolean;
//     legendPosition: string,
//       titleDisplayed: boolean,
//         titleContent: string
// }

// class BarChart {
//   chart = null;

//   constructor(ctx, chartType, options) {
//     this.chart = new Chart(ctx);
//     // console.log(chart.type); // null/undefined/throw err
//     this.setType(chartType);
//     // console.log(chart.type); // 'bar'
//     this.setOptions(options)
//   }

//   setType(chartType) {
//     this.chart.type = chartType;
//   }
//   setOptions(options) {

//   }
//   getChart() {
//     return this.chart;
//   }

// }

/* global Chart, axios */
const borderColor = 'black';

const repoData = {
  react: {
    function: getReact(),
    // function: async () => await axios.get("https://api.github.com/repos/facebook/react"),
    label: "React",
    color: "grey"
  },
  ember: {
    function: getEmber(),
    label: "Ember.js",
    color: "orange"
  },
  angular: {
    function: getAngular(),
    label: "Angular.js",
    color: "red",
  },
  vue: {
    function: getVue(),
    label: "Vue.js",
    color: "green"
  },
  svelte: {
    function: getSvelte(),
    label: "Svelte",
    color: "pink"
  }
};

async function getReact() {
  return await axios.get("https://api.github.com/repos/facebook/react");
}
async function getVue() {
  return await axios.get("https://api.github.com/repos/vuejs/vue");
}
async function getAngular() {
  return await axios.get("https://api.github.com/repos/angular/angular.js");
}
async function getEmber() {
  return await axios.get("https://api.github.com/repos/emberjs/ember.js");
}
async function getSvelte() {
  return await axios.get("https://api.github.com/repos/sveltejs/svelte");
}
var resultElement = document.getElementById('frameworkWatcher');

function pullReactData(key, data) {
  let localData = {
    label: repoData[key].label,
    backgroundColor: repoData[key].color,
    borderColor: borderColor,
    data: [data.forks, data.stargazers_count, data.subscribers_count]
  };
  // let d = {
  //   "forks": data.forks,
  //   "stars": data.stargazers_count,
  //   "subs": data.subscribers_count
  // };
  return localData;
}
// [
//   {
//     label: 'Angular.js',
//     data: angular,
//     borderColor: 'black',
//     backgroundColor: 'red',
//   },
//   {
//     label: 'Ember.js',
//     data: Object.values(frameworkData['ember']),
//     // data: [6, 5, 4],
//     borderColor: 'black',
//     backgroundColor: 'yellow',
//   },
//   {
//     label: 'React',
//     data: Object.values(frameworkData['react']),
//     // data: [5, 3, 5, 7],
//     borderColor: 'black',
//     backgroundColor: 'rgba(54, 162, 235, 1)'
//   },
//   {
//     label: 'Svelte',
//     data: [8, 7, 3],
//     borderColor: 'black',
//     backgroundColor: 'orange',
//   },
//   {
//     label: 'View.js',
//     data: [12, 5, 15,],
//     borderColor: 'black',
//     backgroundColor: 'purple',
//   },
// ]
(async () => {
  let frameworkData = [];
  // Object.keys(repoData) === ['react', 'ember', 'angular', 'vue', 'svelte']
  const repoDataKeys = Object.keys(repoData);
  for (let i = 0; i < repoDataKeys.length; i++) {
    let currentKey = repoDataKeys[i];
    let currentData = await repoData[currentKey].function;
    let currentRepoData = pullReactData(currentKey, currentData.data);
    frameworkData.push(currentRepoData);
  }
  console.log("Framework Data: ", frameworkData);

  const ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    // NUMBER_CFG: { count: 3, min: -100, max: 100 }
    data: {
      labels: ['Forks', 'Stargazers', 'Subscribers'],
      datasets: frameworkData
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Javascript Famework Data'
        }
      }
    },
  });




  // console.log("Function Test: ", await functions.react);
  // let react = await getReact();
  // console.log("React: ", react);
  // let frameworkData = {};
  // let reactData = await getReact();
  // frameworkData['react'] = pullReactData(reactData.data);
  // console.log("Framework data react: ", frameworkData['react']);
  // Promise.all([await getReact(), await getVue(), await getAngular(), await getEmber(), await getSvelte()])
  //   .then(function (response) {
  //     resultElement.innerHTML = frameworkWatcher(response);

  //     // let frameworkData = [];

  //     // var i;
  //     for (let i = 0; i < response.length; i++) {
  //       // console.log("Data Name: ", response[i].data.name);
  //       let responseName = response[i].data.name;
  //       let forks = response[i].data.forks;
  //       let stars = response[i].data.stargazers_count;
  //       let subscribers = response[i].data.subscribers_count;
  //       frameworkData[responseName] = {
  //         forks: forks,
  //         stars: stars,
  //         subscribers: subscribers
  //       };
  //       // frameworkData[response[i].data.name] = [
  //       //   response[i].data.forks,
  //       //   response[i].data.stargazers_count,
  //       //   response[i].data.subscribers_count,
  //       // ];

  //       // frameworkData[response[i].data.name] = { subscribers: response[i].data.subscribers_count, stargazers: response[i].data.stargazers_count, forks: response[i].data.forks };
  //       // console.log(response[i].data.subscribers_count);
  //       // console.log(response[i].data.stargazers_count);
  //       // console.log(response[i].data.forks);
  //       // response.push(allData);
  //       // console.log(allData);
  //     }
  //     // console.log(frameworkData);
  //     // Promise.resolve(frameworkData);
  //     // return frameworkData.subscribers;
  //   });
  // console.log("DATADATA: ", frameworkData);
  // var angular = [20, 30, 15];
  // console.log(allData);


  // const ctx = document.getElementById('myChart').getContext('2d');
  // let myChart = new BarChart(ctx, 'bar');

})();


