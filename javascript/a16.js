//https://opendoorsdata.org/data/international-students/all-places-of-origin/

function addAxis(svgSel, d, xscale, yscale, firstStack){
	let dates, maxPValues, maxNValues, blankAxis;
	
	if(d){
      dates = d.map( (d) => d.month );
      if(firstStack){
        maxPValues = d.map( (d) => {
            let sum = 0;
            for(let [key, value] of Object.entries(d)){ sum += key != "month" ? value : 0; }
            return sum;
         });
        maxNValues = [0,0]; 
      }
      else {
      	maxPValues = d.map( (d) => {
            let sum = 0;
            for(let [key, value] of Object.entries(d.fruitSales)){ sum += key != "month" ? (value > 0 ? value : 0): 0; }
            return sum;
         });
        maxPValues.push(0);
        
        maxNValues = d.map( (d) => {
            let sum = 0;
            for(let [key, value] of Object.entries(d.fruitSales)){ sum += key != "month" ? (value < 0 ? value : 0 ): 0; }
            return sum;
         });
        maxNValues.push(0);
        }
    }
    else{
    	dates = [0,0];
    	blankAxis = true;
        maxPValues = [0,0];
        maxNValues = [0,0];
    }
    
    if(xscale){
        xscale.domain([dates[0], dates[dates.length - 1]]);
        // Add xAxis
        let xAxis = d3.axisBottom(xscale)
        	.tickValues(blankAxis ? [] : dates)
        	.tickFormat(d3.timeFormat("%b"));
        svgSel.append("g")
            .attr("transform", "translate(0, 275)")
            .call(xAxis);
    }
    if(yscale){
        yDomain = d3.extent(maxPValues.concat(maxNValues));
        yscale.domain(yDomain);
        // Add yAxis
        let yAxis = d3.axisLeft(yscale)
            .ticks(8);
        svgSel.append("g")
            .attr("transform", "translate(49, 0)")
            .call(yAxis);
    }
}



var data = [
 {month: new Date(2020, 0, 1), year2021: 1.03, year2022: 1.42, year2019: 1.52},
 {month: new Date(2020, 1, 1), year2021: 0.93, year2022: 1.84, year2019: 1.14},
 {month: new Date(2020, 2, 1), year2021: 1.56, year2022: 2.5, year2019: 1.31},
 {month: new Date(2020, 3, 1), year2021: 1.64, year2022: 2.45, year2019: 0.65},
 {month: new Date(2020, 4, 1), year2021: 2.17, year2022: 2.69, year2019: 0.69},
 {month: new Date(2020, 5, 1), year2021: 3.06, year2022: 3.3, year2019: 0.52},
 {month: new Date(2020, 6, 1), year2021: 3.74, year2022: 2.49, year2019: 0.22},
 {month: new Date(2020, 7, 1), year2021: 3.00, year2022: 1.91, year2019: 0.4},
 {month: new Date(2020, 8, 1), year2021: 2.44, year2022: 2.13, year2019: 0},
 {month: new Date(2020, 9, 1), year2021: 2.6, year2022: 1.6, year2019: 0.1},
];

var stackGen = d3.stack()
 .keys(["year2021", "year2022", "year2019"]);
   
var stackedSeries = stackGen(data); 

var xScale = d3.scaleTime().domain([data[0].month, data[9].month]).range([50, 290]);
var yScale = d3.scaleLinear().domain([0,10]).range([275, 25]);

addAxis(d3.select("#demo0"), data, xScale, yScale, true); 

var colorScale = d3.scaleOrdinal()
 .domain(["year2021", "year2022", "year2019"])
 .range(["yellow", "orange", "red"]);

var areaGen = d3.area()
 .x((d) => xScale(d.data.month))
 .y0((d) => yScale(d[0]))
 .y1((d) => yScale(d[1]));
   
d3.select("#demo0")
 .selectAll(".areas")
 .data(stackedSeries)
 .join("path")
 .attr("d", areaGen)
 .attr("fill", (d) => colorScale(d.key));
   

 


  let svg = d3.select("#demo4");

  /*** Draw X-Axis ***/
  var xScale = d3.scaleLinear()
    .domain([1, 3])
    .range([25, 475]);

  var xAxis = d3.axisBottom(xScale);

  svg.append("g")
    .attr("transform", "translate(0,80)");
    //.call(xAxis);

  /*** Create color scale ***/
  var colorScale = d3.scaleLinear()
    .domain([0,2500])
    .range(["yellow", "red"]);

  /*** Draw data points using color scale ***/

  svg.selectAll("circle")
    .data([0, 1050, 2500])
    .enter()
    .append("circle")
    .attr("cx", (d,i) => xScale(i + 1))
    .attr("cy", 60)
    .attr("r", 13)
    .attr("fill", (d) => colorScale(d));
  

  svg.append("g")
    .attr("transform", "translate(500,20)");

    svg.append("text")
    .text("Year 2021 ")
    .attr("x", 45)
    .attr("y", 65);

    svg.append("text")
    .text("Year 2022")
    .attr("x", 270)
    .attr("y", 65);

    svg.append("text")
    .text("Year 2019")
    .attr("x", 495)
    .attr("y", 65);

    svg.append("g")
    .append("text")
    .attr("transform", `translate(300, ${30 - 15})`)
    .style("text-anchor", "middle")
    .attr("fill", "black")
    .text("US Citizen Departures to International Regions (in millions)")


    
    
    





