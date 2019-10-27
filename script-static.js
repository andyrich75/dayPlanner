//This is setting the times of workday 9-5
function setTime(){
    for (var i = 9; i < 18; i++) {
      var description
      var hour = $('.hour');
      hour.attr("data-hour", i);
      hour.text(
       moment()
          .hour(i)
          .format("h A")
      )};
  }
  
  setTime();