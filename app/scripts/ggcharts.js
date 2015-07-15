google.load("visualization", "1.1", {packages:["bar"]});
google.setOnLoadCallback(drawStuff);

// jsonData = $.ajax({
//   url: "scripts/data-monthly.json",
//   dataType:"json",
//   async: false
// }).responseText;

function drawStuff() {
  var data = new google.visualization.arrayToDataTable([
    ["Period", "Rides", { role: 'style' }],
    ["2014-12", 5.000, "#0000cf"],
    ["2015-01", 12.600, "#0000cf"],
    ["2015-02", 22.273, "#0000cf"],
    ["2015-03", 16.478, "#0000cf"],
    ["2015-04", 18.129, "#0000cf"],
    ["2015-05", 20.102, "#0000cf"],
    ["2015-06", 12.812, "#0000cf"]
  ]);

  var options = {
    // title: 'Chess opening moves',
    width: '100%',
    legend: { position: 'none' },
    // chart: { subtitle: 'popularity by percentage' },
    // axes: {
    //   x: {
    //     0: { side: 'top', label: 'White to move'}
    //   }
    // },
    bar: { groupWidth: "90%" },
    color: {"#eaeaea"}
  };

  var chart = new google.charts.Bar(document.getElementById('chart'));
  // Convert the Classic options to Material options.
  chart.draw(data, google.charts.Bar.convertOptions(options));
};