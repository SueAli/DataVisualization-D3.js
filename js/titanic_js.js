function draw(data) {
/*
D3.js setup code
*/

var margin = 75,
width = 700 - margin,
height = 400 - margin;
/// adding radio button filters for Sex
var sexData = ["All", "Females", "Males"], 
    j = 1;  // Choose All as default

// Create the gender selectors
var form = d3.select("body").append("form");
form.append('label')
    .html('Gender:')
    .attr('class','radio-group-label')
    .append('br');
form.append('input')
    .attr('type', 'radio')
    .attr('value', 'all')
    .attr('name', 'gender')
    .attr('checked','checked');
form.append('label')
    .html('All')
    .attr('class','radio_label');
form.append('input')
    .attr('type', 'radio')
    .attr('value', 'female')
    .attr('name', 'gender');
form.append('label')
    .html('Female')
    .attr('class','radio_label');
form.append('input')
    .attr('type', 'radio')
    .attr('value', 'male')
    .attr('name', 'gender');
form.append('label')
    .html('Male')
    .attr('class','radio_label');
form.append('br');
form.append('br');
//// Create the age selector 
form.append('label')
    .html('Age:')
    .attr('class','radio-group-label');
form.append('br');

form.append('input')
    .attr('type', 'radio')
    .attr('value', 'all')
    .attr('name', 'age')
    .attr('checked','checked');
form.append('label')
    .html('All')
    .attr('class','radio_label');

form.append('input')
    .attr('type', 'radio')
    .attr('value', '0_18')
    .attr('name', 'age');
form.append('label')
    .html('0-18')
    .attr('class','radio_label');

form.append('input')
    .attr('type', 'radio')
    .attr('value', '19_40')
    .attr('name', 'age');
form.append('label')
    .html('19-40')
    .attr('class','radio_label');

form.append('input')
    .attr('type', 'radio')
    .attr('value', '41_60')
    .attr('name', 'age');
form.append('label')
    .html('41-60')
    .attr('class','radio_label');

form.append('input')
    .attr('type', 'radio')
    .attr('value', 'greaterthan60')
    .attr('name', 'age');
form.append('label')
    .html('> 60 ')
    .attr('class','radio_label');

form.attr('class','form-class');


/*
Dimple.js Chart construction code
*/
// data binding 
function updateChart(inputData ){
  /*
  This function redraw the chart based on the provided data 
  */
  //debugger;
  //inputData = inputData.sort(function(a,b) { return +a["Class"] - +b["Class"]; });
  //debugger;
  var svg = d3.select("body")
  .append("svg")
  .attr("width", width + margin)
  .attr("height", height + margin)
  .append('g')
  .attr('class','chart');

  var myChart = new dimple.chart(svg, inputData);
  var x = myChart.addCategoryAxis("x", ["Pclass","Survived"]);
  x.title= "Passenger class";
  x.addOrderRule(['1st','2nd','3rd']); // Order x labels 
  myChart.addMeasureAxis("y", "Count");
  // order legend labels to make sure color is the same for each category
  var survivedSeries = myChart.addSeries("Survived", dimple.plot.bar);
  survivedSeries.addOrderRule(["Survived","Died"]); 
  // add chart legend
  myChart.addLegend(500, 10, 150, 20, "right");


  myChart.draw();
}

updateChart(data);

/// update charts' data based on selected filters 
d3.selectAll('input').on('click',function(){
  var genderValue = d3.select('input[name="gender"]:checked').node().value;
  var ageValue = d3.select('input[name="age"]:checked').node().value;
  //first, apply gender filter 
  var filteredData = data.filter(
    function(d){
      if(genderValue === 'all'){
        return d;
      }else if (genderValue === d['Sex'] ) {
        return d;
      };
    });
  filteredData = filteredData.filter(
    function(d){
      if (ageValue==='all') {
        return d;
      }else if ( (ageValue==='greaterthan60') && (+d['Age'] > 60) ){
        return d;
      } else if ( (ageValue==='40_60') && (+d['Age'] >= 40) ){
        return d;
      } else if ( (ageValue==='19_40') && (+d['Age'] >= 19) ){
        return d;
      }else if ( (ageValue==='0_18') && (+d['Age'] <= 18) ){
        return d;
      } 
      ;

    });
  //debugger;
  d3.selectAll('svg').remove();
  updateChart(filteredData);
})
};