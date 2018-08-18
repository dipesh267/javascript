
function init(){
    var tbody = d3.select("tbody");

    dataSet.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
     });
}

var reset = d3.select("#reset_btn");
var search = d3.select("#search_btn");

//working code
/*
submit.on("click", function() {

  // Prevent the page from refreshing
    d3.event.preventDefault();
    
    var inputDate = d3.select("#date").property("value");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");
    var inputDuration = d3.select("#duration").property("value");
    var inputDescription = d3.select("#description").property("value");

    var toWrite = {
        datetime: inputDate,
        city: inputCity,
        state:inputState,
        country:inputCountry,
        shape:inputShape,
        duration:inputDuration,
        comments:inputDescription
    };

    dataSet.push(toWrite);
});
*/
reset.on("click", function(){
    init();
});

search.on("click", function() {
    d3.event.preventDefault();
    var tbl = document.getElementById("main_table");
    tbl.innerHTML="";
    // Prevent the page from refreshing
    var tbody = d3.select("tbody");
    dataSet.forEach((sighting) => {
        var row = tbody.append("tr");
        if(sighting.datetime == d3.select("#date").property("value")){
            Object.entries(sighting).forEach(([key, value]) => {
                var cell = tbody.append("td");
                cell.text(value);
            });
        }
    });
    document.getElementById('date').value = '';
});

init();