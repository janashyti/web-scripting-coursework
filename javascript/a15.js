let arr = [
    { city: "London", population: 9002488},
    { city: "Ankara", population: 5747325},
    { city: "New York", population: 8804000},
    { city: "Athens", population: 637798},
    { city: "Tokyo", population: 13921000},
    { city: "Beijing", population: 21542000},
    { city: "Moscow", population: 12655050},
    { city: "Bangok", population: 8305218 },
    { city: "Addis Abbaba", population: 3040740},
    { city: "Berlin", population: 3677472},
    { city: "Madrid", population: 3305408},
    { city: "Rome", population: 2761632},
    { city: "Paris", population: 2139907},
    { city: "Amsterdam", population: 905234},
    { city: "Bern", population: 134591},
]

const svgWidth = 1300
const svgHeight = 1200

const paddingTopBottom = 100
const paddingLeftRight = 150

const graphWidth = svgWidth - (paddingLeftRight * 2)
const graphHeight = svgHeight - (paddingTopBottom * 2)

/* Add an svg to main */

let svg = d3.select("main")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .style("background-color", "black")

svg.append("g")
    .append("text")
    .attr("transform", `translate(300, ${paddingTopBottom - 15})`)
    .style("text-anchor", "middle")
    .attr("fill", "orange")
    .text("Capital Cities' Population Around The World ")

/* Create Scales */

let yScale = d3.scaleLinear()
    .domain([0, 22000000])
    .range([graphHeight, 0])

let cScale = d3.scaleLinear()
    .domain([0, 22000000])
    .range(["yellow", "red"])

console.log(cScale(50000))

let graph = svg.append("g")
    .attr("transform", `translate(${paddingLeftRight}, ${paddingTopBottom})`)
    
    /* bind data to graph */
        
let update = graph.selectAll("rect")
    .data(arr)

update.enter()
    .append("rect")
    .attr("x", (d, i) => i * 60)
    .attr("y", (d) => yScale(d.population))
    .attr("width", 20)
    .attr("height", (d) => graphHeight - yScale(d.population))
    .attr("fill", (d) => cScale(d.population))

/* Create axis */

let leftAxis = d3.axisLeft(yScale)
    .tickSize([10])

let yAxis = svg.append("g")
    .attr("transform", `translate(${paddingLeftRight - 30}, ${paddingTopBottom})`)
    .call(leftAxis)

yAxis.select("path")
    .style("stroke", "white")

yAxis.selectAll("text")
    .style("stroke", "white")

yAxis.selectAll("line")
    .style("stroke", "white")


let cityCodes = arr.map((d) => { return d.city })

let xScale = d3.scaleBand()
    .domain(cityCodes)
    .range([0, 900])

let bottomAxis = d3.axisBottom(xScale)
    
let xAxis = svg.append("g")
    .attr("transform", `translate(${paddingLeftRight - 20}, ${svgHeight - 45})`)
    .call(bottomAxis)

xAxis.select("path")
    .style("stroke", "white")

xAxis.selectAll("text")
    .style("stroke", "white")

xAxis.selectAll("line")
    .style("stroke", "white")






    






