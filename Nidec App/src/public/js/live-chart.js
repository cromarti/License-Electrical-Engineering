function live_graph(param) 
{

var lastResponse;

let config = {

type: 'line',               // 'line' and 'bar' types are supported
    data: {
        datasets: [{
            data: [],            // empty at the beggining
            label: '',
            borderColor: '#009F6B',
            fill: false,
            backgroundColor: '#286090',
            pointRadius: 5,
            pointHoverRadius: 10,
        }]
    },
    options: {
        legend: {
          display: false
        },
        scales: {
            xAxes: [{
                type: 'realtime' ,   // x axis will auto-scroll from right to left
                scaleLabel: {
                    display: true,
                    labelString: 'time',    
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
                    labelString: param,
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

        },
        plugins: {
            streaming: {            // enabled by default
                duration: 20000,    // data in the past 20000 ms will be displayed
                refresh: 1000,      // onRefresh callback will be called every 1000 ms
                delay: 4000,        // delay of 4000 ms, so upcoming values are known before plotting a line

                // a callback to update datasets
                onRefresh: function(chart) {                    

                    jQuery.ajax({
                        type: 'GET',
                        url: '/data',
                        contentType: 'json',
                        success: function(res) {

                            lastResponse = {
                                x: Date.now(),
                                y: res[param]

                            }
                            console.log(Date.now());
                        }

                    })

                    if(typeof lastResponse !== 'undefined') {
                        chart.data.datasets[0].data.push(lastResponse);
                    } else {
                        chart.data.datasets[0].data.push({
                            x: Date.now(),
                            y: 0
                        });
                    }

                }
            }
        }
    }

};

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, config);


}

