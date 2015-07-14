// jshint devel:true
// D3.JS Chart

var width = 640, height = 480; // Measures for graph

var x = d3.scale.ordinal().rangeRoundBands([0, width], .1), //
    y = d3.scale.linear().range([0, height]); //

var xAxis = d3.svg.axis().scale(x).orient("bottom"),
    yAxis = d3.svg.axis().scale(y).orient("left");

var svg = d3.select("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g");


