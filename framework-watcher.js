/* global Chart, axios */

// Make a request for a user with a given ID
let frameworks = ["https://api.github.com/repos/facebook/react", "https://api.github.com/repos/vuejs/vue", "https://api.github.com/repos/angular/angular.js", "https://api.github.com/repos/emberjs/ember.js", "https://api.github.com/repos/sveltejs/svelte"];

let url = "";
for (let url of frameworks) {
  // console.log(url);

  axios.get(url)
    .then(function (response) {
      console.log("framework");
      // handle success
      // console.log(response.data);
      console.log(response.data.name);
      console.log(response.data.subscribers_count);
      console.log(response.data.stargazers_count);
      console.log(response.data.forks);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
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
