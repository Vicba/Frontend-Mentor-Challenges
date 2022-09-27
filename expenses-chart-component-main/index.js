'use strict';

const ctx = document.getElementById('myChart').getContext('2d');

const titleTooltip = () => {
    return ``;
};

const data = {
    labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    datasets: [
        {
            label: '',
            data: [17.45, 39.41, 52.36, 31.07, 23.39, 43.28, 25.28],
            backgroundColor: [
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
            ],
            hoverBackgroundColor: [
                'hsl(10, 100%, 83%)',
                'hsl(10, 100%, 83%)',
                'hsl(10, 100%, 83%)',
                'hsl(10, 100%, 83%)',
                'hsl(10, 100%, 83%)',
                'hsl(10, 100%, 83%)',
            ],
            borderRadius: 4,
            borderWidth: 1,
        },
    ],

    options: {
        plugins: {
            legend: {
                display: false,
                labels: {},
            },
            tooltip: {
                yAlign: 'bottom',
                displayColors: false,
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || '';

                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                            }).format(context.parsed.y);
                        }
                        return label;
                    },
                    title: titleTooltip,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                    borderWidth: 0,
                },
                ticks: {
                    display: false,
                },
            },
            x: {
                grid: {
                    display: false,
                    borderWidth: 0,
                },
                ticks: {
                    font: {
                        family: 'DM Sans',
                    },
                },
                // type: 'time',
                // time: {
                //   unit: 'day',
                // },
            },
        },
    },
};

const myChart = new Chart(document.getElementById('myChart'), {
    type: 'bar',
    data: data,
    options: data.options,
});


// highlightbar
function highLightDay() {
    var today = new Date();
    var day = today.getDay();
    var daylist = ['sun', 'mon', 'tue', 'wed ', 'thu', 'fri', 'sat'];
    let todaysDate = daylist[day];

    const dataDays = data.labels.map((day, index) => {
        if (day === todaysDate) {
            myChart.data.datasets[0].backgroundColor[index] = 'hsl(186, 61%, 68%)';
            myChart.data.datasets[0].hoverBackgroundColor[index] =
                'hsl(186, 61%, 87%)';

            return day;
        }
    });

    return dataDays;
}


highLightDay();