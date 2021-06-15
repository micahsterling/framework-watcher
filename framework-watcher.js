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
// function performGetRequest() {
var resultElement = document.getElementById('frameworkWatcher');
resultElement.innerHTML = '';

Promise.all([getReact(), getVue(), getAngular(), getEmber(), getSvelte()])
  .then(function (response) {
    resultElement.innerHTML = frameworkWatcher(response);
    // const acct = results[0];
    // const perm = results[1];
    // console.log(response);
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
  });
// }

let allData = [];
let frameworkName = [];
function frameworkWatcher(response) {
  console.log(response);
  let frameworkData = {};
  var i;
  for (i = 0; i < response.length; i++) {
    // allData.push(frameworkData);
    // allData.push({
    //   name: response[i].data.name,
    //   subscribers: response[i].data.subscribers_count,
    //   stargazers: response[i].data.stargazers_count,
    //   forks: response[i].data.forks,
    // });
    frameworkName.push(response[i].data.name);
    allData.push(response[i].data.subscribers_count);
    allData.push(response[i].data.stargazers_count);
    allData.push(response[i].data.forks);
  }
  // let count = [response.data.name, response.data.subscribers_count, response.data.stargazers_count, response.data.forks];
  // frameworkData = frameworks;
  // allData.push(frameworkData);
  console.log("frameworkData");
  console.log(allData);
  return allData;


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

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: frameworkName,
    datasets: [{
      label: '# of Votes',
      data: allData,
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
