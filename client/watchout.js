var dataSet = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];

//set up of svg.  
var svg = d3.select('body')
    .append('svg')
    .attr('width', '100%')
    .attr('height', 550);

    //set up of image of asteroid.
    var img = svg.selectAll("image").data(dataSet);
    img.enter()
    .append("svg:image")
    .attr("id", function(data) { return "id" + data; })
    .attr("xlink:href", "asteroid.png")
    // .attr("height", "50")
    .attr("width", "50")
    .attr("x", function(d) { return Math.floor(Math.random() * (100 * d))})
    .attr("y", function(d) { return Math.floor(Math.random() * (100 * d))});

//scoreboard function
var highScore = 0;
var pts = 0;
var numofCollisions = 1;
img.on("mouseover", function() {
    d3.select(".collisions").select("span").text(numofCollisions);
    numofCollisions++;
    pts = 0;
   
})
function raiseScore() {
    d3.select(".current").select("span").text(pts);
    pts+=10;
    
    if( pts > highScore ) {
        highScore = pts;
        d3.select(".highScore").select("span").text(highScore);
    }
}
setInterval( raiseScore, 100 );


//asteroids movement
function update() {  
    // d3.select("svg").selectAll("image")
    // .transition()
    // .duration(750)
    // .attr("transform", "translate(" + data[0]  + "," + data[1] + ")");
    var allImg = img.data();
    for( var i = 0; i < allImg.length; i++ ) {
        var x = Math.floor(Math.random() * 500);
        var y = Math.floor(Math.random() * 500);
        var asteroidSelect = "#id" + i;
        function moveAsteroid(data) {
            d3.select(asteroidSelect)
            .transition()
            .duration(1000)
            .attr("transform", "translate(" + data[0]  + "," + data[1] + ")");
            
        }
        moveAsteroid([x,y])
    }
    
}
setInterval( update, 2000 );


var svg = d3.select('body'),
    width = +svg.attr("width"),
    height = +svg.attr("height");
radius = 20;
var circle_data = d3.range(1).map(function() {
    return{
        x : Math.round(Math.random() * (width - radius*2 ) + radius),
        y : Math.round(Math.random() * (height - radius*2 ) + radius)
    }; 
}); 

//add svg circles 
var circle = d3.select('svg')
	.append("g")
	.attr("class", "circle")
	.selectAll("circle")
        .data(circle_data)
        .enter()
        .append("circle")
        .attr("x", function(d) {return(d.x)})
        .attr("y", function(d) {return(d.y)})
        .attr("r", radius)
        .attr("fill", "green")
        
        var drag = d3.behavior.drag()
            .selection.call(drag);
        
//create drag handler with d3.drag()
//only interested in "drag" event listener, not "start" or "end"  
// debugger;      
// var drag_handler = d3.behavior.drag()
// // .drag('circle')
//     .on("drag", function(d) {
//           d3.select("circle")
//             .attr("x", d.x = d3.event.x  )
//             .attr("y", d.y = d3.event.y  );
//             }); 
        
      
// //apply the drag_handler to our circles 
selection.call(drag);    



// asteroidEnter.attr("cy", 60);
// asteroidEnter.attr("cx", function(d) { return d * 100 + 30; });
// asteroidEnter.attr("r", function(d) { return Math.sqrt(d); });
    
