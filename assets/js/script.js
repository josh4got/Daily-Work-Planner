let saveBtnEl = $(".saveBtn");
let today = dayjs();
let timeblocks = $(".time-block");
// Applies todays date to top of page
$("#currentDay").text(today.format("MMM D, YYYY"));
// Allows DOM to render before interacting with it
$(document).ready(function () {
  // Locally store the id and text as key/value when button is pressed
  saveBtnEl.on("click", function () {
    localStorage.setItem(
      $(this).parent().attr("id"),
      $(this).siblings(".description").val()
    );
  });
  // Displays text from locally value of locally stored item
  $("#08 .description").val(localStorage.getItem("08"));
  $("#09 .description").val(localStorage.getItem("09"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
  // Removes existing class and applies correct class based on the hour
  for (var i = 0; i < timeblocks.length; i++) {
    $(timeblocks[i]).removeClass("past present future");
    if (timeblocks[i].id < today.format("H")) $(timeblocks[i]).addClass("past");
    else if (timeblocks[i].id > today.format("H"))
      $(timeblocks[i]).addClass("future");
    else $(timeblocks[i]).addClass("present");
  }
});
