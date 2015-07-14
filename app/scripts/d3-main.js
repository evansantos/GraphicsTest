// jshint devel:true
// D3.JS Chart

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 800 - margin.left - margin.right,
    height = 480 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], 0.1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var svg = d3.select(".graph").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("scripts/data-monthly.json", function(error, data) {
  if (error) throw error;

  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.rides; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(0)")
      .attr("y", -15)
      .attr('x', 25 )
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Rides");

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) {
        return height - y(d.rides);
      })
      .attr("height", function(d) {
        return height - y(d.rides);
      });
});

////////////
var width = 420,
    barHeight = 50;

var x = d3.scale.linear()
    .range([0, width]);

var chart = d3.select(".chart2")
    .attr("width", width);


d3.json("scripts/data.json", function(error, data) {
  if (error) throw error;

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, width]);
 x.domain([0, d3.max(data, function(d) { return d.taxiTaken; })]);

  chart.attr("height", barHeight * data.length);

  var bar = chart.selectAll("g")
      .data(data)
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

  bar.append("rect")
      .attr("width", function(d) { return x(d.taxiTaken); })
      .attr("height", barHeight - 1);

  bar.append("text")
      .attr("x", 50)
      .attr("y", 20)
      .attr("class", "name")
      .attr("dy", ".35em")
      .html(function(d) { return d.name; });

  bar.append("text")
      .attr("x", 0)
      .attr("y", 35)
      .attr("class", "email")
      .attr("dy", ".35em")
      .html(function(d) { return d.email; });

  bar.append("text")
      .attr("x", function(d) { return x(d.taxiTaken)+ 30;})
      .attr("y", barHeight/2)
      .attr("class", "counter")
      .attr("dy", ".35em")
      .attr("stroke-width","60")
      .html(function(d) { return d.taxiTaken; });
});