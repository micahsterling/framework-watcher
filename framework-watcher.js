/* global Chart, axios */

function getReact() {
  return axios.get("https://api.github.com/repos/facebook/react");
}
function getVue() {
  return axios.get("https://api.github.com/repos/vuejs/vue");
}
function getAngular() {
  return axios.get("https://api.github.com/repos/angular/angular.js");
}
function getEmber() {
  return axios.get("https://api.github.com/repos/emberjs/ember.js");
}
function getSvelte() {
  return axios.get("https://api.github.com/repos/sveltejs/svelte");
}
var resultElement = document.getElementById('frameworkWatcher');
resultElement.innerHTML = 'hi hi';

Promise.all([getReact(), getVue(), getAngular(), getEmber(), getSvelte()])
  .then(function (response) {
    resultElement.innerHTML = frameworkWatcher(response);

    let frameworkData = {};
    var i;
    for (i = 0; i < response.length; i++) {
      console.log(response[i].data.name);
      frameworkData[response[i].data.name] = { subscribers: response[i].data.subscribers_count, stargazers: response[i].data.stargazers_count, forks: response[i].data.forks };
      // console.log(response[i].data.subscribers_count);
      // console.log(response[i].data.stargazers_count);
      // console.log(response[i].data.forks);
      // response.push(allData);
      // console.log(allData);
    }
    console.log(frameworkData);
    // return frameworkData.subscribers;
  });

let allData = [];
let frameworkName = [];
function frameworkWatcher(response) {
  console.log(response);
  var i;
  for (i = 0; i < response.length; i++) {
    allData.push({
      name: response[i].data.name,
      forks: response[i].data.forks,
      stargazers: response[i].data.stargazers_count,
      subscribers: response[i].data.subscribers_count,
    });

    allData.push(response[i].data.forks);
    allData.push(response[i].data.stargazers_count);
    allData.push(response[i].data.subscribers_count);
  }
  // frameworkData = frameworks;
  // allData.push(frameworkData);


  // function performGetRequest() {
  // var resultElement = document.getElementById('frameworkWatcher');
  // resultElement.innerHTML = '';
  // Make a request for a user with a given ID
  // let frameworks = ["https://api.github.com/repos/facebook/react", "https://api.github.com/repos/vuejs/vue", "https://api.github.com/repos/angular/angular.js", "https://api.github.com/repos/emberjs/ember.js", "https://api.github.com/repos/sveltejs/svelte"];
  // let url = [];
  // for (let url of frameworks) {

  //   axios.get(url)
  //     .then(function (response) {
  //       resultElement.innerHTML = frameworkWatcher(response);
  //       console.log("framework");
  //       // handle success
  // console.log(response.data);
  // let frameworkData = {};
  // for (let frameworkData of response) {
  //   response.data.name, response.data.subscribers_count, response.data.stargazers_count, response.data.forks;
  // }
  // }
  //     })
  //     .catch (function (error) {
  //   // handle error
  //   console.log(error);
  // })
  //     .then(function () {
  //   // always executed
  // });
  //   // }
}
console.log(allData);
console.log(frameworkName);

const ctx2 = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx2, {
  type: 'bar',


  // NUMBER_CFG: { count: 3, min: -100, max: 100 },

  data: {
    labels: ['Forks', 'Stargazers', 'Subscribers'],
    datasets: [
      {
        label: 'Angular.js',
        data: [9, 8, 7,],
        borderColor: 'black',
        backgroundColor: 'red',
      },
      {
        label: 'Ember.js',
        data: [6, 5, 4],
        borderColor: 'black',
        backgroundColor: 'yellow',
      },
      {
        label: 'React',
        data: [5, 3, 5, 7],
        borderColor: 'black',
        backgroundColor: 'rgba(54, 162, 235, 1)'
      },
      {
        label: 'Svelte',
        data: [8, 7, 3],
        borderColor: 'black',
        backgroundColor: 'orange',
      },
      {
        label: 'View.js',
        data: [12, 5, 15,],
        borderColor: 'black',
        backgroundColor: 'purple',
      },
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart'
      }
    }
  },
});

// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ["hi", "hey", "dog", "frog"],
//     datasets: [{
//       label: '# of Votes',
//       data: [0, 1, 2, 3, 4, 5],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)'
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)'
//       ],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });

// const labels = ['hot', 'pot', 'top', 'hop']
// const DATA_COUNT = 2,

