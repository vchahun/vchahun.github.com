function starsgraph() {
    var data = [89516, 146105, 299754, 570215, 374471];
    var lw = 100, bw = 15, mw = 10, h = 175;
    var W = lw + (bw+mw) * data.length;
    var chart = d3.select("#stars-graph")
        .append("svg")
        .attr("class", "chart")
        .attr("width", W)
        .attr("height", h+20);
    var y = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([0, h]);
    chart.selectAll("rect")
        .data(data)
        .enter().append("rect")
        .attr("x", function(d, i) { return lw+i * (bw+mw); })
        .attr("y", function(d, i) {return h-y(d); })
        .attr("height", y)
        .attr("width", bw);
    chart.selectAll(".rule")
        .data(y.ticks(5))
        .enter().append("text")
        .attr("class", "rule")
        .attr("x", lw-10)
        .attr("y", function(d, i) {return h-y(d); })
        .attr("text-anchor", "end")
        .text(function(d) { return (d==0 ? "0": (d/1000)+"k")});
    chart.selectAll(".stars")
        .data(data)
        .enter().append("text")
        .attr("class", "stars")
        .attr("transform", function(d, i) {return "rotate(-90) translate(-"+(h*0.98)+" "+(lw+(i+0.45)*(bw+mw))+")"; })
        .text(function(d, i) { return Array(i+2).join("★ ");});
    chart.append("line")
        .attr("y1", h+0.5).attr("y2", h+0.5)
        .attr("x1", lw-mw/2).attr("x2", W-mw/2)
        .style("stroke", "black");
    chart.append("text")
        .attr("y", h+15)
        .attr("x", lw+(bw+mw) * data.length/2)
        .text("star rating")
        .style("text-anchor", "middle")
        .style("fill", "black");
    console.log("stars");
}

function prgraph() {
    var data = [4564, 5286, 1341, 291];
    var lw = 100, bw = 15, mw = 10, h = 180;
    var W = lw + (bw+mw) * data.length;
    var chart = d3.select("#pricerange-graph")
        .append("svg")
        .attr("class", "chart")
        .attr("width", W)
        .attr("height", h+20);
    var y = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([0, h-20]);
    chart.selectAll("rect")
        .data(data)
        .enter().append("rect")
        .attr("x", function(d, i) { return lw+i * (bw+mw); })
        .attr("y", function(d, i) {return h-y(d); })
        .attr("height", y)
        .attr("width", bw);
    chart.selectAll(".rule")
        .data(y.ticks(5))
        .enter().append("text")
        .attr("class", "rule")
        .attr("x", lw-10)
        .attr("y", function(d, i) {return h-y(d)+2; })
        .attr("text-anchor", "end")
        .text(function(d) { return (d==0 ? "0": (d/1000)+"k")});
    chart.selectAll(".pr")
        .data(data)
        .enter().append("text")
        .attr("class", "pr")
        .attr("x", function(d, i) { return lw + i * (bw+mw) + bw/2 })
        .attr("y", function(d, i) {return h-y(d) - 5 })
        .style("text-anchor", "middle")
        .text(function(d, i) { return Array(i+2).join("$");});
    chart.append("line")
        .attr("y1", h+0.5).attr("y2", h+0.5)
        .attr("x1", lw-mw/2).attr("x2", W-mw/2)
        .style("stroke", "black");
    chart.append("text")
        .attr("y", h+15)
        .attr("x", lw+(bw+mw) * data.length/2)
        .text("price range")
        .style("text-anchor", "middle")
        .style("fill", "black");
}

starsgraph();
prgraph()
