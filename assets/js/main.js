document.addEventListener("DOMContentLoaded", function () {
    const priceFilter = document.getElementById("price-filter");
    const serviceFilter = document.getElementById("service-filter");
    const statusFilter = document.getElementById("status-filter");
    const tableRows = document.querySelectorAll("#tech-companies-1 tbody tr");

    function filterTable() {
        const priceValue = priceFilter.value;
        const serviceValue = serviceFilter.value;
        const statusValue = statusFilter.value;

        tableRows.forEach(row => {
            const priceText = row.cells[7].textContent.trim(); // Get price from 8th column (index 7)
            const serviceText = row.cells[3].textContent.trim(); // Get service from 4th column (index 3)
            const statusText = row.cells[6].textContent.trim(); // Get status from 7th column (index 6)

            const priceNumber = parseInt(priceText.replace(/[^0-9]/g, "")) || 0;
            const matchesPrice = priceValue === "" || priceNumber <= parseInt(priceValue);
            const matchesService = serviceValue === "" || serviceText === serviceValue;
            const matchesStatus = statusValue === "" || statusText === statusValue;

            if (matchesPrice && matchesService && matchesStatus) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    }

    // priceFilter.addEventListener("change", filterTable);
    // serviceFilter.addEventListener("change", filterTable);
    // statusFilter.addEventListener("change", filterTable);
});

    // document.addEventListener("DOMContentLoaded", function () {
    //     let rowsPerPage = 10;
    //     let table = document.getElementById("tech-companies-1");
    //     let tbody = table.querySelector("tbody");
    //     let rows = tbody.querySelectorAll("tr");
    //     let totalPages = Math.ceil(rows.length / rowsPerPage);
    //     let paginationContainer = document.querySelector(".pagination");

    //     function showPage(page) {
    //         let start = (page - 1) * rowsPerPage;
    //         let end = start + rowsPerPage;

    //         rows.forEach((row, index) => {
    //             row.style.display = (index >= start && index < end) ? "" : "none";
    //         });

    //         updatePagination(page);
    //     }

    //     function updatePagination(activePage) {
    //         paginationContainer.innerHTML = "";

    //         let prevBtn = `<li class="page-item ${activePage === 1 ? 'disabled' : ''}">
    //                         <a href="#" class="page-link" data-page="${activePage - 1}">
    //                             <i class="mdi mdi-chevron-right"></i>
    //                         </a>
    //                       </li>`;
    //         paginationContainer.innerHTML += prevBtn;

    //         for (let i = 1; i <= totalPages; i++) {
    //             let activeClass = (i === activePage) ? "active" : "";
    //             paginationContainer.innerHTML += `<li class="page-item ${activeClass}">
    //                                                 <a href="#" class="page-link" data-page="${i}">${i}</a>
    //                                               </li>`;
    //         }

    //         let nextBtn = `<li class="page-item ${activePage === totalPages ? 'disabled' : ''}">
    //                         <a href="#" class="page-link" data-page="${activePage + 1}">
    //                             <i class="mdi mdi-chevron-left"></i>
    //                         </a>
    //                       </li>`;
    //         paginationContainer.innerHTML += nextBtn;

    //         document.querySelectorAll(".page-link").forEach(link => {
    //             link.addEventListener("click", function (e) {
    //                 e.preventDefault();
    //                 let newPage = parseInt(this.getAttribute("data-page"));
    //                 if (newPage >= 1 && newPage <= totalPages) {
    //                     showPage(newPage);
    //                 }
    //             });
    //         });
    //     }

    //     showPage(1); // Show first page initially
    // });


    // document.addEventListener("DOMContentLoaded", function () {
    //     const rowsPerPageSelect = document.getElementById("rowsPerPage");
    //     const table = document.getElementById("tech-companies-1");
    //     const tbody = table.querySelector("tbody");
    //     const rows = Array.from(tbody.querySelectorAll("tr"));
        
    //     function updateTable() {
    //         let rowsPerPage = parseInt(rowsPerPageSelect.value, 10);
            
    //         rows.forEach((row, index) => {
    //             if (index < rowsPerPage) {
    //                 row.style.display = "";
    //             } else {
    //                 row.style.display = "none";
    //             }
    //         });
    //     }
        
    //     rowsPerPageSelect.addEventListener("change", updateTable);
        
    //     // Initial load
    //     updateTable();
    // });


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
  colors: ["#FFF4C5" , '#A3D8FF', "#356FDB" , "#4A8CE7"], 

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














   


