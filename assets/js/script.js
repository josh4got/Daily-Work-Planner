let saveBtnEl = $(".saveBtn");
let today = dayjs();
let timeblocks = $(".time-block");
console.log(timeblocks);
$("#currentDay").text(today.format("MMM D, YYYY"));
console.log(today.format("MMM D, YYYY"));

$(document).ready(function () {
  console.log("ready");
  // when save btn clicked locally store the id and text as key/value
  saveBtnEl.on("click", function () {
    localStorage.setItem(
      $(this).parent().attr("id"),
      $(this).siblings(".description").val()
    );
  });
  // sets text of box to locally stored value selected by id
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
});

// remove existing classes from timeblocks & apply new classes based on current time
for (var i = 0; i < timeblocks.length; i++) {
  $(timeblocks[i]).removeClass("past present future");
  if (timeblocks[i].id < today.format("H")) $(timeblocks[i]).addClass("past");
  else if (timeblocks[i].id > today.format("H"))
    $(timeblocks[i]).addClass("future");
  else $(timeblocks[i]).addClass("present");
}
