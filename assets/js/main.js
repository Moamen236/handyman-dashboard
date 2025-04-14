
const toggleButton = document.getElementById('toggleButton');
const toggleText = document.getElementById('toggleText');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  toggleText.textContent = toggleButton.classList.contains('active') ? 'ON' : 'OFF';
});


document.querySelectorAll(".toggle-switch").forEach(toggle => {
  toggle.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

var teamAData = [0, 0, 0, 67, 0, 0, 0];

// Generate scatter data: Show only for non-zero values
var scatterData = teamAData.map(value => value > 0 ? value : null);

var options = {
  series: [
    {
      name: 'تقارير',
      type: 'column',
      data: teamAData
    },
    {
      name: 'تقارير',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21]
    },
    {
      name: 'تقارير',
      type: 'scatter',
      data: scatterData // Only non-zero values will have circles
    }
  ],
  chart: {
    height: 350,
    type: 'line',
    stacked: false,
    toolbar: {
      show: false
    }
  },
  colors: ["#356FDB", "#356FDB", "#356FDB"],
  stroke: {
    width: [0, 2, 0],
    curve: 'smooth'
  },
  plotOptions: {
    bar: {
      columnWidth: '25%'
    }
  },
  markers: {
    size: [0, 0, 22],
  },
  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  labels: ['الجمعة', 'الخميس', 'الأربعاء', 'الثلاثاء', 'الإثنين', 'الأحد', 'السبت'],
  xaxis: {
    categories: ['الجمعة', 'الخميس', 'الأربعاء', 'الثلاثاء', 'الإثنين', 'الأحد', 'السبت'],
    reversed: true
  },

  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
      }
    }
  },
  legend: {
    show: false
  },


};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


var options = {
  series: [30, 50, 40, 20],
  labels: [" 30% حي الياسمين", " 50% حي التعاون", "40% حي العقيق", " 20% حي حطين"],
  chart: {
    width: 320,
    type: 'donut',
  },
  colors: ["#FFF4C5", '#A3D8FF', "#356FDB", "#4A8CE7"],

  dataLabels: {
    enabled: false
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        show: false
      }
    }
  }],
  legend: {
    position: 'bottom',
    offsetY: 0,

  }
};

var chart = new ApexCharts(document.querySelector("#chartPie"), options);
chart.render();



var options = {
  series: [67],

  chart: {
    width: 320,
    type: 'radialBar',
    offsetY: -20
  },
  plotOptions: {
    radialBar: {

      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: '20px',
          fontWeight: "bold",
          color: undefined,
          offsetY: 90
        },
        value: {
          show: false  // <-- Hide the percentage value
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91]
    },
  },
  stroke: {
    dashArray: 4
  },
  labels: ['المتوسط 3:30 دقيقة  '],

};

var chart = new ApexCharts(document.querySelector("#chartTime"), options);
chart.render();


var options = {
  series: [70, 20, 10],  // Your three numbers
  chart: {
    type: 'donut',

    height: 265
  },
  colors: ["#356FDB", "#3BCC88", "#ff0000"],
  plotOptions: {
    pie: {
      startAngle: -130,
      endAngle: 130,
      donut: {
        size: '70%',  // Controls the thickness of the "tube"
        labels: {
          show: true,
          total: {
            show: false,

          },

        }
      }
    }
  },
  dataLabels: {
    enabled: false
  },

  legend: {
    position: 'bottom'
  },
  labels: ['70% عملاء راضين جدًا', '20% عملاء راضين', '10% عملاء غير راضين']  // Optional labels for slices
};

var chart = new ApexCharts(document.querySelector("#chartRate"), options);
chart.render();