
 var options = {
  series: [{
  type: 'column',
  data: [140, 305, 113, 201, 120, 257, 160, 140, 305, 113, 201, 120, 257]
}, 
{
  type: 'line',
  data: [230, 142, 135, 227, 103, 122, 216, 230, 142, 135, 227, 103, 122]
}],
  chart: {
  height: 260,
  type: 'line',
  toolbar: {
      show: false
  }
},
plotOptions: {
  bar: {
      horizontal: false,
      columnWidth: '30%',
  },
},
stroke: {
  width: [0, 2],
},

dataLabels: {
  enabled: true,
  enabledOnSeries: [1],
  style: {
    colors: ['rgba(255, 255, 255, .6)'],
  },
  background: {
    enabled: true,
    foreColor: '#b2bdcc',
    padding: 4,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#b2bdcc',
    opacity: 0.9,
  },
},
colors: ["#a4b1c3", "#6f7b8b"],
xaxis: {
  categories: ['Sun', 'Mon', 'Tue', 'Wed', 'thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'thu', 'Fri'],
},
grid: {
      row: {
          colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.2,           
      },
      strokeDashArray: 2.5,
    },
};


var chartMain = new ApexCharts(document.querySelector("#ana_dash_1"), options);
chartMain.render();


var dash_spark_1 = {
    
  chart: {
      type: 'area',
      height: 50,
      sparkline: {
          enabled: true
      },
  },
  stroke: {
      curve: 'smooth',
      width: 2
    },
  fill: {
      opacity: 1,
      gradient: {
        shade: '#2c77f4',
        type: "horizontal",
        shadeIntensity: 0.5,
        inverseColors: true,
        opacityFrom: 0.1,
        opacityTo: 0.1,
        stops: [0, 80, 100],
        colorStops: []
    },
  },
  series: [{
    data: [4, 8, 5, 10, 4, 16, 5, 11, 6, 11, 30, 10, 13, 4, 6, 3, 6]
  }],
  yaxis: {
      min: 0
  },
  colors: ['rgba(252, 122, 49, .1)'],
  tooltip: {
    show: false,
  }
}
new ApexCharts(document.querySelector("#dash_spark_1"), dash_spark_1).render();

var dash_spark_2 = {
    
  chart: {
      type: 'area',
      height: 50,
      sparkline: {
          enabled: true
      },
  },
  stroke: {
      curve: 'smooth',
      width: 2
    },
  fill: {
      opacity: 1,
      gradient: {
        shade: '#2c77f4',
        type: "horizontal",
        shadeIntensity: 0.5,
        inverseColors: true,
        opacityFrom: 0.1,
        opacityTo: 0.1,
        stops: [0, 80, 100],
        colorStops: []
    },
  },
  series: [{
    data: [4, 8, 5, 10, 4, 16, 5, 11, 6, 11, 30, 10, 13, 4, 6, 3, 6]
  }],
  yaxis: {
      min: 0
  },
  colors: ['rgba(34, 183, 131, .1)'],
  tooltip: {
    show: false,
  }
}
new ApexCharts(document.querySelector("#dash_spark_2"), dash_spark_2).render();


var dash_spark_3 = {
    
  chart: {
      type: 'area',
      height: 50,
      sparkline: {
          enabled: true
      },
  },
  stroke: {
      curve: 'smooth',
      width: 2
    },
  fill: {
      opacity: 1,
      gradient: {
        shade: '#2c77f4',
        type: "horizontal",
        shadeIntensity: 0.5,
        inverseColors: true,
        opacityFrom: 0.1,
        opacityTo: 0.1,
        stops: [0, 80, 100],
        colorStops: []
    },
  },
  series: [{
    data: [4, 8, 5, 10, 4, 16, 5, 11, 6, 11, 30, 10, 13, 4, 6, 3, 6]
  }],
  yaxis: {
      min: 0
  },
  colors: ['rgba(253, 60, 151, .1)'],
  tooltip: {
    show: false,
  }
}
new ApexCharts(document.querySelector("#dash_spark_3"), dash_spark_3).render();

var dash_spark_4 = {
    
  chart: {
      type: 'area',
      height: 50,
      sparkline: {
          enabled: true
      },
  },
  stroke: {
      curve: 'smooth',
      width: 2
    },
  fill: {
      opacity: 1,
      gradient: {
        shade: '#2c77f4',
        type: "horizontal",
        shadeIntensity: 0.5,
        inverseColors: true,
        opacityFrom: 0.1,
        opacityTo: 0.1,
        stops: [0, 80, 100],
        colorStops: []
    },
  },
  series: [{
    data: [4, 8, 5, 10, 4, 16, 5, 11, 6, 11, 30, 10, 13, 4, 6, 3, 6]
  }],
  yaxis: {
      min: 0
  },
  colors: ['rgba(23, 97, 253, .1)'],
  tooltip: {
    show: false,
  }
}
new ApexCharts(document.querySelector("#dash_spark_4"), dash_spark_4).render();

// //Device-widget

 
var options = {
  chart: {
      height: 255,
      type: 'donut',
  }, 
  plotOptions: {
    pie: {
      donut: {
        size: '75%'
      }
    }
  },
  dataLabels: {
    enabled: false,
  },

  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
 
  series: [50, 25, 25,],
  legend: {
    show: true,
    position: 'bottom',
    horizontalAlign: 'center',
    verticalAlign: 'middle',
    floating: false,
    fontSize: '13px',
    offsetX: 0,
    offsetY: 0,
  },
  labels: [ "Info Disclosures","Leaked Cred", "Sensitive Files" ],
  colors: ["#2a76f4","rgba(42, 118, 244, .5)","rgba(42, 118, 244, .18)"],
 
  responsive: [{
      breakpoint: 600,
      options: {
        plotOptions: {
            donut: {
              customScale: 0.2
            }
          },        
          chart: {
              height: 240
          },
          legend: {
              show: false
          },
      }
  }],
  tooltip: {
    y: {
        formatter: function (val) {
            return   val + " %"
        }
    }
  }
  
}

var chart = new ApexCharts(
  document.querySelector("#ana_device"),
  options
);
chart.render();

var options = {
  series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
  chart: {
  type: 'polarArea',
  width: 380,
  },
  stroke: {
  colors: ['#fff']
  },
  fill: {
  opacity: 0.8
  },
  labels: [
  'Email',
  'Network',
  'AppSec',
  'DNS',
  'SCS',
  'CR',
  'AI',
  'InfoD',
  'Cloud'
  ],
  responsive: [{
  breakpoint: 480,
  options: {
  chart: {
  width: 200
  },
  legend: {
  position: 'bottom'
  }
  }
  }]
  };

var chart = new ApexCharts(document.querySelector("#polar_Area_1"), options);
chart.render();

var options = {
  series: [{
    type: 'column',
    name: 'Findings',
    data: [678, 529, 433, 320, 489, 687, 898, 114, 157, 544, 982, 487, 189]
  }, {
    name: 'Critical',
    type: 'line',
    data: [12, 15, 8, 11, 9, 14, 5, 7, 13, 16, 10, 6, 18]
  }, {
    name: 'High',
    type: 'line',
    data: [40, 35, 20, 42, 45, 60, 10, 12, 40, 65, 38, 40]
  }, {
    name: 'Medium',
    type: 'line',
    data: [140, 120, 100, 130, 170, 200, 40, 50, 150, 220, 130, 60, 169]
  }, {
    name: 'Low',
    type: 'line',
    data: [337, 278, 192, 307, 363, 528, 59, 90, 341, 577, 309, 111, 171]
  }],
  chart: {
    height: 260,
    type: 'line',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '30%',
    },
  },
  stroke: {
    width: [2, 2, 2, 2, 2],
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1],
    style: {
      colors: ['rgba(255, 255, 255, .6)'],
    },
    background: {
      enabled: true,
      foreColor: '#b2bdcc',
      padding: 4,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: '#b2bdcc',
      opacity: 0.9,
    },
  },
  colors: ["#a4b1c3", "#6f7b8b"],
  xaxis: {
    categories: ['SPF', 'DMARC', 'DKIM', 'BiMi', 'Ports', 'Cookie', 'ID', 'Malware', 'Botnet', 'DNS', 'TLS/SSL', 'LC', 'DT'],
  },
  grid: {
    row: {
      colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.2,
    },
    strokeDashArray: 2.5,
  },
  customColors: {
    Critical: '#FF0000', // Red
    High: '#FFA500', // Orange
    Medium: '#FFFF00', // Yellow
    Low: '#008000' // Green
  }
};

// Dynamically assign colors based on risk levels
options.series.forEach((series) => {
  if (series.name === 'Critical') {
    series.color = options.customColors.Critical;
  } else if (series.name === 'High') {
    series.color = options.customColors.High;
  } else if (series.name === 'Medium') {
    series.color = options.customColors.Medium;
  } else if (series.name === 'Low') {
    series.color = options.customColors.Low;
  }
});

var chartMain = new ApexCharts(document.querySelector("#analytic_dash1"), options);
chartMain.render();


var options = {
  chart: {
      height: 350,
      type: 'radialBar',
  },
  plotOptions: {
      radialBar: {
        track: {
            background: '#b9c1d4',
            opacity: 0.5,            
          },
          dataLabels: {
              name: {
                  fontSize: '22px',
              },
              value: {
                  fontSize: '16px',
                  color: '#8997bd',
              },
              total: {
                  show: true,
                  label: 'Total',
                  color: '#8997bd',
                  formatter: function (w) {
                      // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                      return 249
                  }
              }
          }
      }
  },
  series: [83, 55, 67, 43],
  labels: ['ID', 'Leak Cred', 'SI', 'Mentions'],
  
}

var chart = new ApexCharts(
  document.querySelector("#apex_radialbar2"),
  options
);

chart.render();
