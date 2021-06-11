/* global Chart, axios */
let allData = {};
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

Promise.all([getReact(), getVue(), getAngular(), getEmber(), getSvelte()])
  .then(function (response) {
    // const acct = results[0];
    // const perm = results[1];
    console.log(response);
    var i;
    for (i = 0; i < response.length; i++) {
      console.log(response[i].data.name);
      console.log(response[i].data.subscribers_count);
      console.log(response[i].data.stargazers_count);
      console.log(response[i].data.forks);
      // response.push(allData);
      // console.log(allData);
      // return allData;
    }
  },
    // console.log(getSvelte()),
    function frameworkWatcher(response) {
      console.log(response);
      // let frameworks = ["https://api.github.com/repos/facebook/react", "https://api.github.com/repos/vuejs/vue", "https://api.github.com/repos/angular/angular.js", "https://api.github.com/repos/emberjs/ember.js", "https://api.github.com/repos/sveltejs/svelte"];
      let allData = [];
      // for (let url of frameworks) {
      // let count = [response.data.name, response.data.subscribers_count, response.data.stargazers_count, response.data.forks];
      var frameworkData = {};
      // frameworkData = frameworks;
      // frameworkData = ;
      allData.push(frameworkData);
      console.log("frameworkData");
      return allData;

      // }
    });
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
// }
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: "none",
    datasets: [{
      label: '# of Votes',
      data: [2, 6, 22, 5, 13, 6],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
