//function for setting the day of the week
function todaysDate() {
    //Use Moment.js to call day of the week
    var currentDay = moment().format("dddd");
    var currentDate = moment().format("MMMM Do YYYY");
    $("#currentDay").text(currentDay + " " + currentDate);
    //print to dom current day
  }
  //funtion for dynamically creating input fields
  function displayNewSchedule() {
    //for loop to loop through 9 to 5 in 24 hour format
    for (var i = 9; i < 18; i++) {
      var block = $('<div class="time-block"></div>');
      var row = $('<div class="row"></div>');
      var hour = $('<div class="hour"></div>');
      var description = $('<textarea class="description"></textarea> ');
      var saveBtn = $('<button class="saveBtn">Save</button>');
      //set the data attribute sub index to 24 hour format
      hour.attr("data-hour", i);
      //set the text to sub index to 
      hour.text(
        moment()
          .hour(i)
          .format("h A")
      );
      //append everything together
      row.append(hour, description, saveBtn);
      block.append(row);
      $(".container").append(block);
    }
  }
//on document ready
$(document).ready(function() {
    //on button save, set item into local storage
    $(".saveBtn").on("click", function() {
      //save THIS input and time based on data hour attr into local storage
      var scheduleInput = $(this)
        .siblings(".description")
        .val();
      var time = $(this)
        .siblings(".hour")
        .attr("data-hour");
        //set the key value pairs based on these inputs, with unique identifier
      localStorage.setItem("val-" + time, scheduleInput);
    });
  });

    $(".saveBtn").on("click", function (event) {
        event.preventDefault();

        var time = $(event.target).data("time");
        var task = $("#task_" + time).val();

        console.log("The click button is working");
        /*if input is not empty or null, then*/
        if (task !== "") {
            console.log(task);

            /*saves to local storage*/
            localStorage.setItem(time, task);
        } else {
            alert("Please, tell us all about your busy life!");
        }  
    });
//function to render schedule and pulling down the items from local storage and setting them as text and data attribute to textarea
funtion getSchedule() {
//each timeblock , pass over an index 
$(".time-block").each(function(i) {
    //save index as variable and add 9 hours for work day
    var hourIndex = i + 9;
    //local storage for variable to identify
    var saved =localStorage.getItem("val-" + hourIndex);
})
}