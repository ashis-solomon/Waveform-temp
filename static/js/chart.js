const labels = [
  'Acousticness',
  'Danceability',
  'Energy',
  'Instrumentalness',
  'Liveness',
  'Speechiness',
  'Valence',
];

let temp_RR = [];

for(let i=0; i<labels.length; i++){
  console.log(labels[i])
  temp_RR[i] = localStorage.getItem(`${labels[i]}`.toLowerCase()) * 100;
}

console.log(temp_RR)

var data = {
  labels: labels,
  datasets: [{
    axis: 'y',
    label: 'Value %',
    data: temp_RR,
    fill: false,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

const config = {
  type: 'bar',
  data,
  plugins: [ChartDeferred],
  options: {
    indexAxis: 'y',
    animation: {
      duration: 4000,
    },
    plugins: {
      deferred: {
        xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
        yOffset: '55%', // defer until 50% of the canvas height are inside the viewport
        delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
      }
    }
  }
};

const myChart = new Chart(
  document.getElementById('chartID'),
  config
);
// Chart.register(ChartDeferred);

// function scrollFunction() {
  
// }

// window.onscroll = scrollFunction;