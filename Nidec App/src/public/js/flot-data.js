function graph(data) 
{
let config = {
    type: 'line',
    data: {
        labels: '',
        datasets: [{
            label: null,
            data: '',
            fill: false,
            backgroundColor: 'blue',
            borderColor: 'blue',
            pointRadius: 5,
            pointHoverRadius: 10,
        }]
    },
    options: {
        responsive: true,
        title:{
            display:true,
        },
        legend: {
          display: false
        },

        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: '',
                    fontColor: "#009F6B",
                    fontSize: 18,
                    fontFamily: "fantasy",
                },
                ticks: {
                fontSize: 14,
                fontFamily: "fantasy",
                fontColor: "#336B87",
                },
                 gridLines: {
                    color: "#588133",
                    lineWidth: 1
                 },
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: '',
                    fontColor: "#009F6B",
                    fontSize: 18,
                    fontFamily: "fantasy",
                },
                ticks: {
                fontSize: 14,
                fontFamily: "fantasy",
                fontColor: "#336B87",
                },
                gridLines: {
                    color: "#588133",
                    lineWidth: 1
                 },
            }]
        },
        labels: {
      boxWidth: 80,
      fontColor: 'white',
      strokeColor: 'rgb(244, 66, 66)',
    }
    }
};
        config.data.labels = data.xAxeValue.slice(-200);
        config.data.datasets[0].data = data.yAxeValue.slice(-200);
        config.options.scales.xAxes[0].scaleLabel.labelString = data.xAxeName;
        config.options.scales.yAxes[0].scaleLabel.labelString = data.yAxeName;
        
        var ctx = document.getElementById(data.canvasID).getContext("2d");
        chart = window.myLine = new Chart(ctx, config);   
        return window.myLine;
}

