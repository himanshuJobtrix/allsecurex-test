/**
 * Theme: Unikit - Responsive Bootstrap 4 Admin Dashboard
 * Author: Mannatthemes
 * Dashboard Js
 */

var options = {
  chart: {
    height: 380,
    type: 'line',
    stacked: false,
    toolbar: {
      show: false
    },
  },
  // If you'd like to display numeric labels on bars/lines themselves:
  dataLabels: {
    enabled: true,
    style: {
      fontSize: '10px'
    },
    // Convert numeric values to e.g. "$2.5M"
    formatter: function (val) {
      return '$' + val + 'M';
    }
  },
  // Two columns + two lines => stroke widths
  stroke: {
    width: [0, 0, 3, 3]
  },
  // 4-series data, each in "M" (millions of USD)
  series: [
    {
      name: 'Max Loss',
      type: 'column',
      data: [3, 6, 5, 3, 4, 2]  // i.e. 3 -> $3M
    },
    {
      name: 'Min Loss',
      type: 'column',
      data: [1, 0.5, 2, 1, 1, 0.75] // i.e. 0.5 -> $0.5M
    },
    {
      name: 'Avg Loss',
      type: 'line',
      data: [2, 2.8, 3.6, 2.2, 2, 1.1]
    },
    {
      name: 'Loss Magnitude',
      type: 'line',
      data: [2.5, 4.2, 3.5, 2.5, 1.8, 1.2]
    }
  ],
  // Custom colors for each series
  colors: [
    "#2a76f4",                   // Max Loss (column)
    "rgba(42, 118, 244, .18)",   // Min Loss (column)
    "#fa5c7c",                   // Avg Loss (line)
    "rgba(251, 182, 36, .6)"     // Loss Magnitude (line)
  ],
  // Categories for X-axis
  xaxis: {
    categories: ["DI","II","OI","SCI","ISI","InI"],
    axisBorder: {
      show: true,
      color: '#bec7e0',
    },
    axisTicks: {
      show: true,
      color: '#bec7e0',
    }
  },
  // Each y-axis correlates to a series index in the order they're listed
  yaxis: [
    // Y-axis #1 => Max Loss
    {
      axisTicks: { show: true },
      axisBorder: { show: true, color: '#2a76f4' },
      labels: {
        style: { color: '#2a76f4' },
        formatter: function (val) {
          return '$' + val + 'M'; // e.g. 3 => "$3M"
        }
      },
      title: {
        text: "Max Loss (M USD)"
      }
    },
    // Y-axis #2 => Min Loss
    {
      axisTicks: { show: true },
      axisBorder: { show: true, color: 'rgba(42, 118, 244, .18)' },
      labels: {
        style: { color: 'rgba(42, 118, 244, .9)' },
        offsetX: 10,
        formatter: function (val) {
          return '$' + val + 'M';
        }
      },
      title: {
        text: "Min Loss (M USD)"
      }
    },
    // Y-axis #3 => Avg Loss
    {
      opposite: true,
      axisTicks: { show: true },
      axisBorder: { show: true, color: '#fa5c7c' },
      labels: {
        style: { color: '#fa5c7c' },
        formatter: function (val) {
          return '$' + val + 'M';
        }
      },
      title: {
        text: "Avg Loss (M USD)"
      }
    },
    // Y-axis #4 => Loss Magnitude
    {
      opposite: true,
      axisTicks: { show: true },
      axisBorder: { show: true, color: '#fbb624' },
      labels: {
        style: { color: '#fbb624' },
        formatter: function (val) {
          return '$' + val + 'M';
        }
      },
      title: {
        text: "Loss Magnitude (M USD)"
      }
    }
  ],
  // Tooltip shows currency in M
  tooltip: {
    followCursor: true,
    y: {
      formatter: function (val) {
        if (typeof val !== "undefined") {
          return '$' + val + 'M';
        }
        return val;
      }
    }
  },
  // Highlight risk threshold at $0.5M (y=0.5)
  annotations: {
    yaxis: [
      {
        y: 0.5,
        borderColor: '#FF4560',
        label: {
          borderColor: '#FF4560',
          style: {
            color: '#fff',
            background: '#FF4560'
          },
          text: 'Risk Threshold @ $0.5M'
        }
      }
    ]
  },
  grid: {
    borderColor: '#f1f3fa'
  },
  legend: {
    offsetY: 6
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        yaxis: {
          show: false
        },
        legend: {
          show: false
        }
      }
    }
  ]
};

var chart = new ApexCharts(
  document.querySelector("#apex_mixed"),
  options
);


var chart = new ApexCharts(document.querySelector("#crypto_dash_main"), options);
chart.render();

