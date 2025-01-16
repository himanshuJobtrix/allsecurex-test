/**
 * Theme: Unikit - Responsive Bootstrap 5 Admin Dashboard
 * Author: Mannatthemes
 * Analytics Customers Js
 */


 
var options = {
  chart: {
    height: 375,
    type: 'area',
    toolbar: {
      show: false
    },
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350
      }
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function(val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ["#9fc5e8"]
    }
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  series: [{
    name: 'Probability',
    data: [80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 18, 15, 12]
  }],
  xaxis: {
    categories: ['Phishing', 'Ransomware', 'SQLInj', 'XSS', 'DoS', 'Malware', 'MITM', 'PwdCrack', 'Insider ', 'BEC', 'SCA', 'Cloud', 'PrvAcces', 'Zero Day', 'APT'],
    axisBorder: {
      show: true,
      color: '#bec7e0',
    },
    axisTicks: {
      show: true,
      color: '#bec7e0',
    },
  },
  yaxis: {
    title: {
      text: 'Probability (%)',
    },
    min: 0,
    max: 100,
    tickAmount: 10
  },
  grid: {
    row: {
      colors: ['transparent', 'transparent'],
      opacity: 0.2
    },
    strokeDashArray: 3.5,
  },
  responsive: [{
    breakpoint: 600,
    options: {
      chart: {
        toolbar: {
          show: false
        }
      },
      legend: {
        show: false
      },
    }
  }],
  colors: ['#a4b1c3'],
  legend: {
    show: true,
    position: 'bottom',
    horizontalAlign: 'center',
    fontSize: '14px',
    markers: {
      width: 20,
      height: 20,
      radius: 10
    }
  }
}

var chart = new ApexCharts(
  document.querySelector("#apex_line1"),
  options
);




var options5 = {
  series: [{
    name: 'New Visitors',
    data: [68, 44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
      name: 'Unique Visitors',
      data: [51, 76, 85, 101, 98, 87, 105, 91, 114, 94]
  },],

  chart: {
  type: 'bar',
  width: 200,
  height: 35,
  sparkline: {
    enabled: true
  }
},
colors: ["#4d79f6", "#e0e7fd"],
plotOptions: {
  bar: {
    columnWidth: '50%'
  }
},
labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
xaxis: {
  crosshairs: {
    width: 2
  },
},
tooltip: {
  fixed: {
    enabled: false
  },
  x: {
    show: false
  },
  y: {
    title: {
      formatter: function (seriesName) {
        return ''
      }
    }
  },
  marker: {
    show: false
  }
}
};

var chart5 = new ApexCharts(document.querySelector("#bar-1"), options5);


var options7 = {
  series: [45],
  chart: {
  type: 'radialBar',
  width: 50,
  height: 50,
  sparkline: {
    enabled: true
  }
},
dataLabels: {
  enabled: false
},
plotOptions: {
  radialBar: {
    hollow: {
      margin: 0,
      size: '50%'
    },
    track: {
      margin: 0
    },
    dataLabels: {
      show: false
    }
  }
}
};

var chart7 = new ApexCharts(document.querySelector("#radialBar-1"), options7);


var options1 = {
  series: [{
  data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
}],
  chart: {
  type: 'line',
  width: 200,
  height: 35,
  sparkline: {
    enabled: true
  }
},
stroke: {
  show: true,
  curve: 'smooth',
  width: [2],
  lineCap: 'round',
},
tooltip: {
  fixed: {
    enabled: false
  },
  x: {
    show: false
  },
  y: {
    title: {
      formatter: function (seriesName) {
        return ''
      }
    }
  },
  marker: {
    show: false
  }
}
};

var chart1 = new ApexCharts(document.querySelector("#line-1"), options1);

const dataTable = new simpleDatatables.DataTable("#datatable_1", {
	searchable: true,
	fixedHeight: false,
})

window.addEventListener('DOMContentLoaded', (event) => {
  chart.render();
  chart1.render();
  chart7.render();
  chart5.render();
});

