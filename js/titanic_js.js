function draw(data) {
    /*
    D3.js setup code
    */
    var margin = 75,
        width = 800 - margin,
        height = 400 - margin;

    // adding radio button filters for Sex
    var sexData = ["All", "Females", "Males"],
        j = 1; // Choose All as default
    // Create the gender selectors
    var form = d3.select("body").append("form");
    form.append('label')
        .html('Gender:')
        .attr('class', 'radio-group-label')
        .append('br');
    form.append('input')
        .attr('type', 'radio')
        .attr('value', 'all')
        .attr('name', 'gender')
        .attr('checked', 'checked');
    form.append('label')
        .html('All')
        .attr('class', 'radio_label');
    form.append('input')
        .attr('type', 'radio')
        .attr('value', 'female')
        .attr('name', 'gender');
    form.append('label')
        .html('Female')
        .attr('class', 'radio_label');
    form.append('input')
        .attr('type', 'radio')
        .attr('value', 'male')
        .attr('name', 'gender');
    form.append('label')
        .html('Male')
        .attr('class', 'radio_label');
    form.append('br');
    form.append('br');
    //// Create the age selector
    form.append('label')
        .html('Age:')
        .attr('class', 'radio-group-label');
    form.append('br');
    form.append('input')
        .attr('type', 'radio')
        .attr('value', 'all')
        .attr('name', 'age')
        .attr('checked', 'checked');
    form.append('label')
        .html('All')
        .attr('class', 'radio_label');
    form.append('input')
        .attr('type', 'radio')
        .attr('value', '0_18')
        .attr('name', 'age');
    form.append('label')
        .html('0-18')
        .attr('class', 'radio_label');
    form.append('input')
        .attr('type', 'radio')
        .attr('value', '19_40')
        .attr('name', 'age');
    form.append('label')
        .html('19-40')
        .attr('class', 'radio_label');
    form.append('input')
        .attr('type', 'radio')
        .attr('value', '41_60')
        .attr('name', 'age');
    form.append('label')
        .html('41-60')
        .attr('class', 'radio_label');
    form.append('input')
        .attr('type', 'radio')
        .attr('value', 'greaterthan60')
        .attr('name', 'age');
    form.append('label')
        .html('> 60 ')
        .attr('class', 'radio_label');
    form.attr('class', 'form-class');

    d3.select("body").append('br');
    d3.select("body").append('br');
    // This variable holds the the message to be displayed 
    //in each case of applying different filters.
    var msgText = d3.select("body")
        .append("text")
        .text('"First class passengers were more likely to survive, while third class passengers were more likely to die"')
        .attr('class', 'msg-class');




    /*
    Dimple.js Chart construction code
    */
    // data binding
    function updateChart(inputData) {
        /*
        This function redraw the chart based on the provided data
        */
        var svg = d3.select("#left_area")
            .append("svg")
            .attr("width", width + margin)
            .attr("height", height + margin)
            .append('g');
        //.append('class','chart');

        var myChart = new dimple.chart(svg, inputData);
        var x = myChart.addCategoryAxis("x", ["Pclass", "Survived"]);
        x.title = "Passenger class";
        x.addOrderRule(['1st', '2nd', '3rd']); // Order x labels
        var y = myChart.addMeasureAxis("y", "Count");
        // Fixed y axis scale 
        y.overrideMin = 0;
        y.overrideMax = 400;
        y.ticks = 18;
        // order legend labels to make sure color is the same for each category
        var survivedSeries = myChart.addSeries("Survived", dimple.plot.bar);
        survivedSeries.addOrderRule(["Survived", "Died"], true);
        // add chart legend
        myChart.addLegend(600, 10, 150, 20, "right");
        myChart.draw(800);
    }
    updateChart(data);
    /// update charts' data based on selected filters
    d3.selectAll('input').on('click', function() {
        var genderValue = d3.select('input[name="gender"]:checked').node().value;
        var ageValue = d3.select('input[name="age"]:checked').node().value;
        //first, apply gender filter
        var filteredData = data.filter(
            function(d) {
                if (genderValue === 'all') {
                    return d;
                } else if (genderValue === d['Sex']) {
                    return d;
                };
            });
        filteredData = filteredData.filter(
            function(d) {
                if (ageValue === 'all') {
                    return d;
                } else if ((ageValue === 'greaterthan60') && (+d['Age'] > 60)) {
                    return d;
                } else if ((ageValue === '40_60') && (+d['Age'] >= 40)) {
                    return d;
                } else if ((ageValue === '19_40') && (+d['Age'] >= 19)) {
                    return d;
                } else if ((ageValue === '0_18') && (+d['Age'] <= 18)) {
                    return d;
                };
            });

        d3.selectAll('svg').remove();

        // update message
        msgText.attr('class', 'msg-class');

        if (filteredData.length === 0) {
            msgText.text('"No pessangers were having the selected filters values!"')
                .attr('class', 'warning-class');
        } else {
            updateChart(filteredData);
            if (genderValue === 'all') {
                msgText.text('"First class passengers were more likely to survive, while third class passengers were more likely to die."');
            } else if (genderValue === 'female') {
                msgText.text('"In any age range & passenger class, females were more likely to survive."');
            } else {
                msgText.text('"Males were more likely to die in all passenger classes."');
            }
        };
    })
};